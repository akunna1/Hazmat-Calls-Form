import { supabaseServer } from '../../lib/supabaseServer'
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'

export async function POST(req: Request) {
  try {
    // 1. Taking the inputs as data from the request body
    const data = await req.json()

    // 2. Processing the inputs (Create PDF, add data, upload, send email notification)

    // Creating a new PDF
    const pdfDoc = await PDFDocument.create()
    let page = pdfDoc.addPage([612, 792]) // standard letter size
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold)

    let y = 750

    const maxWidth = 500
    const leftMargin = 50

    // Helper: Auto page break
    const checkPageBreak = () => {
      if (y < 80) {
        page = pdfDoc.addPage([612, 792])
        y = 750
      }
    }

    // Helper: Drawing a line with automatic wrapping
    const drawLine = (label: string, value: string) => {
      const text = `${label}: ${value || ''}`
      const words = text.split(' ')
      let line = ''

      for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + ' '
        const width = font.widthOfTextAtSize(testLine, 12)

        if (width > maxWidth && i > 0) {
          checkPageBreak()

          page.drawText(line.trim(), {
            x: leftMargin,
            y,
            size: 12,
            font,
            color: rgb(0, 0, 0)
          })

          y -= 18 // spacing between wrapped lines
          line = words[i] + ' '
        } else {
          line = testLine
        }
      }

      checkPageBreak()

      page.drawText(line.trim(), {
        x: leftMargin,
        y,
        size: 12,
        font,
        color: rgb(0, 0, 0)
      })

      y -= 20 // spacing before the next field
    }

    // Helper: Drawing a section subtitle
    const drawSubtitle = (title: string) => {
      checkPageBreak()
      page.drawText(title, {
        x: leftMargin,
        y,
        size: 14,
        font: boldFont,
        color: rgb(0, 0, 0)
      })
      y -= 25
    }

    // Form Title
    page.drawText('HAZMAT CALLS AND COMMERCIAL TRUCKING INCIDENTS', {
      x: leftMargin,
      y,
      size: 16,
      font,
      color: rgb(0, 0, 0)
    })
    y -= 30

    // Incident Date, Time & Number Section
    drawSubtitle('Incident Information:')
    drawLine('Date', data.incidentDate)
    drawLine('Time', data.incidentTime)
    drawLine('Incident Number', data.incidentNumber)
    drawLine("Street", data.incidentStreet)
    drawLine("City", data.incidentCity)
    drawLine("State", data.incidentState)
    drawLine("Zip", data.incidentZip)

    y -= 20

    // Party Information Section
    drawSubtitle('Party Information:')
    drawLine('Name', data.name)
    drawLine('Phone', data.phone)
    drawLine('Email', data.email)
    drawLine('Street', data.street)
    drawLine('City', data.city)
    drawLine('State', data.state)
    drawLine('Zip', data.zip)

    y -= 20

    // Company Information Section
    drawSubtitle('Company Information:')
    drawLine('Company Name', data.name2)
    drawLine('Phone', data.phone2)
    drawLine('Email', data.email2)
    drawLine('Street', data.street2)
    drawLine('City', data.city2)
    drawLine('State', data.state2)
    drawLine('Zip', data.zip2)
    drawLine('Insurance Name', data.insuranceName)
    drawLine('Insurance Policy Number', data.insurancePolicyNumber)
    drawLine('Website', data.website)
    drawLine('USDOT / SAFER Number', data.usdotSafer)

    y -= 20

    // Vehicle Information Section
    drawSubtitle('Vehicle Information:')
    drawLine('Make', data.make)
    drawLine('Model', data.model)
    drawLine('Year', data.year)
    drawLine('VIN Number', data.vinNumber)
    drawLine('USDOT Number', data.usdotNumber)
    drawLine('Vehicle Insurance Company', data.vehicleInsuranceCompany)
    drawLine('Vehicle Insurance Policy Number', data.vehicleInsurancePolicyNumber)
    drawLine('Other Vehicle Details', data.otherVehicleDetails)

    y -= 20

    // Other Information Section
    drawSubtitle('Other Information:')
    drawLine('NCSHP Report Number', data.ncshpNumber)
    drawLine('NCSHP Trooper Name', data.ncshpName)
    drawLine('NCSHP Unit Number', data.ncshpUnitNumber)
    drawLine('DPD/DSO Report Number', data.dpdNumber)
    drawLine('DPD/DSO Trooper Name', data.dpdName)
    drawLine('DPD/DSO Unit Number', data.dpdUnitNumber)

    // Converting PDF to bytes
    const pdfBytes = await pdfDoc.save()
    const buffer = Buffer.from(pdfBytes)

    // Creating a file name
    const safeName = (data.name || 'Unknown').replace(/\s+/g, '-')
    const safeDate = (data.incidentDate || '').replace(/\//g, '-')
    const fileName = `hazmat-calls-${safeName}-${safeDate}-${Date.now()}.pdf`

    // Uploading to Supabase Storage
    const { error } = await supabaseServer.storage
      .from('form-pdfs')
      .upload(fileName, buffer, {
        contentType: 'application/pdf'
      })

    if (error) throw error

    // Getting public link
    const { data: publicUrlData } = supabaseServer.storage
      .from('form-pdfs')
      .getPublicUrl(fileName)

    const publicUrl = publicUrlData.publicUrl

    // Sending email notification
    const emailRes = await fetch(
      "https://zllpgqwytjlstygdnjvd.supabase.co/functions/v1/send-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`
        },
        body: JSON.stringify({
          to: "durhamfd.nc@gmail.com",
          subject: "Durham Fire Forms",
          html: `
            <h2>Hazmat Calls and Commercial Trucking Incidents Form Submission</h2>
            <p><strong>Submitted By:</strong> ${data.name}</p>
            <p><strong>Incident Number:</strong> ${data.incidentNumber}</p>
            <p><strong>Submitted On:</strong> ${new Date().toLocaleString()}</p>
            <p>The full record can be accessed through the link below.</p>
            <p><a href="${publicUrl}">View PDF</a></p>
          `,
        }),
      }
    )

    // Checking if email was sent successfully
    if (!emailRes.ok) {
      const errorData = await emailRes.json()
      throw new Error(`Email send failed: ${errorData.error || emailRes.statusText}`)
    }

    // 3. Returning a response
    return Response.json({ success: true, fileName })

  } catch (err) {
    console.error(err)
    return new Response(
      JSON.stringify({ error: (err as any)?.message || 'Unknown error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
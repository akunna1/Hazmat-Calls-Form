"use client";

export default function Hero() {

  // Form submission handler
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
  
  // Converting all form inputs into a plain object for submission
  const formData: any = Object.fromEntries(
    new FormData(e.currentTarget)
  );

    try {
      const res = await fetch("/api/formSubmission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        alert("Submission Received! 😃");
        form.reset();
      } else {
        alert("Submission Failed! 😭");
      }
    } catch (err) {
      console.error(err);
      alert("Submission Error. 😕");
    }
  };

  return (
    <section className="w-full">

    {/* Header */}
      <div className="text-center mb-4 font-semibold">
        <p className="mb-1 text-xl md:text-2xl">Hazmat Calls & Commercial Trucking Incidents</p>
        <p className="mb-0">1 Form per Party</p>
      </div>

      {/* Form */}
      <form
        name="myForm"
        onSubmit={handleSubmit}
        className="p-4 mb-8 shadow-sm rounded-sm bg-gray-100"
      >
        {/* Incident Section */}
        <div className="mb-4 p-3 shadow-sm rounded-sm bg-gray-100">
          
        <div className="mb-5">
          <p className="text-left font-medium">Incident Date, time & Number:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-2">
              <input type="date" name="incidentDate" required className="border rounded px-3 py-1 w-full" />
              <input type="time" name="incidentTime" required className="border rounded px-3 py-1 w-full" />
              <input type="text" name="incidentNumber" required className="border rounded px-3 py-1 w-full" />
            </div>
        </div>

        <div>
          <p className="text-left font-medium">Party Information:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-2">
              <input type="text" name="name" placeholder="Name" required className="border rounded px-3 py-1 w-full" />
              <input type="tel" name="primaryPhone" placeholder="Primary Phone #" required className="border rounded px-3 py-1 w-full" />
              <input type="email" name="email" placeholder="Email Address" required className="border rounded px-3 py-1 w-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-2">
              <input type="text" name="street" placeholder="Street Address" required className="border rounded px-3 py-1 w-full" />
              <input type="text" name="city" placeholder="City" required className="border rounded px-3 py-1 w-full" />
              <input type="text" name="state" maxLength={2} placeholder="State" required className="border rounded px-3 py-1 w-full" />
              <input type="text" name="zip" placeholder="Zip Code" required className="border rounded px-3 py-1 w-full" />            
            </div>

        </div>

        </div>

        {/* Line */}
        <div className="h-1 bg-black w-full mt-6 lg:mt-10"></div>

        {/* Contact Infromation Section */}
        <div className="mt-6 lg:mt-10 mb-4 p-3 shadow-sm rounded-sm bg-gray-100">

        <div>
          <p className="text-left font-medium">Contact Information for Building Representative or Complainant:</p>
            
            <div className="grid grid-cols-1 mb-2">
              <input type="text" name="name2" placeholder="Name" required className="border rounded px-3 py-1 w-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-2">
              <input type="text" name="street2" placeholder="Street Address" required className="border rounded px-3 py-1 w-full" />
              <input type="text" name="city2" placeholder="City" required className="border rounded px-3 py-1 w-full" />
              <input type="text" name="state2" maxLength={2} placeholder="State" required className="border rounded px-3 py-1 w-full" />
              <input type="text" name="zip2" placeholder="Zip Code" required className="border rounded px-3 py-1 w-full" />            
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
              <input type="tel" name="primaryPhone" placeholder="Primary Phone #" required className="border rounded px-3 py-1 w-full" />
              <input type="tel" name="secondaryPhone" placeholder="Secondary Phone #" className="border rounded px-3 py-1 w-full" />
            </div>

            <div className="grid grid-cols-1 mb-2">
              <input type="email" name="email" placeholder="Email Address" required className="border rounded px-3 py-1 w-full" />
            </div>

        </div>

        </div>

        {/* Line */}
        <div className="h-1 bg-black w-full mt-6 lg:mt-10"></div>

        {/* Checklist Section */}
        <div className="mt-6 lg:mt-10 mb-4 p-3 shadow-sm rounded-sm bg-gray-100">
            <p className="text-left font-medium">Reason for Referral:</p>

                <label className="flex items-center gap-2">
                  <input type="checkbox" name="panelIssues" className="w-4 h-4 accent-gray-500" />
                  Fire alarm control panel issues
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" name="exitIssues" className="w-4 h-4 accent-gray-500" />
                  Exit issues
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" name="rapidIssues" className="w-4 h-4 accent-gray-500" />
                  Rapid department connection issues
                </label>
                
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="keyIssues" className="w-4 h-4 accent-gray-500" />
                  Rapid Key Entry System issues – (Refer to FD-3039 Rapid Key Entry Systems)
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" name="roomIssues" className="w-4 h-4 accent-gray-500" />
                  Mechanical room issues
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" name="codeIssues" className="w-4 h-4 accent-gray-500" />
                  General fire code issues
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" name="restaurant" className="w-4 h-4 accent-gray-500" />
                  Restaurant fire protection discharges (e.g. hood system activation)
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" name="impairment" className="w-4 h-4 accent-gray-500" />
                  An impairment that may render the fire protection system out-of-service for a prolonged period of time due to repair or other reasons
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" name="noContact" className="w-4 h-4 accent-gray-500" />
                  No contact with a building representative could be made
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" name="systemImpairment" className="w-4 h-4 accent-gray-500" />
                  A fire protection system impairment that may delay notification of occupants
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" name="damaged" className="w-4 h-4 accent-gray-500" />
                  A structurally damaged building
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" name="other" className="w-4 h-4 accent-gray-500" />
                  Other-List Details: 
                </label>
                <div className="grid grid-cols-1 mb-2">
                  <textarea
                    name="listDetails"
                    rows={2}
                    className="border rounded px-3 py-1 w-full"
                  />
                </div>

                <p className="mt-7 italic text-center md:text-left">
                  Note: Illegal burning on commercial property, fire fatalities and or burn victims, fire protection system 
                  impairments that could affect building evacuation, or overcrowding in places of assembly are automatic call outs 
                  to the on-call fire investigator.
                </p>
        </div>

        {/* Line */}
        <div className="h-1 bg-black w-full mt-6 lg:mt-10"></div>

        {/* Final Section */}
        <div className="mt-6 lg:mt-10 mb-4 p-3 shadow-sm rounded-sm bg-gray-100">
          <div className="mb-5">
            <p className="text-left font-medium">Summary of the problem:</p>
            <div className="grid grid-cols-1 mb-2">
              <textarea
                name="summary"
                rows={4}
                className="border rounded px-3 py-1 w-full"
                required
              />
            </div>
          </div>

          <div className="mb-5">
            <p className="text-left font-medium">Copy of incident narrative or incident summary, if applicable: </p>
            <div className="grid grid-cols-1 mb-2">
              <textarea
                name="copy"
                rows={6}
                className="border rounded px-3 py-1 w-full"
              />
            </div>
          </div>

            <p className="text-left font-medium">Referral emailed to:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
              <input type="email" name="battalionChief" placeholder="Respective Battalion Chief" required className="border rounded px-3 py-1 w-full" />
              <input type="email" name="deputyFireMarshal" placeholder="Deputy Fire Marshal" required className="border rounded px-3 py-1 w-full" />
              <input type="email" name="assistantFireMarshal" placeholder="Asst. Chief/Fire Marshal" required className="border rounded px-3 py-1 w-full" />
              <input type="email" name="assistantChiefOfOperations" placeholder="Asst. Chief of Operations" required className="border rounded px-3 py-1 w-full" />
            </div>

        </div>


        {/* Submit */}
        <div className="text-center mb-4">
          <button
            type="submit"
            className="px-4 py-1 rounded border border-[#0c2d50] bg-[#0c2d50] text-white hover:bg-[#091f3a] hover:border-[#091f3a] transition hover:scale-110 active:scale-110"
          >
            Submit
          </button>
        </div>

      </form>
    </section>
  );
}
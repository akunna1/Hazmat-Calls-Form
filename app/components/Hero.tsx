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

      {/* Form */}
      <form
        name="myForm"
        onSubmit={handleSubmit}
        className="p-4 mb-8 shadow-md rounded-md bg-gray-50"
      >
        {/* Incident Section */}
        <div className="mb-4 p-3 shadow-md rounded-md bg-gray-50">
          
        <div className="mb-5">
          <p className="text-left font-medium">Incident Date, time & Number:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-2">
                <div className="flex"><input type="date" name="incidentDate" placeholder="Incident Date"required className="border rounded px-3 py-1 w-full" /></div>
                <div className="flex"><input type="time" name="incidentTime" placeholder="Incident Time" required className="border rounded px-3 py-1 w-full" /></div>
                <input type="text" name="incidentNumber" placeholder="Incident Number" required className="border rounded px-3 py-1 w-full" />
            </div>
        </div>

        <div>
          <p className="text-left font-medium">Party Information:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-2">
              <input type="text" name="name" placeholder="Name" required className="border rounded px-3 py-1 w-full" />
              <input type="tel" name="phone" placeholder="Phone Number" required className="border rounded px-3 py-1 w-full" />
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

        {/* Contact Infromation Section */}
        <div className="mt-6 lg:mt-10 mb-4 p-3 shadow-md rounded-md bg-gray-50">

        <div>
          <p className="text-left font-medium">Company Information:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-2">
              <input type="text" name="name2" placeholder="Name" required className="border rounded px-3 py-1 w-full" />
              <input type="tel" name="phone2" placeholder="Phone Number" required className="border rounded px-3 py-1 w-full" />
              <input type="email" name="email2" placeholder="Email Address" required className="border rounded px-3 py-1 w-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-2">
              <input type="text" name="street2" placeholder="Street Address" required className="border rounded px-3 py-1 w-full" />
              <input type="text" name="city2" placeholder="City" required className="border rounded px-3 py-1 w-full" />
              <input type="text" name="state2" maxLength={2} placeholder="State" required className="border rounded px-3 py-1 w-full" />
              <input type="text" name="zip2" placeholder="Zip Code" required className="border rounded px-3 py-1 w-full" />            
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-2">
              <input type="text" name="insuranceName" placeholder="Insurance Name" required className="border rounded px-3 py-1 w-full" />
              <input type="text" name="insurancePolicyNumber" placeholder="Insurance Policy Number" required className="border rounded px-3 py-1 w-full" />
              <input type="url" name="website" placeholder="Website" required className="border rounded px-3 py-1 w-full" />
              <input type="text" name="usdotSafer" placeholder="USDOT/SAFER Number" required className="border rounded px-3 py-1 w-full" />
            </div>

        </div>

        </div>

        {/* Vehicle Infromation Section */}
        <div className="mt-6 lg:mt-10 mb-4 p-3 shadow-md rounded-md bg-gray-50">

        <div>
          <p className="text-left font-medium">Vehicle Information:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-2">
              <input type="text" name="make" placeholder="Make" required className="border rounded px-3 py-1 w-full" />
              <input type="text" name="model" placeholder="Model" required className="border rounded px-3 py-1 w-full" />
              <input type="text" name="year" maxLength={4} placeholder="Year" required className="border rounded px-3 py-1 w-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
              <input type="text" name="vinNumber" placeholder="VIN Number" required className="border rounded px-3 py-1 w-full" />
              <input type="text" name="usdotNumber" placeholder="USDOT Number" required className="border rounded px-3 py-1 w-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
              <input type="text" name="vehicleInsuranceCompany" placeholder="Vehicle Insurance Company" required className="border rounded px-3 py-1 w-full" />
              <input type="text" name="vehicleInsurancePolicyNumber" placeholder="Vehicle Insurance Policy Number" required className="border rounded px-3 py-1 w-full" />
            </div>

            <div className="grid grid-cols-1 mb-2">
              <textarea
                name="otherVehicleDetails"
                placeholder="Other Vehicle Details (If tractor-trailer, include Trailer information here, Tractor info above)"
                rows={4}
                className="border rounded px-3 py-1 w-full"
              />
            </div>

        </div>

        </div>


        {/* Other Information Section */}
        <div className="mt-6 lg:mt-10 mb-4 p-3 shadow-md rounded-md bg-gray-50">

            <p className="text-left font-medium">Other Information:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-2">
              <input type="text" name="ncshpNumber" placeholder="NCSHP Report Number" required className="border rounded px-3 py-1 w-full" />
              <input type="text" name="ncshpName" placeholder="NCSHP Trooper Name" required className="border rounded px-3 py-1 w-full" />
              <input type="text" name="ncshpUnitNumber" placeholder="NCSHP Unit Number" required className="border rounded px-3 py-1 w-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-2">
              <input type="text" name="dpdNumber" placeholder="DPD/DSO Report Number" required className="border rounded px-3 py-1 w-full" />
              <input type="text" name="dpdName" placeholder="DPD/DSO Trooper Name" required className="border rounded px-3 py-1 w-full" />
              <input type="text" name="dpdUnitNumber" placeholder="DPD/DSO Unit Number" required className="border rounded px-3 py-1 w-full" />
            </div>

        </div>

        {/* Submit */}
        <div className="text-center mb-4">
          <button
            type="submit"
            className="px-4 py-1 rounded-full shadow-sm border border-black bg-gray-500 text-white hover:bg-gray-700 active:bg-gray-700 hover:border-gray-700 active:border-gray-700 transition hover:scale-110 active:scale-110"
          >
            <strong>Submit</strong>
          </button>
        </div>

      </form>
    </section>
  );
}
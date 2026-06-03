"use client";

import React, { useState} from "react";

export default function Hero() {
  const [loading, setLoading] = useState(false);

  // Form submission handler
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return; // prevents spam clicking

    const form = e.currentTarget;

    setLoading(true); // start loading
  
    //Turning the form fields into a simple object and telling TS that all keys and values are strings
    const formData = Object.fromEntries(new FormData(form)) as Record<string, string>;

    // Sending data to API route
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
      alert("Network Error! 😵");
    }
    finally {
      setLoading(false); // always stop loading
    }
  };

  return (
    <section className="w-full">

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-4 mb-8 shadow-md rounded-md bg-gray-50">
        {/* Incident Section */}
        <div className="mt-2 mb-4 p-3 shadow-md rounded-md bg-gray-50">
          <p className="text-left font-medium">Incident Information:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-2">
                <input type="date" name="incidentDate" placeholder="Incident Date" required className="w-full appearance-none px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200" />
                <input type="time" name="incidentTime" placeholder="Incident Time" required className="w-full appearance-none px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200" />
                <input type="text" name="incidentNumber" placeholder="Incident Number" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-2">
              <input type="text" name="incidentStreet" placeholder="Street Address" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200" />
              <input type="text" name="incidentCity" placeholder="City" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200" />
              <input type="text" name="incidentState" maxLength={2} placeholder="State" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200" />
              <input type="text" name="incidentZip" placeholder="Zip Code" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200" />            
            </div>
        </div>


        {/* Party Information Section */}
        <div className="mt-6 lg:mt-10 mb-4 p-3 shadow-md rounded-md bg-gray-50">
          <p className="text-left font-medium">Party Information:</p>    
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-2">
              <input type="text" name="name" placeholder="Name" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200" />
              <input type="tel" name="phone" placeholder="Phone Number" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200" />
              <input type="email" name="email" placeholder="Email Address"className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-2">
              <input type="text" name="street" placeholder="Street Address" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200" />
              <input type="text" name="city" placeholder="City" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200" />
              <input type="text" name="state" maxLength={2} placeholder="State" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200" />
              <input type="text" name="zip" placeholder="Zip Code" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200" />            
            </div>
        </div>

        {/* Contact Infromation Section */}
        <div className="mt-6 lg:mt-10 mb-4 p-3 shadow-md rounded-md bg-gray-50">
        <div>
          <p className="text-left font-medium">Company Information:</p>           
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-2">
              <input type="text" name="name2" placeholder="Name" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200" />
              <input type="tel" name="phone2" placeholder="Phone Number" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200" />
              <input type="email" name="email2" placeholder="Email Address" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-2">
              <input type="text" name="street2" placeholder="Street Address" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200" />
              <input type="text" name="city2" placeholder="City" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200" />
              <input type="text" name="state2" maxLength={2} placeholder="State" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200" />
              <input type="text" name="zip2" placeholder="Zip Code" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200" />            
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-2">
              <input type="text" name="insuranceName" placeholder="Insurance Name" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200" />
              <input type="text" name="insurancePolicyNumber" placeholder="Insurance Policy Number" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200" />
              <input type="url" name="website" placeholder="Website" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200" />
              <input type="text" name="usdotSafer" placeholder="USDOT/SAFER Number" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200" />
            </div>
        </div>

        </div>

        {/* Vehicle Infromation Section */}
        <div className="mt-6 lg:mt-10 mb-4 p-3 shadow-md rounded-md bg-gray-50">
          <p className="text-left font-medium">Vehicle Information:</p>      
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-2">
              <input type="text" name="make" placeholder="Make" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200" />
              <input type="text" name="model" placeholder="Model" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200" />
              <input type="text" name="year" maxLength={4} placeholder="Year" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
              <input type="text" name="vinNumber" placeholder="VIN Number" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200" />
              <input type="text" name="usdotNumber" placeholder="USDOT Number" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
              <input type="text" name="vehicleInsuranceCompany" placeholder="Vehicle Insurance Company" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200" />
              <input type="text" name="vehicleInsurancePolicyNumber" placeholder="Vehicle Insurance Policy Number" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200" />
            </div>

            <div className="grid grid-cols-1 mb-2">
              <textarea name="otherVehicleDetails" placeholder="Other Vehicle Details (If tractor-trailer, include Trailer information here, Tractor info above)" rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200"/>
            </div>
        </div>


        {/* Other Information Section */}
        <div className="mt-6 lg:mt-10 mb-4 p-3 shadow-md rounded-md bg-gray-50">
            <p className="text-left font-medium">Other Information:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-2">
              <input type="text" name="ncshpNumber" placeholder="NCSHP Report Number" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200" />
              <input type="text" name="ncshpName" placeholder="NCSHP Trooper Name" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200" />
              <input type="text" name="ncshpUnitNumber" placeholder="NCSHP Unit Number" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-2">
              <input type="text" name="dpdNumber" placeholder="DPD/DSO Report Number" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200" />
              <input type="text" name="dpdName" placeholder="DPD/DSO Trooper Name" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200" />
              <input type="text" name="dpdUnitNumber" placeholder="DPD/DSO Unit Number" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-black focus:border-black transition duration-200" />
            </div>
        </div>

        {/* Submit */}
        <div className="text-center mt-8 mb-4">
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-1 rounded-full shadow-sm text-white hover:text-gray-300 active:text-gray-300 bg-gray-700 border border-gray-700 transition hover:scale-115 active:scale-115"
          >
            <strong>{loading ? "Submitting..." : "Submit"}</strong>
          </button>
        </div>

      </form>
    </section>
  );
}
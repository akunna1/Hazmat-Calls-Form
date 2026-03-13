"use client";

export default function Header() {
  return (
    <header className="flex flex-wrap justify-between items-start mb-4">
      {/* Left: Address */}
      <div className="grow">
        {/* Desktop */}
        <h5 className="hidden md:block mb-0">
          <div>City of Durham</div>
          <div>Fire Department</div>
          <div>2008 East Club Boulevard</div>
          <div>Durham, NC 27704</div>
        </h5>

        {/* Mobile */}
        <h6 className="block md:hidden mb-0">
          <div>City of Durham</div>
          <div>Fire Department</div>
          <div>2008 East Club Boulevard</div>
          <div>Durham, NC 27704</div>
        </h6>
      </div>

      {/* Right: Logo */}
      <div className="ml-3">
        <img
          src="photos/DFD_Logo.png"
          alt="Fire Department Logo"
          className="w-auto h-20 md:h-24 object-contain"
        />
      </div>
    </header>
  );
}

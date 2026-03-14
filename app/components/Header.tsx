"use client";

export default function Header() {
  return (
    <header className="flex items-center gap-4 mb-4 ml-3">
      
      {/* Logo */}
      <img
        src="photos/DFD_Logo2.png"
        alt="Fire Department Logo"
        className="h-24 sm:h-28 md:h-36 w-auto object-contain"
      />

      {/* Title */}
      <div className="leading-tight">
        <h5 className="text-red-700 text-lg sm:text-xl md:text-3xl font-serif italic">
          <div>Hazmat Calls and</div>
          <div>Commercial Trucking Incidents</div>
        </h5>
      </div>

    </header>
  );
}
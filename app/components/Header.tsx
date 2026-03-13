"use client";

export default function Header() {
  return (
    <header className="flex justify-between items-center mb-4">
      {/* Left: Logo */}
      <div className="mr-3">
        <img
          src="photos/DFD_Logo.png"
          alt="Fire Department Logo"
          className="w-auto h-24 md:h-28 object-contain"
        />
      </div>

      {/* Right: Text */}
      <p className="text-right italic text-sm">
        1 Form per Party
      </p>
    </header>
  );
}
"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Header is always visible */}
      <Header />

      {/* Main content */}
      <main className="grow antialiased flex flex-col min-h-screen">
        {children}
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </>
  );
}

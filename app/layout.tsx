import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import ClientLayout from "./clientLayout";

// Poppins font with the weights
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hazmat Calls and Commercial Trucking Incidents Form",
  description: "For City of Durham Fire Department",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="antialiased">
        {/* Universal padding wrapper */}
        <div className="p-4 md:p-6">
          <ClientLayout>
            {children}
          </ClientLayout>
        </div>
      </body>
    </html>
  );
}

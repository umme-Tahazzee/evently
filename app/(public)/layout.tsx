import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/components/layout/navbar";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Evenly – Plan, Manage & Run Events Effortlessly",
  description:
    "A complete event management platform for organisations, staff and participants.",
};

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} font-sans antialiased`}>
        {/* Small padding on mobile, a bit more on larger screens */}
        <div className="relative min-h-screen bg-white p-3 sm:p-4">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
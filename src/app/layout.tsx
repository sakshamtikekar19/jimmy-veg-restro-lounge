import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingCTAs from "@/components/FloatingCTAs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jimmy Veg Restro Lounge | Best Rooftop Restaurant in Dombivli",
  description: "Pure Veg Fine Dine & Rooftop Experience. Dine above the lights of Dombivli at 7th & 8th Floor, Golden Plaza, Ramnagar, Dombivli East.",
  keywords: ["rooftop restaurant Dombivli", "pure veg Dombivli", "fine dining Dombivli", "Jimmy Veg Restro Lounge"],
  openGraph: {
    title: "Jimmy Veg Restro Lounge | Best Rooftop Restaurant in Dombivli",
    description: "Pure Veg Fine Dine & Rooftop Experience. Dine above the lights of Dombivli.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#1a1a1a] text-gray-100`}>
        <Navbar />
        {children}
        <FloatingCTAs />
      </body>
    </html>
  );
}

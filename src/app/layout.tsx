import type { Metadata } from "next";
import { Cormorant_Garamond, Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingCTAs from "@/components/FloatingCTAs";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jimmy Veg Restro Lounge | Best Rooftop Restaurant in Dombivli",
  description: "Pure Veg Fine Dine & Rooftop Experience. Dine above the lights of Dombivli at Phadke Road, Ram Nagar, Dombivli East.",
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
      <body className={`${cormorant.variable} ${cinzel.variable} font-sans antialiased bg-[#0d0d0d] text-gray-100`}>
        <Navbar />
        {children}
        <FloatingCTAs />
      </body>
    </html>
  );
}

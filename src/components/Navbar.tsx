"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-md border-b border-[#c9a227]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl md:text-2xl font-bold text-[#c9a227] tracking-tight">
              Jimmy&apos;s
            </span>
            <span className="text-sm text-gray-400 hidden sm:inline">
              Veg Restro Lounge
            </span>
          </Link>

          {/* Desktop address */}
          <p className="hidden lg:block text-xs text-gray-500 max-w-[280px]">
            7th & 8th Floor, Golden Plaza, Ramnagar, Dombivli East
          </p>

          {/* CTA Button */}
          <Link
            href="#reservation"
            className="bg-[#c9a227] hover:bg-[#e6c547] text-[#1a1a1a] font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 shadow-lg shadow-[#c9a227]/20 hover:shadow-[#c9a227]/40"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

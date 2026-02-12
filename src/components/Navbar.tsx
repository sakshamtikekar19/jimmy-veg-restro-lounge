"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d]/90 backdrop-blur-xl border-b border-[#c9a227]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl md:text-3xl font-display font-semibold tracking-[0.2em] text-[#c9a227] uppercase">
              Jimmy&apos;s
            </span>
            <span className="text-xs text-amber-100/60 hidden sm:inline tracking-[0.15em] uppercase">
              Veg Restro Lounge
            </span>
          </Link>

          {/* Desktop address */}
          <p className="hidden lg:block text-xs text-amber-100/50 max-w-[320px] tracking-wide">
            Phadke Road, Ram Nagar, Dombivli East — Kalyan 421201
          </p>

          {/* CTA Button */}
          <Link
            href="#reservation"
            className="font-display tracking-widest text-sm bg-gradient-to-r from-[#c9a227] to-[#d4af37] hover:from-[#d4af37] hover:to-[#e8d48b] text-[#0d0d0d] font-semibold px-6 py-3 rounded-sm transition-all duration-300 shadow-[0_0_30px_rgba(201,162,39,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

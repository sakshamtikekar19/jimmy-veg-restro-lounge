"use client";

import { useState, useEffect } from "react";

export default function FloatingCTAs() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <a
        href="#reservation"
        className="font-display tracking-widest text-xs bg-gradient-to-r from-[#c9a227] to-[#d4af37] hover:from-[#d4af37] hover:to-[#e8d48b] text-[#0d0d0d] font-semibold px-6 py-3 rounded-sm shadow-[0_0_30px_rgba(201,162,39,0.25)] hover:shadow-[0_0_50px_rgba(212,175,55,0.4)] transition-all duration-300 flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Book a Table
      </a>
      <a
        href="#menu"
        className="font-display tracking-widest text-xs border border-[#c9a227]/50 text-amber-200/90 hover:bg-[#c9a227]/10 hover:border-[#c9a227] font-medium px-6 py-3 rounded-sm transition-all duration-300 flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        View Menu
      </a>
    </div>
  );
}

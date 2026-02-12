"use client";

import { useState, useEffect } from "react";

export default function FloatingCTAs() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const h = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", h);
    h();
    return () => window.removeEventListener("scroll", h);
  }, []);
  if (!visible) return null;
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-4">
      <a href="#reservation" className="bg-[#c9a227] hover:bg-[#e6c547] text-[#0d0d0d] font-semibold px-6 py-3 rounded-sm transition-all flex items-center gap-2">
        Book a Table
      </a>
      <a href="#menu" className="border border-[#c9a227] text-[#c9a227] hover:bg-[#c9a227]/10 font-semibold px-6 py-3 rounded-sm transition-all flex items-center gap-2">
        View Menu
      </a>
    </div>
  );
}

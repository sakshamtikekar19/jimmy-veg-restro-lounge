const APPLE_MAPS = "https://maps.apple/p/aeDZmpYdBWLzC5";
const MAP_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.59!2d73.087!3d19.2176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7950a6f9e2b0b%3A0x1!2sPhadke%20Road%2C%20Ram%20Nagar%2C%20Dombivli%20East!5e0!3m2!1sen!2sin!4v1707782400000";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2d2d2d]/80">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          <div>
            <h3 className="font-[family-name:var(--font-cinzel)] text-2xl tracking-[0.2em] text-[#c9a227] mb-6 uppercase">Jimmy&apos;s</h3>
            <p className="text-amber-100/60 mb-6 font-light">Pure Veg Fine Dine & Rooftop Experience. Dine above the lights of Dombivli.</p>
            <a href={APPLE_MAPS} target="_blank" rel="noopener noreferrer" className="block text-amber-100/60 hover:text-[#c9a227] mb-2">Phadke Road, Ram Nagar, Dombivli East — Kalyan 421201</a>
            <a href="tel:+919876543210" className="text-amber-100/60 hover:text-[#c9a227]">+91 98765 43210</a>
          </div>
          <div>
            <h4 className="font-[family-name:var(--font-cinzel)] text-sm tracking-[0.2em] text-white mb-4 uppercase">Follow Us</h4>
            <a href="https://instagram.com/jimmys_veg_restro" target="_blank" rel="noopener noreferrer" className="text-amber-100/60 hover:text-[#c9a227]">@jimmys_veg_restro</a>
          </div>
          <div>
            <h4 className="font-[family-name:var(--font-cinzel)] text-sm tracking-[0.2em] text-white mb-4 uppercase">Find Us</h4>
            <div className="rounded-sm overflow-hidden border border-[#2d2d2d] aspect-video">
              <iframe src={MAP_EMBED} width="100%" height="100%" style={{ border: 0, filter: "invert(92%) contrast(93%)" }} allowFullScreen loading="lazy" title="Jimmy Veg Restro Lounge" />
            </div>
          </div>
        </div>
        <div className="mt-16 pt-10 border-t border-[#2d2d2d]/60 text-center text-amber-100/40 text-sm">
          © {new Date().getFullYear()} Jimmy Veg Restro Lounge. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

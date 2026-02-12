"use client";

const instagramHandle = "jimmys_veg_restro";
// Jimmy Veg Restro Lounge - Phadke Road, Ram Nagar, Dombivli East (from Apple Maps)
const APPLE_MAPS_URL = "https://maps.apple/p/aeDZmpYdBWLzC5";
const GOOGLE_MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.59!2d73.087!3d19.2176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7950a6f9e2b0b%3A0x1!2sPhadke%20Road%2C%20Ram%20Nagar%2C%20Dombivli%20East!5e0!3m2!1sen!2sin!4v1707782400000";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2d2d2d]/80">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          {/* Brand & Contact */}
          <div>
            <h3 className="font-display text-2xl tracking-[0.2em] text-[#c9a227] mb-6 uppercase">
              Jimmy&apos;s
            </h3>
            <p className="text-amber-100/60 mb-6 font-light leading-relaxed">
              Pure Veg Fine Dine & Rooftop Experience. Dine above the lights of Dombivli.
            </p>
            <div className="space-y-4 text-amber-100/60">
              <a
                href="https://maps.apple/p/aeDZmpYdBWLzC5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-[#c9a227] transition-colors group"
              >
                <svg className="w-5 h-5 text-[#c9a227] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>
                  Phadke Road, Ram Nagar, Dombivli East
                  <br />
                  Kalyan, Maharashtra 421201
                </span>
              </a>
              <p className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#c9a227] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href="tel:+919876543210" className="hover:text-[#c9a227] transition-colors">+91 98765 43210</a>
              </p>
            </div>
            <div className="mt-6 flex gap-4">
              <a
                href={APPLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-display tracking-widest text-[#c9a227]/80 hover:text-[#c9a227] uppercase transition-colors"
              >
                Open in Apple Maps →
              </a>
              <a
                href="https://www.google.com/maps/search/Jimmy+Veg+Restro+Lounge+Phadke+Road+Dombivli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-display tracking-widest text-[#c9a227]/80 hover:text-[#c9a227] uppercase transition-colors"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-display text-sm tracking-[0.2em] text-white mb-6 uppercase">
              Follow Us
            </h4>
            <a
              href={`https://instagram.com/${instagramHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-amber-100/60 hover:text-[#c9a227] transition-colors group"
            >
              <span className="w-10 h-10 rounded-full border border-[#c9a227]/30 flex items-center justify-center group-hover:border-[#c9a227] group-hover:bg-[#c9a227]/10 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                </svg>
              </span>
              @{instagramHandle}
            </a>
          </div>

          {/* Map */}
          <div className="lg:col-span-1">
            <h4 className="font-display text-sm tracking-[0.2em] text-white mb-6 uppercase">
              Find Us
            </h4>
            <div className="rounded-sm overflow-hidden border border-[#2d2d2d] aspect-video">
              <iframe
                src={GOOGLE_MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(92%) contrast(93%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Jimmy Veg Restro Lounge - Phadke Road, Ram Nagar, Dombivli East"
              />
            </div>
            <a
              href={APPLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-xs text-amber-100/50 hover:text-[#c9a227] transition-colors"
            >
              Jimmy Veg Restro Lounge · Phadke Road, Ram Nagar
            </a>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-[#2d2d2d]/60 text-center">
          <p className="font-display text-xs tracking-[0.2em] text-amber-100/40 uppercase">
            © {new Date().getFullYear()} Jimmy Veg Restro Lounge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

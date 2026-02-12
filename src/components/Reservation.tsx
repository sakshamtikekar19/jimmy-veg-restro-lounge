"use client";

import { useState } from "react";

export default function Reservation() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("2");
  const [preference, setPreference] = useState<"fine-dine" | "rooftop">("rooftop");
  const [celebrationCake, setCelebrationCake] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = () => {
    if (!date || !time || !name || !phone) {
      setMessage({ type: "error", text: "Please fill in all required fields." });
      return;
    }
    setMessage(null);
    const msg = `Hi, I'd like to book a table at Jimmy's.%0A%0ADate: ${date}%0ATime: ${time}%0AGuests: ${guests}%0APreference: ${preference === "rooftop" ? "Rooftop Lounge" : "Fine Dine Indoors"}%0ACelebration Cake: ${celebrationCake ? "Yes" : "No"}%0AName: ${name}%0APhone: ${phone}%0AEmail: ${email}`;
    window.open(`https://wa.me/919876543210?text=${msg}`, "_blank");
    setMessage({ type: "success", text: "Opening WhatsApp. Please send the message to confirm." });
  };

  return (
    <section id="reservation" className="py-28 px-4 scroll-mt-24 bg-[#0d0d0d]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-cinzel)] text-4xl md:text-5xl font-medium text-white mb-6">
            Reserve Your <span className="gold-gradient">Table</span>
          </h2>
          <p className="text-amber-100/60 font-light">Fill in your details and we&apos;ll confirm via WhatsApp.</p>
        </div>
        <div className="bg-[#141414] rounded-sm border border-[#2d2d2d] p-8 md:p-10">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Date *</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} min={new Date().toISOString().split("T")[0]} className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#3d3d3d] text-white focus:border-[#c9a227] outline-none" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Time *</label>
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#3d3d3d] text-white focus:border-[#c9a227] outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Guests *</label>
              <select value={guests} onChange={(e) => setGuests(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#3d3d3d] text-white focus:border-[#c9a227] outline-none">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                  <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                ))}
                <option value="10+">10+ Guests</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-3">Preference</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="preference" checked={preference === "rooftop"} onChange={() => setPreference("rooftop")} className="accent-[#c9a227]" />
                  <span className="text-white">Rooftop Lounge</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="preference" checked={preference === "fine-dine"} onChange={() => setPreference("fine-dine")} className="accent-[#c9a227]" />
                  <span className="text-white">Fine Dine Indoors</span>
                </label>
              </div>
            </div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={celebrationCake} onChange={(e) => setCelebrationCake(e.target.checked)} className="accent-[#c9a227] w-4 h-4" />
              <span className="text-gray-300">Pre-order a Celebration Cake</span>
            </label>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Name *</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#3d3d3d] text-white placeholder-gray-500 focus:border-[#c9a227] outline-none" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Phone *</label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="10-digit mobile" className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#3d3d3d] text-white placeholder-gray-500 focus:border-[#c9a227] outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#3d3d3d] text-white placeholder-gray-500 focus:border-[#c9a227] outline-none" />
            </div>
            {message && (
              <div className={`p-4 rounded-lg ${message.type === "success" ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"}`}>
                {message.text}
              </div>
            )}
            <button type="button" onClick={handleSubmit} className="w-full py-4 rounded-sm bg-gradient-to-r from-[#c9a227] to-[#d4af37] hover:from-[#d4af37] hover:to-[#e8d48b] text-[#0d0d0d] font-semibold transition-all">
              Confirm via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

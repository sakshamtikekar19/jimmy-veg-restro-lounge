"use client";

import { useState } from "react";

const categories = [
  {
    id: "starters",
    name: "Starters",
    items: [
      { name: "Paneer Tikka", desc: "Cottage cheese marinated in spices", price: "₹249", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400" },
      { name: "Veg Spring Rolls", desc: "Crispy rolls with vegetables", price: "₹199", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400" },
    ],
  },
  {
    id: "main",
    name: "Main Course",
    items: [
      { name: "Dal Makhani", desc: "Creamy black lentils", price: "₹279", img: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400" },
      { name: "Paneer Butter Masala", desc: "Paneer in rich gravy", price: "₹299", img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400" },
    ],
  },
  {
    id: "mocktails",
    name: "Mocktails",
    items: [
      { name: "Virgin Mojito", desc: "Fresh mint, lime & soda", price: "₹149", img: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400" },
      { name: "Blue Lagoon", desc: "Blue curaçao, lemon & sprite", price: "₹169", img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400" },
    ],
  },
];

export default function Menu() {
  const [active, setActive] = useState("starters");
  const items = categories.find((c) => c.id === active)?.items ?? [];

  return (
    <section id="menu" className="py-28 px-4 scroll-mt-24 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-cinzel)] text-4xl md:text-5xl font-medium text-white mb-6">
            Our <span className="gold-gradient">Menu</span>
          </h2>
        </div>
        <div className="flex gap-2 justify-center mb-12 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-8 py-4 rounded-sm whitespace-nowrap transition-all ${
                active === cat.id ? "bg-[#c9a227] text-[#0d0d0d]" : "bg-[#1a1a1a] text-amber-100/60 hover:text-white"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-[#141414] rounded-sm overflow-hidden border border-[#2d2d2d]">
              <div className="aspect-[4/3] relative">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                <span className="absolute bottom-2 right-2 text-[#c9a227] font-bold">{item.price}</span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

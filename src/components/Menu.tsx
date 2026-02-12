"use client";

import { useState } from "react";

const categories = [
  {
    id: "starters",
    name: "Starters",
    items: [
      { name: "Paneer Tikka", desc: "Cottage cheese marinated in spices, grilled to perfection", price: "₹249", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400" },
      { name: "Veg Spring Rolls", desc: "Crispy rolls with assorted vegetables", price: "₹199", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400" },
      { name: "Chilli Potato", desc: "Crispy potatoes tossed in spicy schezwan sauce", price: "₹179", img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400" },
      { name: "Manchurian", desc: "Fried vegetable balls in tangy gravy", price: "₹199", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400" },
    ],
  },
  {
    id: "main",
    name: "Main Course",
    items: [
      { name: "Dal Makhani", desc: "Creamy black lentils slow-cooked in butter", price: "₹279", img: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400" },
      { name: "Paneer Butter Masala", desc: "Paneer in rich tomato-cream gravy", price: "₹299", img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400" },
      { name: "Veg Biryani", desc: "Aromatic basmati rice with mixed vegetables", price: "₹259", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400" },
      { name: "Palak Paneer", desc: "Spinach gravy with cottage cheese", price: "₹269", img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400" },
    ],
  },
  {
    id: "mocktails",
    name: "Mocktails",
    items: [
      { name: "Virgin Mojito", desc: "Fresh mint, lime & soda", price: "₹149", img: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400" },
      { name: "Blue Lagoon", desc: "Blue curaçao, lemon & sprite", price: "₹169", img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400" },
      { name: "Mango Colada", desc: "Mango, coconut cream & pineapple", price: "₹179", img: "https://images.unsplash.com/photo-1527281400684-1a845a4e758d?w=400" },
      { name: "Strawberry Basil", desc: "Fresh strawberry with basil leaves", price: "₹159", img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400" },
    ],
  },
];

export default function Menu() {
  const [active, setActive] = useState("starters");

  return (
    <section id="menu" className="py-28 px-4 scroll-mt-24 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-display tracking-[0.3em] text-amber-200/60 text-sm uppercase mb-4">
            Culinary Excellence
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 tracking-wide">
            Our <span className="gold-gradient">Menu</span>
          </h2>
          <p className="text-amber-100/60 max-w-2xl mx-auto font-light">
            A curated selection of pure vegetarian delights, crafted with the finest ingredients.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-8 mb-12 scrollbar-hide justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`font-display tracking-widest text-sm px-8 py-4 rounded-sm whitespace-nowrap transition-all duration-300 ${
                active === cat.id
                  ? "bg-gradient-to-r from-[#c9a227] to-[#d4af37] text-[#0d0d0d] shadow-[0_0_30px_rgba(201,162,39,0.3)]"
                  : "bg-[#1a1a1a] text-amber-100/60 hover:text-amber-200 border border-[#2d2d2d] hover:border-[#c9a227]/40"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories
            .find((c) => c.id === active)
            ?.items.map((item, i) => (
              <div
                key={i}
                className="group bg-[#141414] rounded-sm overflow-hidden border border-[#2d2d2d] hover:border-[#c9a227]/40 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <span className="absolute bottom-3 right-3 font-display tracking-wider text-[#d4af37] text-lg">
                    {item.price}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg tracking-wide text-white mb-2">{item.name}</h3>
                  <p className="text-sm text-amber-100/50 font-light">{item.desc}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

# Jimmy Veg Restro Lounge

A premium, dark-themed Next.js website for **Jimmy Veg Restro Lounge** — Pure Veg Fine Dine & Rooftop Experience in Dombivli.

## Features

- **Hero Section** – Full-screen hero with "Dine Above the Lights of Dombivli"
- **Quick Stats** – Pure Veg, Rooftop Lounge, Fine Dining
- **Interactive Menu** – Starters, Main Course, Mocktails (mobile-friendly)
- **Rooftop Showcase** – Lounge vs Fine Dine areas
- **Reservation System** – WhatsApp-based booking with date, time, guests, preference
- **Floating CTAs** – Book a Table & View Menu that follow on scroll
- **Instagram Feed** – Placeholder for 16-posts grid (connect API for live feed)
- **Google Maps** – Dark-mode map for Golden Plaza, Dombivli

## Tech Stack

- **Next.js 16** – Fast page loads, optimized for slow mobile data
- **TypeScript** – Type safety
- **Tailwind CSS** – Responsive, mobile-first styling

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customization

- **Instagram handle**: Update `instagramHandle` in `Footer.tsx` and `InstagramFeed.tsx`
- **Phone number**: Update the WhatsApp/phone link in `Footer.tsx` and `Reservation.tsx`
- **Google Maps**: Replace the iframe `src` in `Footer.tsx` with your venue's embed URL

## GitHub Pages Deployment

The site is configured for [GitHub Pages](https://sakshamtikekar19.github.io/jimmy-veg-restro-lounge/):

1. **Enable GitHub Pages** in repo Settings → Pages → Source: **GitHub Actions**
2. Push to `main` or `master` – the workflow builds and deploys automatically.

## Why This Build?

- **Speed** – Next.js ensures the menu and pages load quickly on slow mobile connections
- **SEO** – Tuned for "Best Rooftop Restaurant in Dombivli"
- **Mobile-first** – Layout works well on phones and tablets for booking via Instagram/phone

# Y S Hemashree — Portfolio

A handcrafted, editorial-museum-style portfolio landing page for Y S Hemashree — computer science student, product builder, AI enthusiast, and national hackathon winner.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- GSAP (entrance sequence, scroll reveals, micro-interactions)
- Lenis (smooth scrolling)
- Original inline-SVG illustration (no external image assets)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `components/Hero.tsx` — the exhibition-opening hero: background sky, artwork, typography, sidebar
- `components/Artwork.tsx` — the original painterly illustration (inline SVG, animated hair/tail/glasses-glint)
- `components/BackgroundClouds.tsx` — full-bleed hand-painted sky with parallax depth layers
- `components/PaperPlanes.tsx` — drifting paper planes and notebook pages
- `components/About.tsx`, `Work.tsx`, `Contact.tsx` — below-fold editorial sections
- `lib/useMouseParallax.ts`, `lib/useScrollReveal.ts` — shared motion utilities
- `lib/constants.ts` — all copy in one place

# Changelog

## 0.8.0 — 2026-08-22
- Added `/home3`: conversion-focused homepage — dark gradient hero with a working product search, layered floating cards (desktop), swipeable scroll-snap rows for categories/products/reviews on mobile, asymmetric bento value-prop grid, 3-step explainer, reviews, and a sticky mobile action bar.
- `/products` now accepts a `?q=` search param (matches name, category, blurb), so the home3 hero search is functional rather than decorative.

## 0.7.1 — 2026-08-22
- home2 hero's composed visual (green panel, logo, 3 cards) now shows on mobile too: uniformly scaled down via CSS transform (same ratios/alignment, untouched internally) and pinned into the hero's top-right free space. Full size from lg up, unchanged.

## 0.7.0 — 2026-08-22
- Fixed home2 mobile layout: smaller hero heading/copy/buttons, tighter section padding and gaps across hero, perks, categories, featured products, and CTA on small screens (desktop layout unchanged).

## 0.6.2 — 2026-08-22
- Added brand favicon (`app/icon.svg`, green circle + cross), replacing the default Next.js favicon.ico.

## 0.6.1 — 2026-08-22
- Merged Fluxframers credit + version into the existing bottom copyright row instead of a separate bar.

## 0.6.0 — 2026-08-22
- Added Fluxframers credit bar to footer bottom (logo + link + live version number from package.json), matching the Artisan Emporium pattern.

## 0.5.2 — 2026-08-22
- Reduced home2 hero's vertical padding to remove excess empty space below the header.

## 0.5.1 — 2026-08-22
- Added a subtle floating animation (staggered, reduced-motion-safe) to the three white cards in the home2 hero; the gradient panel and logo mark stay fixed.

## 0.5.0 — 2026-08-22
- Added centered brand logo mark (badge + wordmark) inside the home2 hero's gradient panel.

## 0.4.2 — 2026-08-22
- Replaced hero panel's dot-grid texture with a soft two-tone radial gradient blob.

## 0.4.1 — 2026-08-22
- Filled empty space in home2 hero's background panel with a fading dot-grid texture and a "20+ years of care" stat badge.

## 0.4.0 — 2026-08-22
- Redesigned Footer: 4-column layout (brand/socials, quick links, categories, contact info) + bottom bar. Social icons are inline SVG (lucide-react v1 dropped brand icons).

## 0.2.0 — 2026-08-22
- Added `/home2`: sleek redesigned homepage with gradient hero, floating medicine icon illustrations (from `media/web-components`, optimized to WebP), bento-style perk cards, hover-lift product cards, star-rating CTA banner.

## 0.1.0 — 2026-08-22
- Initial scaffold: Next.js + Tailwind + Framer Motion, pharmacy color theme.
- Home, Shop, Product detail, About, Contact pages with 12 dummy products across 6 categories.
- Git repo + Vercel deploy set up, aliased to medwell-rx.vercel.app for client sharing.

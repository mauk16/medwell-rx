# STATE — v0.10.2

Demo pharmacy storefront. Static/dummy data only, no backend, no real transactions.

## Live
- Local dev: `dev-pharmacy.cmd` → http://localhost:3015
- Deployed: https://medwell-rx.vercel.app

## Stack
Next.js (App Router, Turbopack) + Tailwind CSS v4 + Framer Motion + lucide-react. No database, no auth — all product data is a static array in `data/products.ts`.

## Design language
Dark emerald gradient hero on every page (`.hero-gradient` in `globals.css`), rounded-2xl/3xl
bordered cards, scroll-snap swipe rows on mobile that become grids at `sm:`/`lg:`, and a sticky
mobile action bar on the homepage and product detail. Shared via `components/PageHero.tsx` and
`components/ProductCard.tsx`; per-category illustrations come from `categoryArt` in `data/products.ts`.

## Pages
- `/` — homepage: hero + working search, layered floating cards (desktop), category/product/review
  swipe rows, bento value grid, 3-step explainer, sticky mobile CTA bar
- `/products` — catalog, filterable by `?category=` and searchable by `?q=`, with empty state
- `/products/[slug]` — illustrated panel, assurances, related row, sticky mobile buy bar
  (disabled for Rx items)
- `/about` — story, stat grid, values grid, CTA
- `/contact` — contact detail cards + non-functional form

## Known non-functional (by design, it's a demo)
- "Add to Cart", "Upload Rx", and the contact form don't submit anywhere
- Illustrated icons only (`public/images/med-*.webp`), no real product photography
- No cart/checkout, no auth

## Next steps (if this becomes a real build)
- Cart/checkout flow
- Real product photography
- Prescription upload for Rx items

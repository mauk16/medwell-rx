# STATE — v0.8.0

Demo pharmacy storefront. Static/dummy data only, no backend, no real transactions.

## Live
- Local dev: `dev-pharmacy.cmd` → http://localhost:3015
- Deployed: https://medwell-rx.vercel.app

## Stack
Next.js (App Router, Turbopack) + Tailwind CSS v4 + Framer Motion + lucide-react. No database, no auth — all product data is a static array in `data/products.ts`.

## Pages
- `/` — original hero, perks, category links, featured products
- `/home2` — redesigned homepage: gradient hero with floating medicine icons, bento perk cards, CTA banner
- `/home3` — conversion-focused homepage: dark gradient hero + working search, mobile swipe rows, bento grid, steps, reviews, sticky mobile CTA bar
- `/products` — full catalog, filterable by `?category=` and searchable by `?q=`
- `/products/[slug]` — product detail (Rx items show "Requires Prescription", disabled button)
- `/about`, `/contact` — static info + non-functional contact form

## Known non-functional (by design, it's a demo)
- "Add to Cart", "Upload Rx", and the contact form don't submit anywhere
- Illustrated icons only (`public/images/med-*.webp`), no real product photography
- No cart/checkout, no auth

## Next steps (if this becomes a real build)
- Cart/checkout flow
- Real product photography
- Prescription upload for Rx items

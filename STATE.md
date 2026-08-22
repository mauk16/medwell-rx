# STATE — v0.1.0

Demo pharmacy storefront. Static/dummy data only, no backend, no real transactions.

## Live
- Local dev: `dev-pharmacy.cmd` → http://localhost:3015
- Deployed: https://medwell-rx.vercel.app

## Stack
Next.js (App Router, Turbopack) + Tailwind CSS v4 + Framer Motion + lucide-react. No database, no auth — all product data is a static array in `data/products.ts`.

## Pages
- `/` — hero, perks, category links, featured products
- `/products` — full catalog, filterable by `?category=`
- `/products/[slug]` — product detail (Rx items show "Requires Prescription", disabled button)
- `/about`, `/contact` — static info + non-functional contact form

## Known non-functional (by design, it's a demo)
- "Add to Cart" and the contact form don't submit anywhere
- No product photos (text-only cards)
- No cart/checkout, no auth, no search

## Next steps (if this becomes a real build)
- Cart/checkout flow
- Product images
- Search
- Prescription upload for Rx items

# Changelog

## 0.11.0 — 2026-08-22
- Extracted `MobileNav`, `PageHero`, and a generalized `ProductCard` into `common-utilities/navigation` and `common-utilities/ecommerce` for reuse in future projects (props-driven, no hardcoded pharmacy content); `MobileNav` now takes `links`/`ctaHref`/`ctaLabel`/`phone` props instead of hardcoded copy.
- Reduced desktop hero's vertical padding (`lg:py-24` → `lg:py-14`) to remove excess space above the fold.
- Added mobile-only extra bottom padding to the footer (`pb-16` vs `pb-8` on desktop) so the last row no longer hides behind the phone's on-screen nav bar.
- Made body text unselectable site-wide by default; address/phone/email in the footer and contact page stay selectable/copyable via a `.selectable` class.

## 0.10.2 — 2026-08-22
- Fixed mobile menu popup width: was spanning the full viewport, now a compact 256px card anchored under the trigger.
- Fixed the backdrop only dimming/blurring below the header instead of the whole page, and background elements (like the header logo) remaining clickable through it: the header's `backdrop-blur` was creating a CSS containing block that trapped the `fixed` backdrop/panel to the header's own box. Portalled both to `document.body` to escape it — backdrop now covers the full viewport, intercepts every tap (closing the menu instead of also activating whatever's underneath), and background scroll stays locked while open.

## 0.10.0 — 2026-08-22
- Fixed hero on mobile: headline no longer collides with the scaled-down corner visual (`min-w-0` + reserved space only on the `<h1>`, not the whole column), search bar and trust chips now span full width.
- Added `MobileNav`: a popup dropdown card (not a full-screen takeover) with a dimmed/blurred backdrop, tap-outside-to-close, background scroll lock, and its own close button — trigger stays a static hamburger. Desktop nav unchanged.
- Redesigned `Header` and `Footer` to match the homepage's dark hero language (footer now uses `.hero-gradient`), with a 2-up link grid on mobile and the existing Fluxframers/version credit line.

## 0.9.1 — 2026-08-22
- Embedded the MedWell logo mark + wordmark into the hero's translucent background tile, behind the floating cards.

## 0.9.0 — 2026-08-22
- Promoted the home3 design to `/` as the only homepage; deleted the original `/` and `/home2` designs.
- Rolled the same design language across every remaining page (responsive for desktop and mobile):
  - `/products` — dark hero with persistent search + category chips, result count, empty state, 3-col card grid.
  - `/products/[slug]` — breadcrumb, illustrated product panel, assurances list, related-products swipe row, sticky mobile buy bar (disabled for Rx items).
  - `/about` — hero, stat grid, story split, values grid, closing CTA.
  - `/contact` — hero, contact detail cards + prescription note, expanded form (name/phone/email/topic/message).
- Extracted shared pieces to kill duplication: `.hero-gradient` CSS class, `PageHero` and `ProductCard` components, and `categoryArt` moved into `data/products.ts`.

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

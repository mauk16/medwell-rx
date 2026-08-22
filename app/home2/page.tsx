import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Truck, Clock, Sparkles, Star, Cross } from "lucide-react";
import { categories, products } from "@/data/products";

const perks = [
  { icon: ShieldCheck, title: "Licensed Pharmacists", text: "Every order reviewed by a licensed pharmacist." },
  { icon: Truck, title: "Fast Delivery", text: "Same-day delivery available in Springfield." },
  { icon: Clock, title: "Open Late", text: "Mon–Sat, 8am–9pm for walk-ins and pickup." },
];

// One icon per product category, used once each — no repeats, no clustering.
const categoryIcon: Record<string, string> = {
  "Pain Relief": "/images/med-1.webp",
  "Cold & Flu": "/images/med-4.webp",
  Vitamins: "/images/med-2.webp",
  "Skin Care": "/images/med-2.webp",
  "Baby & Child": "/images/med-4.webp",
  Prescription: "/images/med-7.webp",
};

export default function Home2() {
  const featured = products.slice(0, 4);

  return (
    <div>
      {/* Hero — asymmetric two-column, one composed visual instead of scattered icons */}
      <section className="border-b border-border bg-accent/40">
        <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-6 py-8 sm:gap-12 sm:py-10 lg:grid-cols-2 lg:py-14">
          <div className="pr-32 sm:pr-40 lg:pr-0">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold text-primary">
              <Sparkles size={14} /> New look, same trusted care
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:mt-6 sm:text-5xl lg:text-6xl">
              Care that fits
              <br />
              <span className="text-primary">your everyday life.</span>
            </h1>
            <p className="mt-3 max-w-md text-base text-muted sm:mt-5 sm:text-lg">
              Prescriptions, wellness essentials, and expert advice — all in one modern
              neighborhood pharmacy.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4">
              <Link
                href="/products"
                className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5 hover:bg-primary-dark sm:px-8 sm:py-3 sm:text-base"
              >
                Shop Products
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-border bg-background px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary sm:px-8 sm:py-3 sm:text-base"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Single composed visual, unchanged internally. On mobile it's uniformly scaled down
              (transform, not resized elements) and pinned into the hero's free top-right corner;
              at lg it returns to its normal full-size spot in the grid. */}
          <div className="absolute right-4 top-16 h-28 w-28 overflow-hidden sm:top-20 sm:h-36 sm:w-36 lg:static lg:top-auto lg:mx-auto lg:h-auto lg:w-full lg:max-w-sm lg:overflow-visible">
            <div className="relative aspect-square w-96 origin-top-left scale-[0.2917] sm:scale-[0.375] lg:w-full lg:scale-100 lg:origin-center">
              <div
                className="absolute inset-8 rounded-[2.5rem]"
                style={{
                  background:
                    "radial-gradient(circle at 30% 25%, color-mix(in srgb, var(--primary) 22%, transparent), transparent 60%), radial-gradient(circle at 75% 80%, color-mix(in srgb, var(--primary) 16%, transparent), transparent 55%), var(--accent)",
                }}
              />
              <div className="absolute inset-8 flex flex-col items-center justify-center gap-2 rounded-[2.5rem]">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-primary text-white shadow-lg shadow-primary/30">
                  <Cross size={30} />
                </span>
                <p className="text-lg font-bold tracking-tight text-primary">MedWell</p>
              </div>
              <div className="absolute bottom-16 right-10">
                <div className="animate-float" style={{ animationDelay: "0.6s" }}>
                  <div className="rounded-2xl border border-border bg-background px-5 py-3 text-center shadow-xl">
                    <p className="text-xl font-bold text-primary">20+</p>
                    <p className="text-xs text-muted">years of care</p>
                  </div>
                </div>
              </div>
              <div className="absolute right-0 top-6 w-40">
                <div className="animate-float">
                  <div className="rotate-6 rounded-3xl border border-border bg-background p-6 shadow-xl">
                    <Image src="/images/med-7.webp" alt="Prescription bottle" width={160} height={160} className="w-full" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-6 left-0 w-32">
                <div className="animate-float" style={{ animationDelay: "1.2s" }}>
                  <div className="-rotate-6 rounded-3xl border border-border bg-background p-5 shadow-xl">
                    <Image src="/images/med-2.webp" alt="Capsules" width={128} height={128} className="w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perks — bento style */}
      <section className="mx-auto max-w-6xl px-6 py-10 sm:py-16">
        <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
          {perks.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-background p-5 transition-shadow hover:shadow-lg sm:p-6"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary">
                <p.icon size={22} />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{p.title}</h3>
              <p className="mt-1 text-sm text-muted">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-6 py-6 sm:py-8">
        <h2 className="text-xl font-bold text-foreground sm:text-2xl">Shop by Category</h2>
        <div className="mt-4 flex flex-wrap gap-2 sm:mt-6 sm:gap-3">
          {categories.map((c) => (
            <Link
              key={c}
              href={`/products?category=${encodeURIComponent(c)}`}
              className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {c}
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products — each card gets its own category icon as a quiet corner watermark */}
      <section className="mx-auto max-w-6xl px-6 py-10 sm:py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">Featured Products</h2>
          <Link href="/products" className="text-sm font-semibold text-primary hover:underline">
            View all →
          </Link>
        </div>
        <div className="mt-4 grid gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background p-5 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <Image
                src={categoryIcon[p.category]}
                alt=""
                width={72}
                height={72}
                className="pointer-events-none absolute -right-3 -top-3 w-16 opacity-[0.08] transition-opacity group-hover:opacity-[0.14]"
              />
              <p className="relative text-xs font-medium text-primary">{p.category}</p>
              <h3 className="relative mt-1 font-semibold text-foreground">{p.name}</h3>
              <p className="relative mt-1 text-sm text-muted">{p.blurb}</p>
              <p className="relative mt-3 font-bold text-foreground">${p.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA banner — one large, subtle background icon instead of clutter */}
      <section className="mx-auto max-w-6xl px-6 pb-12 sm:pb-20">
        <div className="relative flex flex-col items-center gap-5 overflow-hidden rounded-3xl bg-primary px-6 py-10 text-center text-white sm:flex-row sm:justify-between sm:gap-6 sm:px-8 sm:py-14 sm:text-left">
          <Image
            src="/images/med-3.webp"
            alt=""
            width={220}
            height={220}
            className="pointer-events-none absolute -right-10 -top-10 w-56 opacity-10 invert"
          />
          <div className="relative">
            <div className="flex items-center gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
              <span className="ml-2 text-sm font-medium">4.9/5 from 1,200+ customers</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold">Ready when you are.</h2>
          </div>
          <Link
            href="/contact"
            className="relative rounded-full bg-white px-8 py-3 font-semibold text-primary transition-transform hover:-translate-y-0.5"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Truck, Clock, Sparkles, Star } from "lucide-react";
import { categories, products } from "@/data/products";

const perks = [
  { icon: ShieldCheck, title: "Licensed Pharmacists", text: "Every order reviewed by a licensed pharmacist." },
  { icon: Truck, title: "Fast Delivery", text: "Same-day delivery available in Springfield." },
  { icon: Clock, title: "Open Late", text: "Mon–Sat, 8am–9pm for walk-ins and pickup." },
];

const floaters = [
  { src: "/images/med-1.webp", className: "left-[4%] top-[12%] w-20 -rotate-6" },
  { src: "/images/med-7.webp", className: "right-[6%] top-[8%] w-24 rotate-6" },
  { src: "/images/med-4.webp", className: "left-[10%] bottom-[10%] w-24 rotate-3" },
  { src: "/images/med-3.webp", className: "right-[10%] bottom-[14%] w-20 -rotate-3" },
];

export default function Home2() {
  const featured = products.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--accent),_var(--background)_65%)]">
        <div className="pointer-events-none absolute inset-0 hidden sm:block">
          {floaters.map((f) => (
            <Image
              key={f.src}
              src={f.src}
              alt=""
              width={160}
              height={160}
              className={`absolute drop-shadow-lg ${f.className}`}
            />
          ))}
        </div>

        <div className="relative mx-auto max-w-3xl px-6 py-28 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold text-primary">
            <Sparkles size={14} /> New look, same trusted care
          </span>
          <h1 className="mt-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            Care that fits
            <br />
            <span className="text-primary">your everyday life.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-lg text-muted">
            Prescriptions, wellness essentials, and expert advice — all in one modern
            neighborhood pharmacy.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/products"
              className="rounded-full bg-primary px-8 py-3 font-semibold text-white shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              Shop Products
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-border bg-background px-8 py-3 font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Perks — bento style */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          {perks.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-lg"
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
      <section className="mx-auto max-w-6xl px-6 py-8">
        <h2 className="text-2xl font-bold text-foreground">Shop by Category</h2>
        <div className="mt-6 flex flex-wrap gap-3">
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

      {/* Featured products */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold text-foreground">Featured Products</h2>
          <Link href="/products" className="text-sm font-semibold text-primary hover:underline">
            View all →
          </Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="group rounded-2xl border border-border bg-background p-5 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-xs font-medium text-primary">{p.category}</p>
              <h3 className="mt-1 font-semibold text-foreground">{p.name}</h3>
              <p className="mt-1 text-sm text-muted">{p.blurb}</p>
              <p className="mt-3 font-bold text-foreground">${p.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-primary px-8 py-14 text-center text-white sm:flex-row sm:text-left sm:justify-between">
          <div>
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
            className="rounded-full bg-white px-8 py-3 font-semibold text-primary transition-transform hover:-translate-y-0.5"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

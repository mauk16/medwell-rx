import Link from "next/link";
import { ShieldCheck, Truck, Clock } from "lucide-react";
import { categories, products } from "@/data/products";

const perks = [
  { icon: ShieldCheck, title: "Licensed Pharmacists", text: "Every order reviewed by a licensed pharmacist." },
  { icon: Truck, title: "Fast Delivery", text: "Same-day delivery available in Springfield." },
  { icon: Clock, title: "Open Late", text: "Mon–Sat, 8am–9pm for walk-ins and pickup." },
];

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <div>
      <section className="bg-accent">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Your health, handled with care.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Trusted over-the-counter essentials and prescription fulfillment, from a
            neighborhood pharmacy that knows your name.
          </p>
          <Link
            href="/products"
            className="mt-8 inline-block rounded-full bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Shop Products
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-3">
          {perks.map((p) => (
            <div key={p.title} className="text-center">
              <p.icon className="mx-auto mb-3 text-primary" size={28} />
              <h3 className="font-semibold text-foreground">{p.title}</h3>
              <p className="mt-1 text-sm text-muted">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
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

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-2xl font-bold text-foreground">Featured Products</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="rounded-2xl border border-border bg-background p-5 transition-shadow hover:shadow-md"
            >
              <p className="text-xs font-medium text-primary">{p.category}</p>
              <h3 className="mt-1 font-semibold text-foreground">{p.name}</h3>
              <p className="mt-1 text-sm text-muted">{p.blurb}</p>
              <p className="mt-3 font-bold text-foreground">${p.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

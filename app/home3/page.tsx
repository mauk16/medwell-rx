import Link from "next/link";
import Image from "next/image";
import {
  Search,
  ShieldCheck,
  Truck,
  Clock,
  Star,
  Upload,
  MessageCircle,
  ArrowRight,
  Cross,
} from "lucide-react";
import { categories, products } from "@/data/products";

const trustChips = [
  { icon: ShieldCheck, label: "Licensed pharmacists" },
  { icon: Truck, label: "Same-day delivery" },
  { icon: Clock, label: "Open til 9pm" },
];

const categoryArt: Record<string, string> = {
  "Pain Relief": "/images/med-1.webp",
  "Cold & Flu": "/images/med-4.webp",
  Vitamins: "/images/med-2.webp",
  "Skin Care": "/images/med-6.webp",
  "Baby & Child": "/images/med-5.webp",
  Prescription: "/images/med-7.webp",
};

const steps = [
  { n: "01", title: "Search or upload", text: "Find what you need, or send us a photo of your prescription." },
  { n: "02", title: "Pharmacist review", text: "A licensed pharmacist checks every order before it leaves." },
  { n: "03", title: "Delivered today", text: "Same-day to your door, or collect in store when it suits you." },
];

const reviews = [
  { name: "Dana R.", text: "Called at 4pm about a refill and it was on my porch before dinner. Genuinely impressed." },
  { name: "Marcus T.", text: "The pharmacist spent ten minutes explaining an interaction nobody else flagged." },
  { name: "Priya S.", text: "Prices beat the big chains and I actually get to talk to a human. Easy switch." },
];

export default function Home3() {
  const featured = products.slice(0, 6);

  return (
    <div className="pb-24 lg:pb-0">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden rounded-b-[2rem] text-white sm:rounded-b-[3rem]"
        style={{
          background:
            "radial-gradient(ellipse at 85% 10%, color-mix(in srgb, var(--primary) 85%, white), transparent 55%), linear-gradient(160deg, var(--primary-dark), color-mix(in srgb, var(--primary-dark) 70%, black))",
        }}
      >
        <Image
          src="/images/med-6.webp"
          alt=""
          width={420}
          height={420}
          className="pointer-events-none absolute -right-16 -top-16 w-72 opacity-[0.07] sm:w-96"
        />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium ring-1 ring-white/20 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              Open now — closes 9pm
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Your pharmacy,
              <br />
              <span className="text-white/60">without the wait.</span>
            </h1>

            <p className="mt-4 max-w-md text-base text-white/70 sm:text-lg">
              Prescriptions filled, essentials delivered, and a real pharmacist on the other
              end of the line.
            </p>

            {/* Working search — GETs straight to the shop */}
            <form
              action="/products"
              className="mt-7 flex items-center gap-2 rounded-full bg-white p-1.5 shadow-2xl shadow-black/20"
            >
              <Search size={18} className="ml-3 shrink-0 text-muted" />
              <input
                name="q"
                type="search"
                placeholder="Search medicines, vitamins…"
                aria-label="Search products"
                className="min-w-0 flex-1 bg-transparent py-2 text-sm text-foreground outline-none placeholder:text-muted"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Search
              </button>
            </form>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {trustChips.map((c) => (
                <span key={c.label} className="flex items-center gap-2 text-xs text-white/70">
                  <c.icon size={15} className="text-white/90" />
                  {c.label}
                </span>
              ))}
            </div>
          </div>

          {/* Visual — layered cards, desktop only (mobile keeps the hero tight) */}
          <div className="relative hidden aspect-square w-full max-w-md justify-self-end lg:block">
            <div className="absolute inset-6 rounded-[2.5rem] bg-white/5 ring-1 ring-white/10 backdrop-blur-sm" />

            <div className="absolute left-2 top-8 w-44 animate-float">
              <div className="-rotate-3 rounded-3xl bg-white p-5 shadow-2xl">
                <Image src="/images/med-7.webp" alt="Prescription bottle" width={176} height={176} className="w-full" />
                <p className="mt-2 text-xs font-semibold text-foreground">Refill in 30s</p>
                <p className="text-[11px] text-muted">Rx ready today</p>
              </div>
            </div>

            <div className="absolute bottom-10 right-2 w-40 animate-float" style={{ animationDelay: "1.1s" }}>
              <div className="rotate-3 rounded-3xl bg-white p-5 shadow-2xl">
                <Image src="/images/med-2.webp" alt="Capsules" width={160} height={160} className="w-full" />
                <p className="mt-2 text-xs font-semibold text-foreground">1,400+ items</p>
                <p className="text-[11px] text-muted">In stock now</p>
              </div>
            </div>

            <div
              className="absolute right-6 top-6 animate-float rounded-2xl bg-white px-4 py-3 shadow-2xl"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" />
                ))}
              </div>
              <p className="mt-1 text-xs font-semibold text-foreground">4.9 / 5</p>
              <p className="text-[11px] text-muted">1,200+ reviews</p>
            </div>

            <div
              className="absolute bottom-8 left-10 animate-float rounded-2xl bg-primary px-4 py-3 shadow-2xl ring-1 ring-white/20"
              style={{ animationDelay: "1.6s" }}
            >
              <p className="text-lg font-bold leading-none">20+</p>
              <p className="mt-1 text-[11px] text-white/70">years of care</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Categories: swipe row on mobile, grid on desktop ──── */}
      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            What are you looking for?
          </h2>
          <Link
            href="/products"
            className="shrink-0 text-sm font-semibold text-primary hover:underline"
          >
            All products
          </Link>
        </div>

        <div className="no-scrollbar -mx-6 mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0 lg:grid-cols-6">
          {categories.map((c) => (
            <Link
              key={c}
              href={`/products?category=${encodeURIComponent(c)}`}
              className="group flex w-32 shrink-0 snap-start flex-col items-center gap-3 rounded-2xl border border-border bg-background p-4 text-center transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg sm:w-auto"
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent transition-colors group-hover:bg-primary/10">
                <Image src={categoryArt[c]} alt="" width={40} height={40} className="h-8 w-8 object-contain" />
              </span>
              <span className="text-xs font-semibold leading-tight text-foreground">{c}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Bento: asymmetric value props ─────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 pb-12 sm:pb-16">
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-3xl bg-primary p-7 text-white sm:p-9 lg:col-span-2">
            <Image
              src="/images/med-7.webp"
              alt=""
              width={260}
              height={260}
              className="pointer-events-none absolute -bottom-8 -right-6 w-40 opacity-20 sm:w-52"
            />
            <div className="relative max-w-sm">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/15 ring-1 ring-white/20">
                <Upload size={20} />
              </span>
              <h3 className="mt-4 text-2xl font-bold tracking-tight">Send us your prescription</h3>
              <p className="mt-2 text-sm text-white/75">
                Snap a photo, we handle the rest. Most scripts are ready for collection within
                the hour.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
              >
                Upload now <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 rounded-3xl border border-border bg-background p-7 sm:p-9">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary">
              <Truck size={20} />
            </span>
            <div>
              <h3 className="text-lg font-bold tracking-tight text-foreground">
                Free same-day delivery
              </h3>
              <p className="mt-2 text-sm text-muted">
                On orders over $25 across Springfield. Order by 4pm.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 rounded-3xl border border-border bg-background p-7 sm:p-9">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary">
              <MessageCircle size={20} />
            </span>
            <div>
              <h3 className="text-lg font-bold tracking-tight text-foreground">
                Ask a pharmacist
              </h3>
              <p className="mt-2 text-sm text-muted">
                Free advice, no appointment. In store or over the phone.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 items-center gap-4 rounded-3xl border border-border bg-accent/50 p-7 sm:p-9 lg:col-span-2">
            {[
              ["20+", "Years open"],
              ["12", "Pharmacists"],
              ["4.9", "Avg. rating"],
            ].map(([stat, label]) => (
              <div key={label}>
                <p className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">{stat}</p>
                <p className="mt-1 text-xs text-muted sm:text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured products ─────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 pb-12 sm:pb-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            Popular this week
          </h2>
          <Link href="/products" className="shrink-0 text-sm font-semibold text-primary hover:underline">
            View all
          </Link>
        </div>

        <div className="no-scrollbar -mx-6 mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="group relative flex w-[75vw] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-border bg-background p-5 transition-all hover:-translate-y-1 hover:shadow-lg sm:w-auto"
            >
              <Image
                src={categoryArt[p.category]}
                alt=""
                width={96}
                height={96}
                className="pointer-events-none absolute -right-4 -top-4 w-20 opacity-10 transition-opacity group-hover:opacity-20"
              />
              <div className="relative flex items-start justify-between gap-2">
                <p className="text-xs font-semibold text-primary">{p.category}</p>
                {p.rx && (
                  <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold text-primary">
                    Rx
                  </span>
                )}
              </div>
              <h3 className="relative mt-1.5 font-semibold leading-snug text-foreground">{p.name}</h3>
              <p className="relative mt-1 flex-1 text-sm text-muted">{p.blurb}</p>
              <div className="relative mt-4 flex items-center justify-between">
                <p className="font-bold text-foreground">${p.price.toFixed(2)}</p>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <ArrowRight size={15} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────────── */}
      <section className="border-y border-border bg-accent/40">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            Three steps, no queue
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3 sm:gap-6">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl border border-border bg-background p-6">
                <span className="text-xs font-bold tracking-widest text-primary/50">{s.n}</span>
                <h3 className="mt-2 font-semibold text-foreground">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          What the neighborhood says
        </h2>
        <div className="no-scrollbar -mx-6 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex w-[80vw] shrink-0 snap-start flex-col rounded-2xl border border-border bg-background p-6 sm:w-auto"
            >
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground">
                {r.text}
              </blockquote>
              <figcaption className="mt-4 text-xs font-semibold text-muted">{r.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ── Closing CTA ───────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 pb-16 sm:pb-20">
        <div
          className="relative overflow-hidden rounded-3xl px-7 py-12 text-center text-white sm:px-12 sm:py-16"
          style={{
            background:
              "radial-gradient(ellipse at 20% 0%, color-mix(in srgb, var(--primary) 85%, white), transparent 60%), linear-gradient(160deg, var(--primary-dark), color-mix(in srgb, var(--primary-dark) 70%, black))",
          }}
        >
          <Image
            src="/images/med-3.webp"
            alt=""
            width={280}
            height={280}
            className="pointer-events-none absolute -bottom-12 -left-10 w-48 opacity-10 invert sm:w-64"
          />
          <div className="relative mx-auto max-w-lg">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-white/15 ring-1 ring-white/20 mx-auto">
              <Cross size={22} />
            </span>
            <h2 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
              Switch your pharmacy in one call
            </h2>
            <p className="mt-3 text-sm text-white/70 sm:text-base">
              We transfer your prescriptions for you. No paperwork, no waiting on hold.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
              >
                Get in touch
              </Link>
              <Link
                href="/products"
                className="rounded-full px-7 py-3 text-sm font-semibold text-white ring-1 ring-white/30 transition-colors hover:bg-white/10"
              >
                Browse the shop
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sticky mobile action bar ──────────────────────────── */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-3 backdrop-blur lg:hidden">
        <div className="flex gap-3">
          <Link
            href="/products"
            className="flex-1 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Shop now
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground"
          >
            Upload Rx
          </Link>
        </div>
      </div>
    </div>
  );
}

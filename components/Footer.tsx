import Link from "next/link";
import Image from "next/image";
import { Cross, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { categories } from "@/data/products";
import pkg from "@/package.json";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// lucide-react v1 dropped brand icons — inline paths instead of an extra dependency.
const socials = [
  {
    href: "#",
    label: "Facebook",
    path: "M13 22v-8h2.7l.4-3H13V9c0-.9.2-1.5 1.5-1.5H16V5c-.3 0-1.1-.1-2.1-.1-2.1 0-3.4 1.3-3.4 3.6V11H8v3h2.5v8h2.5Z",
  },
  {
    href: "#",
    label: "Instagram",
    path: "M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm0-1.6a5.1 5.1 0 1 1 0 10.2 5.1 5.1 0 0 1 0-10.2ZM17.7 6.7a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0ZM12 4.2c-2.1 0-2.4 0-3.3.05-.85.04-1.3.18-1.6.3a2.9 2.9 0 0 0-1.05.68 2.9 2.9 0 0 0-.68 1.05c-.12.3-.26.75-.3 1.6-.05.9-.05 1.2-.05 3.3s0 2.4.05 3.3c.04.85.18 1.3.3 1.6.14.4.35.75.68 1.05.3.3.65.54 1.05.68.3.12.75.26 1.6.3.9.05 1.2.05 3.3.05s2.4 0 3.3-.05c.85-.04 1.3-.18 1.6-.3.4-.14.75-.35 1.05-.68.3-.3.54-.65.68-1.05.12-.3.26-.75.3-1.6.05-.9.05-1.2.05-3.3s0-2.4-.05-3.3c-.04-.85-.18-1.3-.3-1.6a2.9 2.9 0 0 0-.68-1.05 2.9 2.9 0 0 0-1.05-.68c-.3-.12-.75-.26-1.6-.3-.9-.05-1.2-.05-3.3-.05Z",
  },
  {
    href: "#",
    label: "Twitter",
    path: "M21 5.9c-.6.3-1.3.5-2 .6a3.5 3.5 0 0 0 1.5-1.9c-.7.4-1.4.7-2.2.85a3.4 3.4 0 0 0-5.9 3.1A9.7 9.7 0 0 1 5.3 5.2a3.4 3.4 0 0 0 1.05 4.6c-.55-.02-1.1-.17-1.5-.42v.05a3.4 3.4 0 0 0 2.75 3.35c-.5.14-1.05.16-1.55.06a3.4 3.4 0 0 0 3.2 2.4A6.9 6.9 0 0 1 4 16.6a9.7 9.7 0 0 0 5.3 1.55c6.3 0 9.8-5.3 9.8-9.8v-.45c.7-.5 1.25-1.1 1.7-1.8Z",
  },
];

const contact = [
  { icon: MapPin, text: "123 Wellness Ave, Springfield" },
  { icon: Phone, text: "(555) 012-3456" },
  { icon: Mail, text: "hello@medwellpharmacy.demo" },
];

export default function Footer() {
  return (
    <footer className="hero-gradient mt-4 rounded-t-[2rem] text-white sm:rounded-t-[3rem]">
      <div className="relative mx-auto max-w-6xl overflow-hidden px-6 pb-8 pt-12 sm:pt-16">
        <Image
          src="/images/med-6.webp"
          alt=""
          width={360}
          height={360}
          className="pointer-events-none absolute -right-14 -top-14 w-56 opacity-[0.06] sm:w-72"
        />

        {/* CTA strip */}
        <div className="relative flex flex-col gap-4 rounded-2xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-bold tracking-tight">Need something today?</p>
            <p className="mt-0.5 text-sm text-white/70">
              Order by 4pm for free same-day delivery.
            </p>
          </div>
          <Link
            href="/products"
            className="flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
          >
            Shop now <ArrowRight size={15} />
          </Link>
        </div>

        {/* Brand */}
        <div className="relative mt-10 grid gap-8 lg:grid-cols-4 lg:gap-10">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15 ring-1 ring-white/20">
                <Cross size={17} />
              </span>
              MedWell Pharmacy
            </Link>
            <p className="mt-3 max-w-xs text-sm text-white/60">
              Your neighborhood pharmacy for trusted over-the-counter care and prescription
              fulfillment, since 2005.
            </p>
            <div className="mt-5 flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full text-white/70 ring-1 ring-white/20 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns — side by side even on the smallest phones */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:gap-10">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white/50">
                Explore
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-white/75">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white/50">
                Categories
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-white/75">
                {categories.slice(0, 5).map((c) => (
                  <li key={c}>
                    <Link
                      href={`/products?category=${encodeURIComponent(c)}`}
                      className="transition-colors hover:text-white"
                    >
                      {c}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/50">
              Visit us
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              {contact.map((c) => (
                <li key={c.text} className="flex items-start gap-2.5">
                  <c.icon size={15} className="mt-0.5 shrink-0 text-white/50" />
                  <span className="break-words">{c.text}</span>
                </li>
              ))}
              <li className="text-xs text-white/50">Mon–Sat, 8am–9pm · Closed Sunday</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative mt-10 flex flex-col items-center gap-3 border-t border-white/15 pt-6 text-center text-xs text-white/50 lg:flex-row lg:justify-between lg:text-left">
          <p>© {new Date().getFullYear()} MedWell Pharmacy. All rights reserved.</p>
          <p className="order-last lg:order-none">
            Demo site — not a real pharmacy. No medications are sold here.
          </p>
          <span className="flex items-center gap-2.5">
            <a
              href="https://www.fluxframers.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              Developed by
              <Image src="/fluxframers-logo.webp" alt="Fluxframers" width={16} height={11} />
              Fluxframers
            </a>
            <span className="text-white/25">&middot;</span>
            <span>v{pkg.version}</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

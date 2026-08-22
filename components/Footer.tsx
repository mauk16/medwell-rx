import Link from "next/link";
import Image from "next/image";
import { Cross, MapPin, Phone, Mail } from "lucide-react";
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

export default function Footer() {
  return (
    <footer className="border-t border-border bg-accent/40">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 text-lg font-bold text-primary">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-white">
                <Cross size={18} />
              </span>
              MedWell Pharmacy
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted">
              Your neighborhood pharmacy for trusted over-the-counter care and prescription
              fulfillment, since 2005.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted transition-colors hover:border-primary hover:text-primary"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Categories</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              {categories.slice(0, 5).map((c) => (
                <li key={c}>
                  <Link
                    href={`/products?category=${encodeURIComponent(c)}`}
                    className="transition-colors hover:text-primary"
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Visit Us</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                123 Wellness Ave, Springfield
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0 text-primary" />
                (555) 012-3456
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="shrink-0 text-primary" />
                hello@medwellpharmacy.demo
              </li>
              <li className="text-xs">Mon–Sat, 8am–9pm</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} MedWell Pharmacy. All rights reserved.</p>
          <p>Demo site — not a real pharmacy. No actual medications are sold here.</p>
          <span className="flex items-center gap-3">
            <a
              href="https://www.fluxframers.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              Developed by
              <Image src="/fluxframers-logo.webp" alt="Fluxframers" width={16} height={11} />
              Fluxframers
            </a>
            <span className="text-muted/50">&middot;</span>
            <span>v{pkg.version}</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

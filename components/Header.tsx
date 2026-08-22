import Link from "next/link";
import { Cross, ArrowRight } from "lucide-react";
import MobileNav from "./MobileNav";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3.5">
        <Link href="/" className="flex items-center gap-2 font-bold text-primary">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-white">
            <Cross size={18} />
          </span>
          <span className="text-base sm:text-lg">MedWell Pharmacy</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-muted md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-primary">
              {l.label}
            </Link>
          ))}
          <Link
            href="/products"
            className="flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Shop <ArrowRight size={14} />
          </Link>
        </nav>

        <MobileNav links={links} ctaHref="/products" ctaLabel="Shop products" phone="+15550123456" />
      </div>
    </header>
  );
}

import Link from "next/link";
import { Cross } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-primary">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-white">
            <Cross size={18} />
          </span>
          MedWell Pharmacy
        </Link>
        <nav className="flex gap-6 text-sm font-medium text-muted">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-primary transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

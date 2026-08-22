"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, ArrowRight } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close on navigation — the header persists across soft navigations. Adjusting
  // state during render (not in an effect) avoids an extra cascading render.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  // Lock background scroll while the popup is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary md:hidden"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>

      {/* Portalled to <body> — rendering these inside <header> traps position:fixed
          children to the header's own box, because the header's backdrop-blur
          establishes a containing block. A portal sidesteps that entirely. */}
      {typeof document !== "undefined" &&
        createPortal(
          <>
            {/* Backdrop — dims and blurs the whole page behind the popup; tap it to close */}
            <div
              onClick={() => setOpen(false)}
              aria-hidden="true"
              className={`fixed inset-0 z-[55] bg-foreground/40 backdrop-blur-sm transition-opacity duration-200 md:hidden ${
                open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
              }`}
            />

            {/* Popup panel — a card dropping from the header, not a full-screen takeover */}
            <div
              role="dialog"
              aria-label="Site menu"
              className={`fixed right-4 top-[4.5rem] z-[60] w-64 origin-top-right rounded-2xl border border-border bg-background shadow-2xl transition-all duration-200 md:hidden ${
                open ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none -translate-y-2 scale-95 opacity-0"
              }`}
            >
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <span className="text-sm font-semibold text-muted">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-8 w-8 place-items-center rounded-full text-muted transition-colors hover:bg-accent hover:text-primary"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="p-2">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                      pathname === l.href
                        ? "bg-accent text-primary"
                        : "text-foreground hover:bg-accent"
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>

              <div className="space-y-2 border-t border-border p-2.5">
                <Link
                  href="/products"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Shop products <ArrowRight size={14} />
                </Link>
                <a
                  href="tel:+15550123456"
                  className="flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Phone size={14} /> (555) 012-3456
                </a>
              </div>
            </div>
          </>,
          document.body,
        )}
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { categoryArt, type Product } from "@/data/products";

/** Fills its container — callers control width (grid cell or snap-row wrapper). */
export default function ProductCard({ product: p }: { product: Product }) {
  return (
    <Link
      href={`/products/${p.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background p-5 transition-all hover:-translate-y-1 hover:shadow-lg"
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
  );
}

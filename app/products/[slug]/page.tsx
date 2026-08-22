import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, ShieldCheck, Truck, MessageCircle } from "lucide-react";
import { categoryArt, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const assurances = [
  { icon: ShieldCheck, text: "Pharmacist-checked before dispatch" },
  { icon: Truck, text: "Free same-day delivery over $25" },
  { icon: MessageCircle, text: "Free advice — call or drop in" },
];

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .concat(products.filter((p) => p.category !== product.category))
    .slice(0, 3);

  return (
    <div className="pb-24 lg:pb-0">
      <div className="mx-auto max-w-6xl px-6 pt-8">
        <nav className="flex items-center gap-1.5 text-xs text-muted">
          <Link href="/products" className="hover:text-primary">
            Shop
          </Link>
          <span>/</span>
          <Link
            href={`/products?category=${encodeURIComponent(product.category)}`}
            className="hover:text-primary"
          >
            {product.category}
          </Link>
        </nav>
      </div>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-8 lg:grid-cols-2 lg:gap-12 lg:py-12">
        {/* Illustrated panel */}
        <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl bg-accent lg:aspect-square">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 30% 25%, color-mix(in srgb, var(--primary) 18%, transparent), transparent 60%)",
            }}
          />
          <Image
            src={categoryArt[product.category]}
            alt={product.name}
            width={320}
            height={320}
            className="relative w-40 drop-shadow-xl sm:w-56"
            priority
          />
          {product.rx && (
            <span className="absolute left-5 top-5 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
              Prescription only
            </span>
          )}
        </div>

        {/* Detail column */}
        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold text-primary">{product.category}</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 text-2xl font-bold text-foreground">${product.price.toFixed(2)}</p>
          <p className="mt-4 leading-relaxed text-muted">{product.description}</p>

          <button
            disabled={product.rx}
            className="mt-7 hidden w-full rounded-full bg-primary px-8 py-3.5 font-semibold text-white shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5 hover:bg-primary-dark disabled:cursor-not-allowed disabled:bg-border disabled:text-muted disabled:shadow-none lg:block"
          >
            {product.rx ? "Requires a prescription" : "Add to cart"}
          </button>

          <ul className="mt-7 space-y-3 border-t border-border pt-6 lg:mt-6">
            {assurances.map((a) => (
              <li key={a.text} className="flex items-center gap-3 text-sm text-muted">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent text-primary">
                  <a.icon size={16} />
                </span>
                {a.text}
              </li>
            ))}
          </ul>

          <p className="mt-5 text-xs text-muted">
            Demo site — checkout is not functional and no medication is dispensed.
          </p>
        </div>
      </section>

      {/* Related */}
      <section className="mx-auto max-w-6xl px-6 pb-14 sm:pb-20">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            You might also need
          </h2>
          <Link href="/products" className="shrink-0 text-sm font-semibold text-primary hover:underline">
            View all
          </Link>
        </div>
        <div className="no-scrollbar -mx-6 mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0">
          {related.map((p) => (
            <div key={p.slug} className="w-[75vw] shrink-0 snap-start sm:w-auto">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>

      {/* Sticky mobile buy bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-3 backdrop-blur lg:hidden">
        <div className="flex items-center gap-4">
          <div className="shrink-0">
            <p className="text-[11px] text-muted">Price</p>
            <p className="font-bold leading-tight text-foreground">${product.price.toFixed(2)}</p>
          </div>
          <button
            disabled={product.rx}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white disabled:bg-border disabled:text-muted"
          >
            {product.rx ? "Prescription required" : "Add to cart"}
            {!product.rx && <ArrowRight size={15} />}
          </button>
        </div>
      </div>
    </div>
  );
}

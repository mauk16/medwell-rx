import Link from "next/link";
import { categories, products } from "@/data/products";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; q?: string }>;
}) {
  const { category, q } = await searchParams;
  const needle = q?.trim().toLowerCase();
  const list = products.filter(
    (p) =>
      (!category || p.category === category) &&
      (!needle ||
        p.name.toLowerCase().includes(needle) ||
        p.category.toLowerCase().includes(needle) ||
        p.blurb.toLowerCase().includes(needle)),
  );

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-bold text-foreground">Shop</h1>

      <div className="mt-6 flex flex-wrap gap-2">
        <Link
          href="/products"
          className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
            !category
              ? "border-primary bg-primary text-white"
              : "border-border text-foreground hover:border-primary hover:text-primary"
          }`}
        >
          All
        </Link>
        {categories.map((c) => (
          <Link
            key={c}
            href={`/products?category=${encodeURIComponent(c)}`}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              category === c
                ? "border-primary bg-primary text-white"
                : "border-border text-foreground hover:border-primary hover:text-primary"
            }`}
          >
            {c}
          </Link>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <Link
            key={p.slug}
            href={`/products/${p.slug}`}
            className="rounded-2xl border border-border bg-background p-5 transition-shadow hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <p className="text-xs font-medium text-primary">{p.category}</p>
              {p.rx && (
                <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-semibold text-primary">
                  Rx
                </span>
              )}
            </div>
            <h3 className="mt-1 font-semibold text-foreground">{p.name}</h3>
            <p className="mt-1 text-sm text-muted">{p.blurb}</p>
            <p className="mt-3 font-bold text-foreground">${p.price.toFixed(2)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

import Link from "next/link";
import { Search } from "lucide-react";
import { categories, products } from "@/data/products";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";

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

  const chip = (active: boolean) =>
    `shrink-0 snap-start rounded-full px-4 py-2 text-sm font-medium transition-colors ${
      active
        ? "bg-white text-primary"
        : "bg-white/10 text-white/80 ring-1 ring-white/20 hover:bg-white/20"
    }`;

  return (
    <div>
      <PageHero
        eyebrow="1,400+ items in stock"
        title="Shop the pharmacy"
        subtitle="Everyday essentials, vitamins, and prescription medicines — reviewed by a licensed pharmacist before every dispatch."
      >
        <form
          action="/products"
          className="mt-7 flex max-w-lg items-center gap-2 rounded-full bg-white p-1.5 shadow-2xl shadow-black/20"
        >
          <Search size={18} className="ml-3 shrink-0 text-muted" />
          <input
            name="q"
            type="search"
            defaultValue={q ?? ""}
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

        <div className="no-scrollbar -mx-6 mt-5 flex snap-x gap-2 overflow-x-auto px-6 sm:mx-0 sm:flex-wrap sm:px-0">
          <Link href="/products" className={chip(!category)}>
            All
          </Link>
          {categories.map((c) => (
            <Link
              key={c}
              href={`/products?category=${encodeURIComponent(c)}`}
              className={chip(category === c)}
            >
              {c}
            </Link>
          ))}
        </div>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-sm font-semibold text-muted">
            {list.length} {list.length === 1 ? "product" : "products"}
            {category && <span className="text-foreground"> in {category}</span>}
            {needle && <span className="text-foreground"> matching “{q}”</span>}
          </h2>
          {(category || needle) && (
            <Link href="/products" className="shrink-0 text-sm font-semibold text-primary hover:underline">
              Clear
            </Link>
          )}
        </div>

        {list.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-dashed border-border bg-accent/40 px-6 py-14 text-center">
            <p className="font-semibold text-foreground">Nothing matched that search.</p>
            <p className="mt-1 text-sm text-muted">
              Try a broader term, or browse everything we stock.
            </p>
            <Link
              href="/products"
              className="mt-5 inline-block rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              View all products
            </Link>
          </div>
        ) : (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {list.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

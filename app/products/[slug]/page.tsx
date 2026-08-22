import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";

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

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <Link href="/products" className="text-sm font-medium text-primary hover:underline">
        ← Back to Shop
      </Link>

      <div className="mt-6 flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-primary">{product.category}</p>
          <h1 className="mt-1 text-3xl font-bold text-foreground">{product.name}</h1>
        </div>
        {product.rx && (
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary">
            Prescription Required
          </span>
        )}
      </div>

      <p className="mt-4 text-lg font-bold text-foreground">${product.price.toFixed(2)}</p>
      <p className="mt-4 text-muted">{product.description}</p>

      <button
        disabled={product.rx}
        className="mt-8 rounded-full bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:bg-border disabled:text-muted"
      >
        {product.rx ? "Requires Prescription" : "Add to Cart"}
      </button>
      <p className="mt-2 text-xs text-muted">Demo site — this button is not functional.</p>
    </div>
  );
}

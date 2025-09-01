import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import AddToCart from "@/components/ProductCard"; // reuse button from ProductCard

export async function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-2xl border bg-white p-6">
        {/* Placeholder image block */}
        <div className="flex h-56 w-full items-center justify-center rounded-xl bg-gray-100 text-gray-400">
          {product.title}
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">{product.title}</h1>
        <p className="text-sm text-gray-500">{product.category}</p>
        <p className="text-lg font-medium">₹ {product.price.toLocaleString()}</p>
        <p className="text-gray-700">{product.description}</p>

        <AddToCart product={product} compact />

        <div>
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to products
          </Link>
        </div>
      </div>
    </div>
  );
}

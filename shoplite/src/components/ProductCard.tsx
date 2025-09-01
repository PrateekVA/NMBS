"use client";

import { Product } from "@/lib/products";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function ProductCard({
  product,
  compact = false,
}: {
  product: Product;
  compact?: boolean;
}) {
  const { add } = useCart();

  const button = (
    <button
      onClick={() => add(product)}
      className="rounded-xl bg-black px-4 py-2 text-white"
    >
      Add to cart
    </button>
  );

  if (compact) return button;

  return (
    <div className="flex flex-col justify-between rounded-2xl border bg-white p-4">
      <Link href={`/products/${product.slug}`}>
        <div className="flex h-36 items-center justify-center rounded-xl bg-gray-100 text-gray-400">
          {product.title}
        </div>
        <div className="mt-3 space-y-1">
          <div className="font-medium">{product.title}</div>
          <div className="text-sm text-gray-500">{product.category}</div>
          <div className="text-lg font-semibold">₹ {product.price.toLocaleString()}</div>
        </div>
      </Link>

      <div className="mt-3">{button}</div>
    </div>
  );
}

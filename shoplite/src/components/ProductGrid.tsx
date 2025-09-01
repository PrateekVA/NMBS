"use client";

import { Product } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function ProductGrid({ items }: { items: Product[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {items.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

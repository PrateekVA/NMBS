"use client";

import ProductGrid from "@/components/ProductGrid";
import { products } from "@/lib/products";
import { useMemo, useState } from "react";

export default function HomePage() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return products;
    return products.filter(
      p =>
        p.title.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term)
    );
  }, [q]);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">ShopLite</h1>
      <div className="flex items-center gap-2">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search products…"
          className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
        />
      </div>
      <ProductGrid items={filtered} />
    </div>
  );
}

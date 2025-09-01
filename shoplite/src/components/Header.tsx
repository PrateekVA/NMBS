"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link href="/" className="text-lg font-semibold">
          ShopLite
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/cart" className="rounded-full border px-3 py-1">
            Cart ({count})
          </Link>
        </nav>
      </div>
    </header>
  );
}

"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { useState } from "react";

export default function CartPage() {
  const { items, increment, decrement, remove, total } = useCart();
  const [loading, setLoading] = useState(false);
  const hasItems = items.length > 0;

  async function checkout() {
    try {
      setLoading(true);
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();
      alert(data.message);
    } catch (e) {
      alert("Checkout failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Your Cart</h1>

      {!hasItems && (
        <div className="rounded-xl border bg-white p-6">
          <p>Your cart is empty.</p>
          <Link href="/" className="text-blue-600 hover:underline">
            Browse products
          </Link>
        </div>
      )}

      {hasItems && (
        <>
          <div className="space-y-3">
            {items.map((i) => (
              <div
                key={i.id}
                className="flex items-center justify-between rounded-xl border bg-white p-4"
              >
                <div>
                  <div className="font-medium">{i.title}</div>
                  <div className="text-sm text-gray-500">₹ {i.price}</div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decrement(i.id)}
                    className="rounded-full border px-3 py-1"
                    aria-label="Decrease"
                  >
                    −
                  </button>
                  <span className="w-8 text-center">{i.qty}</span>
                  <button
                    onClick={() => increment(i.id)}
                    className="rounded-full border px-3 py-1"
                    aria-label="Increase"
                  >
                    +
                  </button>

                  <button
                    onClick={() => remove(i.id)}
                    className="ml-3 rounded-lg border px-3 py-1 text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between rounded-xl border bg-white p-4">
            <div className="text-lg font-medium">Total: ₹ {total.toLocaleString()}</div>
            <button
              disabled={loading}
              onClick={checkout}
              className="rounded-xl bg-black px-4 py-2 text-white disabled:opacity-50"
            >
              {loading ? "Processing…" : "Checkout"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

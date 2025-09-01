"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Product } from "@/lib/products";

type CartItem = Product & { qty: number };

type CartState = {
  items: CartItem[];
  count: number;
  total: number;
  add: (p: Product) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  remove: (id: number) => void;
};

const CartCtx = createContext<CartState | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem("cart");
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(items));
    } catch {}
  }, [items]);

  const add = (p: Product) => {
    setItems((prev) => {
      const idx = prev.findIndex((x) => x.id === p.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + 1 };
        return copy;
      }
      return [...prev, { ...p, qty: 1 }];
    });
  };

  const increment = (id: number) =>
    setItems((prev) =>
      prev.map((x) => (x.id === id ? { ...x, qty: x.qty + 1 } : x))
    );

  const decrement = (id: number) =>
    setItems((prev) =>
      prev
        .map((x) => (x.id === id ? { ...x, qty: Math.max(1, x.qty - 1) } : x))
    );

  const remove = (id: number) =>
    setItems((prev) => prev.filter((x) => x.id !== id));

  const { count, total } = useMemo(() => {
    const count = items.reduce((s, x) => s + x.qty, 0);
    const total = items.reduce((s, x) => s + x.price * x.qty, 0);
    return { count, total };
  }, [items]);

  const value: CartState = { items, count, total, add, increment, decrement, remove };

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
}

export function useCart() {
  const ctx = useContext(CartCtx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

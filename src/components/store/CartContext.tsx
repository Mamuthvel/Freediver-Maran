"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { getProduct } from "@/lib/store";

export type CartLine = { slug: string; quantity: number };

type CartContextValue = {
  lines: CartLine[];
  add: (slug: string, quantity?: number) => void;
  setQuantity: (slug: string, quantity: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
  count: number;
  subtotalInr: number;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "sc-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw));
    } catch {
      // ignore corrupt/unavailable storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // ignore unavailable storage
    }
  }, [lines, hydrated]);

  const add: CartContextValue["add"] = (slug, quantity = 1) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.slug === slug);
      if (existing) return prev.map((l) => (l.slug === slug ? { ...l, quantity: l.quantity + quantity } : l));
      return [...prev, { slug, quantity }];
    });
  };

  const setQuantity: CartContextValue["setQuantity"] = (slug, quantity) => {
    setLines((prev) =>
      quantity <= 0 ? prev.filter((l) => l.slug !== slug) : prev.map((l) => (l.slug === slug ? { ...l, quantity } : l))
    );
  };

  const remove: CartContextValue["remove"] = (slug) => setLines((prev) => prev.filter((l) => l.slug !== slug));
  const clear = () => setLines([]);

  const count = lines.reduce((sum, l) => sum + l.quantity, 0);
  const subtotalInr = lines.reduce((sum, l) => sum + (getProduct(l.slug)?.priceInr ?? 0) * l.quantity, 0);

  return (
    <CartContext.Provider value={{ lines, add, setQuantity, remove, clear, count, subtotalInr }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}

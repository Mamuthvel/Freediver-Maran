"use client";
import Link from "next/link";
import { useCart } from "./CartContext";

export function CartBadgeLink() {
  const { count } = useCart();
  return (
    <Link
      href="/store/cart"
      className="flex items-center gap-2 rounded-full border border-foam/15 px-4 py-2 text-sm text-foam/80 transition hover:border-lagoon/40 hover:text-foam"
    >
      Cart
      <span className="rounded-full bg-coral px-2 py-0.5 text-xs font-semibold text-ink">{count}</span>
    </Link>
  );
}

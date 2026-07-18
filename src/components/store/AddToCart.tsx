"use client";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "./CartContext";

export function AddToCart({ slug, inStock }: { slug: string; inStock: boolean }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  if (!inStock) {
    return <p className="mt-4 rounded-full border border-foam/15 px-8 py-3 text-center text-sm text-foam/50">Out of stock</p>;
  }

  return (
    <div className="mt-4 grid gap-3">
      <button
        onClick={() => {
          add(slug, 1);
          setAdded(true);
        }}
        className="block rounded-full bg-coral px-8 py-3 text-center font-semibold text-ink transition hover:brightness-110"
      >
        Add to cart
      </button>
      {added && (
        <p className="text-center text-sm text-lagoon">
          Added to cart.{" "}
          <Link href="/store/cart" className="underline underline-offset-4 hover:text-shallows">
            View cart →
          </Link>
        </p>
      )}
    </div>
  );
}

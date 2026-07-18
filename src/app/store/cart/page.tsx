"use client";
import Link from "next/link";
import { useCart } from "@/components/store/CartContext";
import { getProduct } from "@/lib/store";
import { SectionHeading } from "@/components/SectionHeading";

export default function CartPage() {
  const { lines, setQuantity, remove, subtotalInr } = useCart();

  if (lines.length === 0) {
    return (
      <div className="bg-abyss px-6 pb-24 pt-10">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading depth="−1 M" eyebrow="Cart" title="Your cart is empty" />
          <Link href="/store" className="mt-4 inline-block rounded-full bg-coral px-8 py-3 font-semibold text-ink transition hover:brightness-110">
            Browse the store →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-abyss px-6 pb-24 pt-10">
      <div className="mx-auto max-w-3xl">
        <SectionHeading depth="−1 M" eyebrow="Cart" title="Your cart" />
        <div className="grid gap-4">
          {lines.map((line) => {
            const product = getProduct(line.slug);
            if (!product) return null;
            return (
              <div key={line.slug} className="flex flex-wrap items-center gap-4 rounded-2xl border border-foam/10 bg-foam/[0.03] p-5">
                <div className="min-w-0 flex-1">
                  <Link href={`/store/${product.slug}`} className="font-display text-lg font-semibold text-foam hover:text-shallows">
                    {product.name}
                  </Link>
                  <p className="mt-1 text-sm text-foam/60">₹{product.priceInr.toLocaleString("en-IN")} each</p>
                </div>
                <div className="flex items-center gap-2">
                  <label htmlFor={`qty-${line.slug}`} className="sr-only">Quantity</label>
                  <input
                    id={`qty-${line.slug}`}
                    type="number"
                    min={1}
                    value={line.quantity}
                    onChange={(e) => setQuantity(line.slug, Math.max(1, Number(e.target.value) || 1))}
                    className="w-16 rounded-lg border border-foam/15 bg-foam/5 px-3 py-2 text-center text-foam focus:outline-none focus:ring-2 focus:ring-lagoon"
                  />
                  <button onClick={() => remove(line.slug)} className="text-sm text-coral hover:text-shallows">
                    Remove
                  </button>
                </div>
                <p className="w-24 text-right font-gauge text-lagoon">
                  ₹{(product.priceInr * line.quantity).toLocaleString("en-IN")}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-foam/10 pt-6">
          <p className="text-lg text-foam/75">Subtotal</p>
          <p className="font-gauge text-2xl text-lagoon">₹{subtotalInr.toLocaleString("en-IN")}</p>
        </div>

        <Link
          href="/store/checkout"
          className="mt-8 block rounded-full bg-coral px-8 py-3.5 text-center font-semibold text-ink transition hover:brightness-110"
        >
          Proceed to checkout
        </Link>
      </div>
    </div>
  );
}

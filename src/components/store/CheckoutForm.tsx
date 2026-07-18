"use client";
import { useActionState, useEffect } from "react";
import Link from "next/link";
import { submitOrder } from "@/app/actions";
import { useCart } from "./CartContext";
import { getProduct } from "@/lib/store";
import { site } from "@/lib/site";

export function CheckoutForm() {
  const { lines, subtotalInr, clear } = useCart();
  const [state, action, pending] = useActionState(submitOrder, null);

  useEffect(() => {
    if (state?.ok) clear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state?.ok]);

  if (state?.ok) {
    return (
      <div className="rounded-2xl border border-lagoon/30 bg-lagoon/10 p-8 text-center">
        <p className="font-display text-2xl text-foam">Order received.</p>
        <p className="mt-2 text-foam/70">
          We'll confirm payment and shipping over WhatsApp or email within one business day. Questions in the meantime? Message us on{" "}
          <a href={site.whatsapp} className="text-lagoon underline underline-offset-4 hover:text-shallows">WhatsApp</a>.
        </p>
        <Link href="/store" className="mt-6 inline-block rounded-full bg-coral px-8 py-3 font-semibold text-ink transition hover:brightness-110">
          Continue shopping →
        </Link>
      </div>
    );
  }

  if (lines.length === 0) {
    return (
      <div className="text-center">
        <p className="text-foam/70">Your cart is empty.</p>
        <Link href="/store" className="mt-4 inline-block rounded-full bg-coral px-8 py-3 font-semibold text-ink transition hover:brightness-110">
          Browse the store →
        </Link>
      </div>
    );
  }

  const itemsJson = JSON.stringify(
    lines.map((l) => ({ slug: l.slug, name: getProduct(l.slug)?.name, quantity: l.quantity, priceInr: getProduct(l.slug)?.priceInr }))
  );
  const field = "w-full rounded-xl border border-foam/15 bg-foam/5 px-4 py-3 text-foam placeholder:text-foam/35 focus:outline-none focus:ring-2 focus:ring-lagoon";

  return (
    <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
      <form action={action} className="grid gap-4">
        <input type="hidden" name="items" value={itemsJson} />
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="checkout-name" className="sr-only">Name</label>
            <input id="checkout-name" name="name" required placeholder="Your name" className={field} />
          </div>
          <div>
            <label htmlFor="checkout-email" className="sr-only">Email</label>
            <input id="checkout-email" name="email" type="email" required placeholder="Email" className={field} />
          </div>
        </div>
        <div>
          <label htmlFor="checkout-phone" className="sr-only">Phone</label>
          <input id="checkout-phone" name="phone" required placeholder="Phone (with country code)" className={field} />
        </div>
        <div>
          <label htmlFor="checkout-address" className="sr-only">Shipping address</label>
          <textarea id="checkout-address" name="address" required rows={4} placeholder="Shipping address" className={field} />
        </div>
        <div>
          <label htmlFor="checkout-notes" className="sr-only">Order notes</label>
          <textarea id="checkout-notes" name="notes" rows={2} placeholder="Order notes (sizes, colours, anything else) — optional" className={field} />
        </div>
        {state?.error && <p className="text-sm text-coral">{state.error}</p>}
        <button
          disabled={pending}
          className="rounded-full bg-coral py-3.5 font-semibold text-ink transition hover:brightness-110 disabled:opacity-60"
        >
          {pending ? "Placing order…" : "Place order"}
        </button>
        <p className="text-center text-xs text-foam/50">
          No payment is taken now — we confirm payment and shipping with you directly after you submit.
        </p>
      </form>

      <div className="h-fit rounded-2xl border border-foam/10 bg-foam/[0.03] p-6">
        <p className="font-gauge text-xs uppercase tracking-[0.25em] text-shallows/60">Order summary</p>
        <ul className="mt-4 space-y-3 text-sm text-foam/75">
          {lines.map((l) => {
            const product = getProduct(l.slug);
            if (!product) return null;
            return (
              <li key={l.slug} className="flex justify-between gap-3">
                <span>{product.name} × {l.quantity}</span>
                <span>₹{(product.priceInr * l.quantity).toLocaleString("en-IN")}</span>
              </li>
            );
          })}
        </ul>
        <div className="mt-4 flex justify-between border-t border-foam/10 pt-4 font-gauge text-lagoon">
          <span>Subtotal</span>
          <span>₹{subtotalInr.toLocaleString("en-IN")}</span>
        </div>
      </div>
    </div>
  );
}

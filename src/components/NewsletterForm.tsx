"use client";
import { useActionState } from "react";
import { subscribe } from "@/app/actions";

export function NewsletterForm() {
  const [state, action, pending] = useActionState(subscribe, null);
  return (
    <form action={action} className="mt-4 flex gap-2">
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        required
        placeholder="you@example.com"
        className="w-full rounded-full border border-foam/15 bg-foam/5 px-4 py-2.5 text-sm text-foam placeholder:text-foam/35 focus:outline-none focus:ring-2 focus:ring-lagoon"
      />
      <button
        disabled={pending}
        className="shrink-0 rounded-full bg-lagoon px-4 py-2.5 text-sm font-semibold text-abyss transition hover:brightness-110 disabled:opacity-60"
      >
        {state?.ok ? "Subscribed" : pending ? "…" : "Join"}
      </button>
    </form>
  );
}

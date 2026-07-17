"use client";
import { useActionState } from "react";
import { sendContactMessage } from "@/app/actions";

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContactMessage, null);
  if (state?.ok) {
    return (
      <div className="rounded-2xl border border-lagoon/30 bg-lagoon/10 p-8 text-center">
        <p className="font-display text-2xl text-foam">Message received.</p>
        <p className="mt-2 text-foam/70">We reply within one business day.</p>
      </div>
    );
  }
  const field = "w-full rounded-xl border border-foam/15 bg-foam/5 px-4 py-3 text-foam placeholder:text-foam/35 focus:outline-none focus:ring-2 focus:ring-lagoon";
  return (
    <form action={action} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="sr-only">Name</label>
          <input id="contact-name" name="name" required placeholder="Your name" className={field} />
        </div>
        <div>
          <label htmlFor="contact-email" className="sr-only">Email</label>
          <input id="contact-email" name="email" type="email" required placeholder="Email" className={field} />
        </div>
      </div>
      <div>
        <label htmlFor="contact-message" className="sr-only">Message</label>
        <textarea id="contact-message" name="message" required rows={5} placeholder="What can we help with?" className={field} />
      </div>
      {state?.error && <p className="text-sm text-coral">{state.error}</p>}
      <button
        disabled={pending}
        className="rounded-full bg-coral py-3.5 font-semibold text-ink transition hover:brightness-110 disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

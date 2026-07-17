"use client";
import { useActionState } from "react";
import { requestBooking } from "@/app/actions";
import { courses } from "@/lib/courses";

export function LeadForm({ defaultCourse }: { defaultCourse?: string }) {
  const [state, action, pending] = useActionState(requestBooking, null);
  if (state?.ok) {
    return (
      <div className="rounded-2xl border border-lagoon/30 bg-lagoon/10 p-8 text-center">
        <p className="font-display text-2xl text-foam">Request received.</p>
        <p className="mt-2 text-foam/70">We reply within one business day with available dates. Check {""}
          <span className="text-lagoon">your inbox</span>.</p>
      </div>
    );
  }
  const field = "w-full rounded-xl border border-foam/15 bg-foam/5 px-4 py-3 text-foam placeholder:text-foam/35 focus:outline-none focus:ring-2 focus:ring-lagoon";
  return (
    <form action={action} className="grid gap-4 sm:grid-cols-2">
      <div>
        <label htmlFor="lead-name" className="sr-only">Name</label>
        <input id="lead-name" name="name" required placeholder="Your name" className={field} />
      </div>
      <div>
        <label htmlFor="lead-email" className="sr-only">Email</label>
        <input id="lead-email" name="email" type="email" required placeholder="Email" className={field} />
      </div>
      <div>
        <label htmlFor="lead-course" className="sr-only">Course</label>
        <select id="lead-course" name="course" defaultValue={defaultCourse ?? "padi-freediver"} className={field}>
          {courses.map((c) => (
            <option key={c.slug} value={c.slug} className="bg-abyss">{c.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="lead-month" className="sr-only">Preferred month</label>
        <input id="lead-month" name="month" type="month" className={field} aria-label="Preferred month" />
      </div>
      <button
        disabled={pending}
        className="sm:col-span-2 rounded-full bg-coral py-3.5 font-semibold text-ink transition hover:brightness-110 disabled:opacity-60"
      >
        {pending ? "Sending…" : "Request my spot"}
      </button>
      <p className="sm:col-span-2 text-center font-gauge text-[11px] tracking-[0.2em] text-foam/40">
        NO PAYMENT NOW · WE CONFIRM DATES FIRST
      </p>
    </form>
  );
}

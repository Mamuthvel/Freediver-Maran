"use client";
import { useState } from "react";
import type { Faq } from "@/lib/courses";

export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-foam/10 rounded-2xl border border-foam/10 bg-foam/[0.03] backdrop-blur">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-lagoon"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-medium text-foam">{f.q}</span>
              <span aria-hidden className="font-gauge text-lagoon transition-transform duration-300" style={{ transform: isOpen ? "rotate(45deg)" : "none" }}>+</span>
            </button>
            <div
              className="grid overflow-hidden px-6 transition-all duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", paddingBottom: isOpen ? 20 : 0 }}
            >
              <p className="min-h-0 overflow-hidden leading-relaxed text-foam/70">{f.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

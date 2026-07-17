import type { Metadata } from "next";
import Link from "next/link";
import { courses } from "@/lib/courses";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { DepthMarker } from "@/components/DepthMarker";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "How We Train — Safety Culture & Coaching Philosophy",
  description:
    "One instructor per four students, a buddy on every breath-hold, and honest depth progression. How Sea Critter actually trains freedivers, level by level.",
  alternates: { canonical: "/training" },
};

const pillars = [
  ["Safety as culture", "One instructor per four students, a buddy on every breath-hold, oxygen on every boat. Eight years, zero incidents."],
  ["Actual coaching", "Small batches mean your equalization, your finning, your nerves get individual attention — not a queue on a line."],
  ["Real ocean, year-round", "Home reefs in Pondicherry plus seasonal camps in Goa, the Andamans, and the Maldives."],
  ["Certification that travels", "PADI ratings recognised at every freediving centre on Earth, from Dahab to Dominica."],
];

export default function TrainingPage() {
  return (
    <div className="bg-abyss">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Training", path: "/training" }])} />

      <header className="relative overflow-hidden bg-descent px-6 pb-16 pt-36">
        <div className="rays" aria-hidden />
        <div className="relative mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="font-gauge text-xs tracking-[0.2em] text-foam/50">
            <Link href="/" className="hover:text-foam">HOME</Link> / TRAINING
          </nav>
          <DepthMarker depth="−14 M" label="Training" />
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-foam md:text-6xl">
            Why students choose Sea Critter
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foam/75">
            Depth is a byproduct of calm. Everything below is how we actually build that calm, session by session.
          </p>
        </div>
      </header>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-foam/10 p-6">
                  <p className="font-gauge text-lagoon">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 font-display text-lg font-semibold text-foam">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foam/65">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-trench px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal><SectionHeading depth="−20 M" eyebrow="Safety" title="Safety is a system, not a slogan" /></Reveal>
          <Reveal>
            <p className="leading-relaxed text-foam/75">
              Every level of the PADI ladder adds a layer, not a leap: pool skills before open water, free immersion before constant weight,
              Frenzel before mouthfill. Deep sessions run on a counter-weighted line with a safety diver meeting you in the water column on
              every ascent, oxygen on every boat, and hard conservative daily limits that never bend for a schedule. Here's how it scales by
              course:
            </p>
          </Reveal>
          <div className="mt-8 space-y-4">
            {courses.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.06}>
                <Link href={`/courses/${c.slug}`} className="group flex flex-col gap-2 rounded-2xl border border-foam/10 p-6 transition hover:border-lagoon/40 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-gauge text-xs tracking-[0.2em] text-shallows/70">LEVEL {c.level} · {c.maxDepth}</p>
                    <p className="mt-1 font-display text-lg font-semibold text-foam group-hover:text-shallows">{c.shortName}</p>
                  </div>
                  <p className="max-w-md text-sm text-foam/65">{c.safety.split(".")[0]}.</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <SectionHeading depth="−24 M" eyebrow="Pathway" title="The certification ladder" lead="Basic to Master — one level unlocks the next." />
            <div className="flex flex-wrap items-center justify-center gap-3">
              {courses.map((c, i) => (
                <span key={c.slug} className="flex items-center gap-3">
                  <Link href={`/courses/${c.slug}`} className="rounded-full border border-foam/15 px-5 py-2.5 text-sm text-foam/80 transition hover:border-lagoon/50 hover:text-foam">
                    {c.shortName}
                  </Link>
                  {i < courses.length - 1 && <span aria-hidden className="text-lagoon">→</span>}
                </span>
              ))}
            </div>
            <Link href="/courses" className="mt-8 inline-block font-gauge text-sm tracking-[0.15em] text-coral hover:text-shallows">
              COMPARE ALL COURSES →
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

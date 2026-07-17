import type { Metadata } from "next";
import Link from "next/link";
import { trips } from "@/lib/trips";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { DepthMarker } from "@/components/DepthMarker";
import { SectionHeading } from "@/components/SectionHeading";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Trips & Expeditions — Pondicherry, Andaman & Maldives",
  description:
    "Beyond certification: weekend immersions in Pondicherry, depth camps in the Andamans, and annual expedition weeks in the Maldives.",
  alternates: { canonical: "/trips" },
};

export default function TripsPage() {
  return (
    <div className="bg-abyss">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Trips & Expeditions", path: "/trips" }])} />

      <header className="relative overflow-hidden bg-descent px-6 pb-16 pt-36">
        <div className="rays" aria-hidden />
        <div className="relative mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="font-gauge text-xs tracking-[0.2em] text-foam/50">
            <Link href="/" className="hover:text-foam">HOME</Link> / TRIPS & EXPEDITIONS
          </nav>
          <DepthMarker depth="−20 M" label="Trips & Expeditions" />
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-foam md:text-6xl">
            Beyond the certification card
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foam/75">
            Weekend immersions at home, focused depth camps in the Andamans, and the annual Maldives expedition — for divers who want more
            water time than a single course gives.
          </p>
        </div>
      </header>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl space-y-16">
          {trips.map((t, i) => (
            <Reveal key={t.slug} delay={i * 0.05}>
              <article className="overflow-hidden rounded-3xl border border-foam/10">
                <div className="bg-gradient-to-b from-ocean/40 to-transparent p-8 md:p-10">
                  <div className="flex flex-wrap items-baseline justify-between gap-4">
                    <div>
                      <p className="font-gauge text-sm text-lagoon">{t.depthTag} · {t.locationName.toUpperCase()}</p>
                      <h2 className="mt-2 font-display text-3xl font-semibold text-foam">{t.name}</h2>
                    </div>
                    <Link href={`/locations/${t.locationSlug}`} className="text-sm text-foam/60 underline underline-offset-4 hover:text-foam">
                      About {t.locationName} →
                    </Link>
                  </div>
                  <p className="mt-3 text-foam/70">{t.tagline}</p>
                  <p className="mt-6 max-w-3xl leading-relaxed text-foam/75">{t.description}</p>

                  <dl className="mt-8 grid gap-6 sm:grid-cols-3">
                    {[
                      ["Season", t.season],
                      ["Duration", t.duration],
                      ["Group size", t.groupSize],
                    ].map(([k, v]) => (
                      <div key={k}>
                        <dt className="font-gauge text-xs uppercase tracking-[0.2em] text-shallows/60">{k}</dt>
                        <dd className="mt-1 text-foam/80">{v}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-8 grid gap-8 md:grid-cols-2">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foam">Highlights</h3>
                      <ul className="mt-3 space-y-2 text-sm text-foam/75">
                        {t.highlights.map((h) => <li key={h} className="flex gap-3"><span className="text-lagoon">◆</span>{h}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foam">Included</h3>
                      <ul className="mt-3 space-y-2 text-sm text-foam/75">
                        {t.included.map((h) => <li key={h} className="flex gap-3"><span className="text-lagoon">✓</span>{h}</li>)}
                      </ul>
                    </div>
                  </div>

                  <p className="mt-6 text-sm text-foam/55">Who it's for: {t.forWho}</p>
                </div>
                <div className="border-t border-foam/10 bg-trench/50 p-8 md:p-10">
                  <FaqAccordion faqs={t.faqs} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-descent px-6 py-24">
        <div className="rays opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionHeading depth="−40 M" eyebrow="Next step" title="Ask us which trip fits your level" />
            <Link href="/contact" className="inline-block rounded-full bg-coral px-8 py-4 font-semibold text-abyss transition hover:brightness-110">
              Get in touch
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

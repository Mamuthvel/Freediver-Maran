import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { DepthMarker } from "@/components/DepthMarker";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Sea Critter — Our Story & Instructors",
  description:
    "Sea Critter is a PADI Freediving Training Center founded in 2018, built on one belief: depth is a byproduct of calm, and calm can be taught. Meet the instructors.",
  alternates: { canonical: "/about" },
};

const pillars = [
  ["Safety as culture", "One instructor per four students, a buddy on every breath-hold, oxygen on every boat. Eight years, zero incidents."],
  ["Actual coaching", "Small batches mean your equalization, your finning, your nerves get individual attention — not a queue on a line."],
  ["Real ocean, year-round", "Home reefs in Pondicherry plus seasonal camps in Goa, the Andamans, and the Maldives."],
  ["Certification that travels", "PADI ratings recognised at every freediving centre on Earth, from Dahab to Dominica."],
];

const instructor = {
  name: "Maran",
  role: "Freediving & Scuba Instructor",
  location: "Based in Dubai",
  bio: "5+ years teaching and exploring the underwater world. Leads our Dubai programme, Deep Dive Dubai — for him, diving is a way to reconnect with nature and find calm in silence.",
};

export default function AboutPage() {
  return (
    <div className="bg-abyss">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />

      <header className="relative overflow-hidden bg-descent px-6 pb-16 pt-36">
        <div className="rays" aria-hidden />
        <div className="relative mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="font-gauge text-xs tracking-[0.2em] text-foam/50">
            <Link href="/" className="hover:text-foam">HOME</Link> / ABOUT
          </nav>
          <DepthMarker depth="−2 M" label="About" />
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-foam md:text-6xl">
            A freediving school, not a diving factory.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foam/75">
            Sea Critter has taught {site.stats.studentsCertified.toLocaleString("en-IN")}+ students from {site.stats.countriesRepresented} countries
            since {site.founded} — never more than {site.stats.maxBatchSize} at a time. We are a PADI Freediving Training Center built on one belief:
            depth is a byproduct of calm, and calm can be taught.
          </p>
        </div>
      </header>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              [`${site.stats.studentsCertified.toLocaleString("en-IN")}+`, "students certified"],
              [`${site.stats.countriesRepresented}`, "countries represented"],
              [`${site.stats.yearsExperience}`, "years of experience"],
              [`1:${site.stats.maxBatchSize}`, "max instructor ratio"],
            ].map(([n, label], i) => (
              <Reveal key={label} delay={i * 0.08}>
                <div className="rounded-2xl border border-foam/10 bg-foam/[0.03] p-6">
                  <p className="font-gauge text-4xl text-lagoon">{n}</p>
                  <p className="mt-2 text-sm uppercase tracking-wide text-foam/60">{label}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 max-w-3xl">
            <h2 className="font-display text-2xl font-semibold text-foam">Our story</h2>
            <p className="mt-4 leading-relaxed text-foam/75">
              Sea Critter opened in {site.address.addressLocality} in {site.founded} with a single idea: most freediving accidents come from
              speed, not depth — instructors rushing students toward a number instead of building the breathing and relaxation that makes
              depth safe on its own. {site.stats.yearsExperience} years later that idea is still the entire curriculum. We cap every batch at{" "}
              {site.stats.maxBatchSize} students so nobody's equalization, nerves, or technique goes unwatched, and we have run every open-water
              and deep session with the same conservative safety system since day one.
            </p>
            <p className="mt-4 leading-relaxed text-foam/75">
              Today that means {site.stats.studentsCertified.toLocaleString("en-IN")}+ certified freedivers from {site.stats.countriesRepresented}{" "}
              countries, home training in {site.address.addressLocality}, and seasonal courses and expeditions in Goa, the Andaman Islands, and
              the Maldives — all taught to the same PADI standard, by the same small team.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="how-we-train" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal><SectionHeading depth="−6 M" eyebrow="How we train" title="Why students choose Sea Critter" /></Reveal>
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
        <div className="mx-auto max-w-6xl">
          <Reveal><SectionHeading depth="−8 M" eyebrow="Instructors" title="Meet the people who'll hold your line" /></Reveal>
          <Reveal className="mx-auto max-w-sm">
            <Link href="/deep-dive-dubai" className="block h-full rounded-2xl border border-foam/10 bg-foam/[0.03] p-7 transition hover:border-lagoon/40">
              <div className="flex items-center justify-between">
                <div aria-hidden className="grid h-14 w-14 place-items-center rounded-full bg-ocean font-display text-xl text-shallows">
                  {instructor.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <span className="font-gauge text-xs uppercase tracking-[0.15em] text-lagoon">{instructor.location}</span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-foam">{instructor.name}</h3>
              <p className="mt-1 text-sm text-shallows/70">{instructor.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-foam/65">{instructor.bio}</p>
              <p className="mt-4 text-sm text-coral">Meet Maran & Deep Dive Dubai →</p>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-descent px-6 py-24">
        <div className="rays opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-foam md:text-4xl">Ready to meet us in the water?</h2>
            <Link href="/book" className="mt-8 inline-block rounded-full bg-coral px-8 py-4 font-semibold text-ink transition hover:brightness-110">
              Book your course
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

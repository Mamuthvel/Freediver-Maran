import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import { courses } from "@/lib/courses";
import { locations } from "@/lib/locations";
import { getAllPosts } from "@/lib/blog";
import { testimonials } from "@/lib/testimonials";
import { generalFaqs } from "@/lib/faq";
import { faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { DepthMarker } from "@/components/DepthMarker";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const homeFaqs = generalFaqs.slice(0, 4);
const homeTestimonials = testimonials.slice(0, 3);

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      {/* ── SURFACE · HERO ─────────────────────────────── */}
      <section className="relative flex min-h-svh items-end overflow-hidden bg-descent">
        {/* Swap for a real underwater loop: <video autoPlay muted loop playsInline poster="/hero-poster.jpg"> */}
        <div className="rays" aria-hidden />
        <div aria-hidden className="absolute right-[12%] top-[22%] hidden animate-drift md:block">
          <div className="h-40 w-40 rounded-full border border-shallows/15" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-36">
          <Reveal>
            <DepthMarker depth="0 M" label="Surface" />
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-foam md:text-7xl">
              Learn PADI Freediving in India
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foam/75 md:text-xl">
              Become an internationally certified freediver through safe, professional,
              and unforgettable ocean experiences.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="#book" className="rounded-full bg-coral px-8 py-4 font-semibold text-ink transition hover:brightness-110">
                Book your course
              </Link>
              <Link href="/courses" className="rounded-full border border-foam/25 bg-foam/5 px-8 py-4 font-semibold text-foam backdrop-blur transition hover:bg-foam/10">
                Explore courses
              </Link>
            </div>
            <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 font-gauge text-xs tracking-[0.18em] text-shallows/80">
              {["PADI CERTIFIED", "PROFESSIONAL INSTRUCTORS", "SMALL-BATCH TRAINING", "STUDENTS FROM 34 COUNTRIES"].map((b) => (
                <li key={b} className="flex items-center gap-2"><span className="text-lagoon">✓</span>{b}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── −2 M · ABOUT ───────────────────────────────── */}
      <section className="bg-trench px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              depth="−2 M" eyebrow="About"
              title="A freediving school, not a diving factory."
              lead={`Sea Critter has taught ${site.stats.studentsCertified.toLocaleString("en-IN")}+ students from ${site.stats.countriesRepresented} countries since ${site.founded} — never more than ${site.stats.maxBatchSize} at a time.`}
            />
          </Reveal>
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
          <Reveal className="mt-8">
            <Link href="/about" className="font-gauge text-sm tracking-[0.15em] text-coral hover:text-shallows">
              LEARN MORE ABOUT US & MEET THE INSTRUCTORS →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── −6 M · COURSES ─────────────────────────────── */}
      <section className="bg-abyss px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              depth="−6 M" eyebrow="Courses"
              title="Four levels. One breath."
              lead="Every PADI freediving rating, from your first pool breath-hold to 40-metre descents. Each level unlocks the next."
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {courses.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.07}>
                <Link
                  href={`/courses/${c.slug}`}
                  className="group block rounded-3xl border border-foam/10 bg-gradient-to-b from-foam/[0.05] to-transparent p-8 transition hover:border-lagoon/40"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="font-gauge text-sm tracking-[0.2em] text-shallows/70">LEVEL {c.level}</span>
                    <span className="font-gauge text-2xl text-lagoon">{c.maxDepth}</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-foam group-hover:text-shallows">{c.name}</h3>
                  <p className="mt-2 text-foam/65">{c.tagline}</p>
                  <div className="mt-6 flex items-center justify-between text-sm">
                    <span className="text-foam/50">{c.duration} · ₹{c.priceInr.toLocaleString("en-IN")}</span>
                    <span className="text-coral transition group-hover:translate-x-1">View course →</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── −10 M · TRANSFORMATIONS & REVIEWS ──────────── */}
      <section className="bg-trench px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              depth="−10 M" eyebrow="Student transformations"
              title="They arrived nervous. They left freedivers."
              lead="Rated 4.9★ across 312 Google reviews."
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {homeTestimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure className="flex h-full flex-col rounded-2xl border border-foam/10 bg-foam/[0.03] p-7 backdrop-blur">
                  <p aria-hidden className="text-lagoon">★★★★★</p>
                  <blockquote className="mt-4 flex-1 leading-relaxed text-foam/80">“{t.quote}”</blockquote>
                  <figcaption className="mt-6 font-gauge text-xs tracking-[0.15em] text-foam/50">
                    {t.name.toUpperCase()} · {t.origin.toUpperCase()} · {t.course.toUpperCase()}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <Link href="/reviews" className="font-gauge text-sm tracking-[0.15em] text-coral hover:text-shallows">READ ALL REVIEWS →</Link>
          </Reveal>
        </div>
      </section>

      {/* ── −14 M · WHY SEA CRITTER ────────────────────── */}
      <section className="bg-abyss px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading depth="−14 M" eyebrow="Why us" title="Why students choose Sea Critter" />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              ["Safety as culture", "One instructor per four students, a buddy on every breath-hold, oxygen on every boat. Eight years, zero incidents."],
              ["Actual coaching", "Small batches mean your equalization, your finning, your nerves get individual attention — not a queue on a line."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-foam/10 p-6">
                  <p className="font-gauge text-lagoon">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 font-display text-lg font-semibold text-foam">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foam/65">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <Link href="/training" className="font-gauge text-sm tracking-[0.15em] text-coral hover:text-shallows">SEE HOW WE TRAIN →</Link>
          </Reveal>
        </div>
      </section>

      {/* ── −18 M · LOCATIONS ──────────────────────────── */}
      <section className="bg-trench px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              depth="−18 M" eyebrow="Ocean locations"
              title="Where we take you"
              lead="Four coastlines, one standard of training."
            />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {locations.map((l, i) => (
              <Reveal key={l.slug} delay={i * 0.07}>
                <Link href={`/locations/${l.slug}`} className="group flex h-full flex-col justify-between rounded-2xl border border-foam/10 bg-gradient-to-b from-ocean/40 to-transparent p-6 transition hover:border-lagoon/40">
                  <div>
                    <p className="font-gauge text-sm text-lagoon">{l.depthTag}</p>
                    <h3 className="mt-2 font-display text-xl font-semibold text-foam">{l.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-wide text-foam/50">{l.region}</p>
                  </div>
                  <p className="mt-4 text-sm text-foam/65">{l.tagline}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── −30 M · JOURNAL ────────────────────────────── */}
      <section className="bg-trench px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading depth="−30 M" eyebrow="Journal" title="From the logbook" />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.07}>
                <Link href={`/blog/${p.slug}`} className="group block h-full rounded-2xl border border-foam/10 p-7 transition hover:border-lagoon/40">
                  <p className="font-gauge text-xs tracking-[0.2em] text-lagoon">{p.category.toUpperCase()} · {p.readingTime.toUpperCase()}</p>
                  <h3 className="mt-3 font-display text-xl font-semibold text-foam group-hover:text-shallows">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foam/65">{p.description}</p>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <Link href="/blog" className="font-gauge text-sm tracking-[0.15em] text-coral hover:text-shallows">ALL ARTICLES →</Link>
          </Reveal>
        </div>
      </section>

      {/* ── −36 M · FAQ ────────────────────────────────── */}
      <section className="bg-abyss px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionHeading depth="−36 M" eyebrow="FAQ" title="Questions from the surface" />
          </Reveal>
          <Reveal><FaqAccordion faqs={homeFaqs} /></Reveal>
          <Reveal className="mt-8">
            <Link href="/faq" className="font-gauge text-sm tracking-[0.15em] text-coral hover:text-shallows">SEE FULL FAQ →</Link>
          </Reveal>
        </div>
      </section>

      {/* ── −40 M · BOOKING ────────────────────────────── */}
      <section id="book" className="relative overflow-hidden bg-descent px-6 py-28">
        <div className="rays opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-2xl text-center">
          <Reveal>
            <DepthMarker depth="−40 M" label="Turn point" />
            <h2 className="mt-6 font-display text-4xl font-semibold text-foam md:text-5xl">
              The ocean is one breath away.
            </h2>
            <p className="mt-4 text-lg text-foam/70">
              Tell us which course and when. We'll reply within one business day with dates, prep notes, and everything you need.
            </p>
            <Link href="/book" className="mt-10 inline-block rounded-full bg-coral px-8 py-4 font-semibold text-ink transition hover:brightness-110">
              Book your course
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

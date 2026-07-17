import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { courses, getCourse } from "@/lib/courses";
import { site } from "@/lib/site";
import { breadcrumbSchema, courseSchema, faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { DepthMarker } from "@/components/DepthMarker";
import { SectionHeading } from "@/components/SectionHeading";
import { FaqAccordion } from "@/components/FaqAccordion";
import { LeadForm } from "@/components/LeadForm";
import { Reveal } from "@/components/Reveal";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCourse(slug);
  if (!c) return {};
  const title = `${c.name} Course in India — ₹${c.priceInr.toLocaleString("en-IN")}, ${c.duration}`;
  return {
    title,
    description: `${c.tagline} ${c.duration}, max depth ${c.maxDepth.replace("−", "")}, ₹${c.priceInr.toLocaleString("en-IN")} all-inclusive at Sea Critter, ${site.address.addressLocality}.`,
    alternates: { canonical: `/courses/${c.slug}` },
    openGraph: { title, type: "website" },
  };
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const c = getCourse(slug);
  if (!c) notFound();

  const nextCourse = courses.find((x) => x.level === c.level + 1);

  return (
    <article className="bg-abyss">
      <JsonLd
        data={[
          courseSchema(c),
          faqSchema(c.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Courses", path: "/courses" },
            { name: c.shortName, path: `/courses/${c.slug}` },
          ]),
        ]}
      />

      {/* Hero */}
      <header className="relative overflow-hidden bg-descent px-6 pb-16 pt-36">
        <div className="rays" aria-hidden />
        <div className="relative mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="font-gauge text-xs tracking-[0.2em] text-foam/50">
            <Link href="/" className="hover:text-foam">HOME</Link> / <Link href="/courses" className="hover:text-foam">COURSES</Link> / {c.shortName.toUpperCase()}
          </nav>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-2xl">
              <DepthMarker depth={c.maxDepth} label={`Level ${c.level} · ${c.duration}`} />
              <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-foam md:text-6xl">{c.name}</h1>
              <p className="mt-4 text-lg text-foam/75">{c.tagline}</p>
            </div>
            <div className="rounded-2xl border border-foam/15 bg-foam/5 p-6 backdrop-blur">
              <p className="font-gauge text-3xl text-lagoon">₹{c.priceInr.toLocaleString("en-IN")}</p>
              <p className="mt-1 text-sm text-foam/60">all-inclusive · {c.duration}</p>
              <a href="#book" className="mt-4 block rounded-full bg-coral px-8 py-3 text-center font-semibold text-abyss transition hover:brightness-110">
                Book now
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Overview + who / prerequisites */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-foam">Course overview</h2>
            <p className="mt-4 text-lg leading-relaxed text-foam/75">{c.overview}</p>
            <h3 className="mt-10 font-display text-xl font-semibold text-foam">Who is it for?</h3>
            <ul className="mt-4 space-y-2 text-foam/75">
              {c.whoFor.map((w) => <li key={w} className="flex gap-3"><span className="text-lagoon">◆</span>{w}</li>)}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-foam/10 bg-foam/[0.03] p-7">
              <p className="font-gauge text-xs uppercase tracking-[0.25em] text-shallows/60">Prerequisites</p>
              <ul className="mt-4 space-y-3 text-sm text-foam/75">
                {c.prerequisites.map((p) => <li key={p} className="flex gap-3"><span className="text-lagoon">✓</span>{p}</li>)}
              </ul>
              <p className="mt-6 font-gauge text-xs uppercase tracking-[0.25em] text-shallows/60">Equipment (included)</p>
              <ul className="mt-4 space-y-3 text-sm text-foam/75">
                {c.equipment.map((e) => <li key={e} className="flex gap-3"><span className="text-lagoon">✓</span>{e}</li>)}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Structure */}
      <section className="bg-trench px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal><SectionHeading depth={c.maxDepth} eyebrow="Structure" title="How the course unfolds" /></Reveal>
          <ol className="grid gap-6 md:grid-cols-3">
            {c.structure.map((s, i) => (
              <Reveal key={s.phase} delay={i * 0.08}>
                <li className="h-full rounded-2xl border border-foam/10 p-7">
                  <p className="font-gauge text-lagoon">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 font-display text-lg font-semibold text-foam">{s.phase}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foam/65">{s.detail}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Skills + safety + certification */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-foam">Skills you'll learn</h2>
            <ul className="mt-5 space-y-3 text-foam/75">
              {c.skills.map((s) => <li key={s} className="flex gap-3"><span className="text-lagoon">◆</span>{s}</li>)}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-2xl font-semibold text-foam">Safety, first and always</h2>
            <p className="mt-5 leading-relaxed text-foam/75">{c.safety}</p>
            <h3 className="mt-8 font-display text-xl font-semibold text-foam">Certification</h3>
            <p className="mt-3 leading-relaxed text-foam/75">{c.certification}</p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-trench px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal><SectionHeading depth={c.maxDepth} eyebrow="FAQ" title={`${c.shortName} — common questions`} /></Reveal>
          <Reveal><FaqAccordion faqs={c.faqs} /></Reveal>
        </div>
      </section>

      {/* Book */}
      <section id="book" className="relative overflow-hidden bg-descent px-6 py-24">
        <div className="rays opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-2xl">
          <Reveal>
            <h2 className="text-center font-display text-4xl font-semibold text-foam">Book the {c.shortName} course</h2>
            <p className="mt-3 text-center text-foam/70">
              ₹{c.priceInr.toLocaleString("en-IN")} · {c.duration} · batches of {site.stats.maxBatchSize} max.
            </p>
            <div className="mt-10"><LeadForm defaultCourse={c.slug} /></div>
            {nextCourse && (
              <p className="mt-10 text-center text-sm text-foam/55">
                Already certified at this level?{" "}
                <Link href={`/courses/${nextCourse.slug}`} className="text-lagoon underline underline-offset-4 hover:text-shallows">
                  Continue to {nextCourse.name} →
                </Link>
              </p>
            )}
          </Reveal>
        </div>
      </section>
    </article>
  );
}

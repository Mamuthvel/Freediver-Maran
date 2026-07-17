import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { locations, getLocation } from "@/lib/locations";
import { breadcrumbSchema, faqSchema, placeSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { DepthMarker } from "@/components/DepthMarker";
import { SectionHeading } from "@/components/SectionHeading";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Reveal } from "@/components/Reveal";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const l = getLocation(slug);
  if (!l) return {};
  const title = `Freediving in ${l.name} — Season, Visibility & Travel Guide`;
  return {
    title,
    description: `${l.tagline} Best season: ${l.bestSeason} Visibility: ${l.visibility}`,
    alternates: { canonical: `/locations/${l.slug}` },
    openGraph: { title, type: "website" },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const l = getLocation(slug);
  if (!l) notFound();

  const conditions: [string, string][] = [
    ["Best season", l.bestSeason],
    ["Weather & water", l.weather],
    ["Visibility", l.visibility],
  ];

  return (
    <article className="bg-abyss">
      <JsonLd
        data={[
          placeSchema(l),
          faqSchema(l.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Locations", path: "/locations" },
            { name: l.name, path: `/locations/${l.slug}` },
          ]),
        ]}
      />

      {/* Hero */}
      <header className="relative overflow-hidden bg-descent px-6 pb-16 pt-36">
        <div className="rays" aria-hidden />
        <div className="relative mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="font-gauge text-xs tracking-[0.2em] text-foam/50">
            <Link href="/" className="hover:text-foam">HOME</Link> / <Link href="/locations" className="hover:text-foam">LOCATIONS</Link> / {l.name.toUpperCase()}
          </nav>
          <DepthMarker depth={l.depthTag} label={l.region} />
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-foam md:text-6xl">
            Freediving in {l.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foam/75">{l.tagline}</p>
        </div>
      </header>

      {/* Why dive here + conditions */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-foam">Why dive here</h2>
            <p className="mt-4 text-lg leading-relaxed text-foam/75">{l.whyDive}</p>
            <h3 className="mt-10 font-display text-xl font-semibold text-foam">Marine life</h3>
            <ul className="mt-4 space-y-2 text-foam/75">
              {l.marineLife.map((m) => <li key={m} className="flex gap-3"><span className="text-lagoon">◆</span>{m}</li>)}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-foam/10 bg-foam/[0.03] p-7">
              <p className="font-gauge text-xs uppercase tracking-[0.25em] text-shallows/60">Conditions</p>
              <dl className="mt-4 space-y-5 text-sm">
                {conditions.map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-gauge text-lagoon">{k.toUpperCase()}</dt>
                    <dd className="mt-1 leading-relaxed text-foam/75">{v}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${l.geo.lat},${l.geo.lng}`}
                target="_blank" rel="noopener noreferrer"
                className="mt-6 block rounded-full border border-foam/20 py-2.5 text-center text-sm text-foam/80 transition hover:bg-foam/5"
              >
                Open in Google Maps ↗
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Travel + accommodation + attractions */}
      <section className="bg-trench px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal><SectionHeading depth={l.depthTag} eyebrow="Plan the trip" title="Getting there and staying" /></Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              ["Travel guide", l.travelGuide],
              ["Accommodation", l.accommodation],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-foam/10 p-7">
                  <h3 className="font-display text-lg font-semibold text-foam">{t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foam/70">{d}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.16}>
              <div className="h-full rounded-2xl border border-foam/10 p-7">
                <h3 className="font-display text-lg font-semibold text-foam">Nearby attractions</h3>
                <ul className="mt-3 space-y-2 text-sm text-foam/70">
                  {l.nearbyAttractions.map((a) => <li key={a} className="flex gap-3"><span className="text-lagoon">◆</span>{a}</li>)}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal><SectionHeading depth={l.depthTag} eyebrow="FAQ" title={`${l.name} — common questions`} /></Reveal>
          <Reveal><FaqAccordion faqs={l.faqs} /></Reveal>
          <Reveal className="mt-12 text-center">
            <Link href="/#book" className="inline-block rounded-full bg-coral px-8 py-4 font-semibold text-abyss transition hover:brightness-110">
              Book a course in {l.name}
            </Link>
          </Reveal>
        </div>
      </section>
    </article>
  );
}

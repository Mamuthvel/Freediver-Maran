import type { Metadata } from "next";
import Link from "next/link";
import { locations } from "@/lib/locations";
import { breadcrumbSchema, placeSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Freediving Locations — Pondicherry, Goa, Andaman & Maldives",
  description:
    "Where Sea Critter trains freedivers: home reefs in Pondicherry, Arabian Sea coves in Goa, 30-metre visibility in the Andamans, and expedition weeks in the Maldives.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <div className="bg-abyss px-6 pb-24 pt-36">
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Locations", path: "/locations" }]), ...locations.map(placeSchema)]} />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          depth="−18 M" eyebrow="Locations"
          title="Four coastlines, one standard"
          lead="Course sites and expedition destinations across the Bay of Bengal, the Arabian Sea, the Andaman Sea, and the open Indian Ocean."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {locations.map((l, i) => (
            <Reveal key={l.slug} delay={i * 0.06}>
              <Link href={`/locations/${l.slug}`} className="group block h-full rounded-3xl border border-foam/10 bg-gradient-to-b from-ocean/40 to-transparent p-8 transition hover:border-lagoon/40">
                <p className="font-gauge text-sm text-lagoon">{l.depthTag} · VIS {l.visibility.split(";")[0].toUpperCase()}</p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-foam group-hover:text-shallows">{l.name}</h2>
                <p className="mt-1 text-xs uppercase tracking-wide text-foam/50">{l.region}</p>
                <p className="mt-4 text-foam/65">{l.tagline}</p>
                <p className="mt-6 text-sm text-coral transition group-hover:translate-x-1">Dive guide →</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

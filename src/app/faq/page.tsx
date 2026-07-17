import type { Metadata } from "next";
import Link from "next/link";
import { generalFaqs } from "@/lib/faq";
import { courses } from "@/lib/courses";
import { locations } from "@/lib/locations";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { DepthMarker } from "@/components/DepthMarker";
import { SectionHeading } from "@/components/SectionHeading";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "FAQ — Freediving Courses, Safety & Booking",
  description: "Answers on freediving safety, cost, prerequisites, and what to expect — general questions plus course- and location-specific FAQs.",
  alternates: { canonical: "/faq" },
};

const courseFaqs = courses.flatMap((c) => c.faqs.map((f) => ({ ...f, q: `${c.shortName}: ${f.q}` })));
const locationFaqs = locations.flatMap((l) => l.faqs.map((f) => ({ ...f, q: `${l.name}: ${f.q}` })));

export default function FaqPage() {
  return (
    <div className="bg-abyss px-6 pb-24 pt-36">
      <JsonLd data={[faqSchema(generalFaqs), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }])]} />
      <div className="mx-auto max-w-3xl">
        <DepthMarker depth="−36 M" label="FAQ" />
        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-foam md:text-5xl">
          Questions from the surface
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-foam/70">
          General questions first, then specifics by course and by location. Still stuck? <Link href="/contact" className="text-lagoon underline underline-offset-4 hover:text-shallows">Contact us →</Link>
        </p>

        <Reveal className="mt-12"><FaqAccordion faqs={generalFaqs} /></Reveal>

        <Reveal className="mt-16">
          <SectionHeading depth="−6 M" eyebrow="Courses" title="Course-specific questions" />
        </Reveal>
        <Reveal><FaqAccordion faqs={courseFaqs} /></Reveal>

        <Reveal className="mt-16">
          <SectionHeading depth="−18 M" eyebrow="Locations" title="Location & travel questions" />
        </Reveal>
        <Reveal><FaqAccordion faqs={locationFaqs} /></Reveal>
      </div>
    </div>
  );
}

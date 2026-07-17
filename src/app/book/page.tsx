import type { Metadata } from "next";
import { site } from "@/lib/site";
import { getCourse } from "@/lib/courses";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { DepthMarker } from "@/components/DepthMarker";
import { LeadForm } from "@/components/LeadForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Book a Course",
  description: "Tell us which PADI freediving course and when. Sea Critter replies within one business day with dates, prep notes, and everything you need.",
  alternates: { canonical: "/book" },
};

type Props = { searchParams: Promise<{ course?: string }> };

export default async function BookPage({ searchParams }: Props) {
  const { course } = await searchParams;
  const defaultCourse = getCourse(course ?? "")?.slug;

  return (
    <div className="relative overflow-hidden bg-descent px-6 pb-24 pt-36">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Book a Course", path: "/book" }])} />
      <div className="rays opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-2xl text-center">
        <Reveal>
          <DepthMarker depth="−40 M" label="Turn point" />
          <h1 className="mt-6 font-display text-4xl font-semibold text-foam md:text-5xl">
            The ocean is one breath away.
          </h1>
          <p className="mt-4 text-lg text-foam/70">
            Tell us which course and when. We&rsquo;ll reply within one business day with dates, prep notes, and everything you need.
          </p>
          <div className="mt-10 text-left">
            <LeadForm defaultCourse={defaultCourse} />
          </div>
          <p className="mt-8 text-sm text-foam/50">
            Prefer to talk first? <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="text-lagoon underline underline-offset-4 hover:text-shallows">Message us on WhatsApp</a>.
          </p>
        </Reveal>
      </div>
    </div>
  );
}

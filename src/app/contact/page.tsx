import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { DepthMarker } from "@/components/DepthMarker";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact Sea Critter",
  description: `Reach Sea Critter in ${site.address.addressLocality}: phone, email, WhatsApp, or the contact form. We reply within one business day.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="bg-abyss">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />

      <header className="relative overflow-hidden bg-descent px-6 pb-16 pt-36">
        <div className="rays" aria-hidden />
        <div className="relative mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="font-gauge text-xs tracking-[0.2em] text-foam/50">
            <Link href="/" className="hover:text-foam">HOME</Link> / CONTACT
          </nav>
          <DepthMarker depth="−38 M" label="Contact" />
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight text-foam md:text-6xl">
            Talk to us before you book
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foam/75">
            Questions about a course, dates, or which location fits your trip? We reply within one business day.
          </p>
        </div>
      </header>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <div className="rounded-2xl border border-foam/10 bg-foam/[0.03] p-7">
              <p className="font-gauge text-xs uppercase tracking-[0.25em] text-shallows/60">Reach us directly</p>
              <dl className="mt-5 space-y-5 text-sm">
                <div>
                  <dt className="font-gauge text-lagoon">PHONE</dt>
                  <dd className="mt-1"><a href={`tel:${site.phone}`} className="text-foam/80 hover:text-foam">{site.phone}</a></dd>
                </div>
                <div>
                  <dt className="font-gauge text-lagoon">EMAIL</dt>
                  <dd className="mt-1"><a href={`mailto:${site.email}`} className="text-foam/80 hover:text-foam">{site.email}</a></dd>
                </div>
                <div>
                  <dt className="font-gauge text-lagoon">WHATSAPP</dt>
                  <dd className="mt-1"><a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="text-foam/80 hover:text-foam">Chat with us</a></dd>
                </div>
                <div>
                  <dt className="font-gauge text-lagoon">HOURS</dt>
                  <dd className="mt-1 text-foam/80">{site.hours}</dd>
                </div>
                <div>
                  <dt className="font-gauge text-lagoon">ADDRESS</dt>
                  <dd className="mt-1 leading-relaxed text-foam/80">
                    {site.address.streetAddress}, {site.address.addressLocality}, {site.address.addressRegion} {site.address.postalCode}, India
                  </dd>
                </div>
              </dl>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${site.geo.latitude},${site.geo.longitude}`}
                target="_blank" rel="noopener noreferrer"
                className="mt-6 block rounded-full border border-foam/20 py-2.5 text-center text-sm text-foam/80 transition hover:bg-foam/5"
              >
                Open in Google Maps ↗
              </a>
              <a
                href={site.instagram}
                target="_blank" rel="noopener noreferrer"
                className="mt-3 block rounded-full border border-foam/20 py-2.5 text-center text-sm text-foam/80 transition hover:bg-foam/5"
              >
                Follow on Instagram ↗
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}

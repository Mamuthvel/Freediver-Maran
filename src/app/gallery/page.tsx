import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { galleryImages } from "@/lib/gallery";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { DepthMarker } from "@/components/DepthMarker";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Gallery — Freediving in India",
  description: "Training moments, open water, and the reefs and marine life Sea Critter students train alongside.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <div className="bg-abyss">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Gallery", path: "/gallery" }])} />

      <header className="relative overflow-hidden bg-descent px-6 pb-16 pt-36">
        <div className="rays" aria-hidden />
        <div className="relative mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="font-gauge text-xs tracking-[0.2em] text-foam/50">
            <Link href="/" className="hover:text-foam">HOME</Link> / GALLERY
          </nav>
          <DepthMarker depth="−22 M" label="Gallery" />
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-foam md:text-6xl">
            What it looks like down there
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foam/75">
            Training moments, free-fall, and the reefs students train alongside.
          </p>
        </div>
      </header>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
            {galleryImages.map((img, i) => (
              <Reveal key={img.src} delay={(i % 6) * 0.05} className="break-inside-avoid">
                <figure className="group relative overflow-hidden rounded-2xl border border-foam/10">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={i % 3 === 0 ? 1000 : 600}
                    className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-abyss/90 to-transparent p-4">
                    <span className="font-gauge text-[11px] uppercase tracking-[0.2em] text-lagoon">{img.category}</span>
                    <span className="mt-0.5 block text-sm text-foam">{img.caption}</span>
                    <span className="mt-0.5 block text-xs text-foam/50">Photo: {img.credit} / Unsplash</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center text-xs text-foam/40">
            Sea Critter's own trip and course photography is coming soon — the images above are a preview of the look and feel.
          </p>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import { site } from "@/lib/site";
import { courses } from "@/lib/courses";
import { locations } from "@/lib/locations";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  return (
    <footer className="border-t border-foam/10 bg-abyss">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-display text-xl font-semibold text-foam">
            Sea<span className="text-lagoon">Critter</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foam/60">
            PADI Freediving Training Center, {site.address.addressLocality}, India.
            One breath at a time since {site.founded}.
          </p>
          <p className="mt-4 font-gauge text-xs tracking-[0.2em] text-foam/40">
            {site.phone} · {site.email}
          </p>
        </div>
        <nav aria-label="Learn">
          <p className="font-gauge text-xs uppercase tracking-[0.25em] text-shallows/60">Learn</p>
          <ul className="mt-4 space-y-2 text-sm">
            {courses.map((c) => (
              <li key={c.slug}>
                <Link className="text-foam/70 hover:text-foam" href={`/courses/${c.slug}`}>{c.name}</Link>
              </li>
            ))}
            <li><Link className="text-foam/70 hover:text-foam" href="/about#how-we-train">How we train</Link></li>
          </ul>
        </nav>
        <nav aria-label="Explore">
          <p className="font-gauge text-xs uppercase tracking-[0.25em] text-shallows/60">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {locations.map((l) => (
              <li key={l.slug}>
                <Link className="text-foam/70 hover:text-foam" href={`/locations/${l.slug}`}>Freediving in {l.name}</Link>
              </li>
            ))}
            <li><Link className="text-foam/70 hover:text-foam" href="/deep-dive-dubai">Deep Dive Dubai</Link></li>
            <li><Link className="text-foam/70 hover:text-foam" href="/underwater-journaling">Underwater Journaling</Link></li>
            <li><Link className="text-foam/70 hover:text-foam" href="/gallery">Gallery</Link></li>
            <li><Link className="text-foam/70 hover:text-foam" href="/store">Store</Link></li>
          </ul>
        </nav>
        <nav aria-label="Company">
          <p className="font-gauge text-xs uppercase tracking-[0.25em] text-shallows/60">Company</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="text-foam/70 hover:text-foam" href="/about">About</Link></li>
            <li><Link className="text-foam/70 hover:text-foam" href="/reviews">Reviews</Link></li>
            <li><Link className="text-foam/70 hover:text-foam" href="/faq">FAQ</Link></li>
            <li><Link className="text-foam/70 hover:text-foam" href="/contact">Contact</Link></li>
            <li><Link className="text-foam/70 hover:text-foam" href="/blog">Blog</Link></li>
            <li><a className="text-foam/70 hover:text-foam" href="/rss.xml">RSS feed</a></li>
          </ul>
        </nav>
        <div>
          <p className="font-gauge text-xs uppercase tracking-[0.25em] text-shallows/60">Surface intervals</p>
          <p className="mt-4 text-sm text-foam/60">One email a month: conditions, course dates, and one thing worth reading about the ocean.</p>
          <NewsletterForm />
        </div>
      </div>
      <div className="border-t border-foam/10 px-6 py-6 text-center font-gauge text-[11px] tracking-[0.2em] text-foam/40">
        © {new Date().getFullYear()} {site.legalName.toUpperCase()} · PADI® IS A REGISTERED TRADEMARK OF PADI
      </div>
    </footer>
  );
}

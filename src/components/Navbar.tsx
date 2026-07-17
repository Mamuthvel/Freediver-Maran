"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { courses } from "@/lib/courses";
import { locations } from "@/lib/locations";

type NavItem = { label: string; href: string; items?: { label: string; href: string }[] };

const featuredBlogPosts = [
  { label: "What is Freediving?", href: "/blog/what-is-freediving" },
  { label: "Freediving vs Scuba", href: "/blog/freediving-vs-scuba-diving" },
  { label: "Is Freediving Safe?", href: "/blog/how-safe-is-freediving" },
  { label: "Breath-Hold Training Guide", href: "/blog/how-to-hold-your-breath-longer" },
  { label: "PADI Freediving Certification Guide", href: "/blog/padi-certification-explained" },
];

const nav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses", items: courses.map((c) => ({ label: c.shortName, href: `/courses/${c.slug}` })) },
  { label: "Locations", href: "/locations", items: locations.map((l) => ({ label: l.name, href: `/locations/${l.slug}` })) },
  { label: "Training", href: "/training" },
  { label: "Trips & Expeditions", href: "/trips" },
  { label: "Deep Dive Dubai", href: "/deep-dive-dubai" },
  { label: "Underwater Journaling", href: "/underwater-journaling" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog", items: featuredBlogPosts },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setOpenAccordion(null);
  }, [pathname]);

  useEffect(() => {
    if (!openDropdown) return;
    const onClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenDropdown(null);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpenDropdown(null); };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, [openDropdown]);

  return (
    <header
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen ? "border-b border-foam/10 bg-abyss/90 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4" aria-label="Main">
        <Link href="/" className="shrink-0 font-display text-xl font-semibold tracking-tight text-foam">
          Sea<span className="text-lagoon">Critter</span>
        </Link>
        <div className="hidden flex-wrap items-center justify-end gap-x-1 gap-y-2 lg:flex">
          {nav.map((n) =>
            n.items ? (
              <div key={n.href} className="relative">
                <button
                  className="flex items-center gap-1 rounded-full px-3 py-2 text-sm text-foam/75 transition hover:text-foam"
                  aria-expanded={openDropdown === n.href}
                  onClick={() => setOpenDropdown(openDropdown === n.href ? null : n.href)}
                >
                  {n.label}
                  <span aria-hidden className="text-[10px] text-foam/40">▾</span>
                </button>
                {openDropdown === n.href && (
                  <div className="absolute left-0 top-full mt-1 w-64 rounded-2xl border border-foam/10 bg-abyss/95 p-2 shadow-xl shadow-abyss/50 backdrop-blur-xl">
                    <Link href={n.href} className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-lagoon hover:bg-foam/5">
                      All {n.label.toLowerCase()} →
                    </Link>
                    <div className="my-1 border-t border-foam/10" />
                    {n.items.map((it) => (
                      <Link key={it.href} href={it.href} className="block rounded-xl px-4 py-2.5 text-sm text-foam/75 hover:bg-foam/5 hover:text-foam">
                        {it.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={n.href} href={n.href} className="rounded-full px-3 py-2 text-sm text-foam/75 transition hover:text-foam">
                {n.label}
              </Link>
            )
          )}
          <Link
            href="/book"
            className="ml-2 shrink-0 rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-abyss transition hover:brightness-110"
          >
            Book a Course
          </Link>
        </div>
        <button
          className="lg:hidden text-foam"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span aria-hidden className="font-gauge text-lg">{menuOpen ? "✕" : "≡"}</span>
        </button>
      </nav>
      {menuOpen && (
        <div className="max-h-[calc(100svh-64px)] overflow-y-auto border-t border-foam/10 bg-abyss/95 px-6 py-4 backdrop-blur-xl lg:hidden">
          {nav.map((n) =>
            n.items ? (
              <div key={n.href} className="border-b border-foam/5">
                <button
                  className="flex w-full items-center justify-between py-3 text-left text-foam/85"
                  aria-expanded={openAccordion === n.href}
                  onClick={() => setOpenAccordion(openAccordion === n.href ? null : n.href)}
                >
                  {n.label}
                  <span aria-hidden className="text-foam/40">{openAccordion === n.href ? "−" : "+"}</span>
                </button>
                {openAccordion === n.href && (
                  <div className="pb-2 pl-4">
                    <Link href={n.href} onClick={() => setMenuOpen(false)} className="block py-2 text-sm font-semibold text-lagoon">
                      All {n.label.toLowerCase()} →
                    </Link>
                    {n.items.map((it) => (
                      <Link key={it.href} href={it.href} onClick={() => setMenuOpen(false)} className="block py-2 text-sm text-foam/70">
                        {it.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="block border-b border-foam/5 py-3 text-foam/85">
                {n.label}
              </Link>
            )
          )}
          <Link href="/book" onClick={() => setMenuOpen(false)} className="mt-4 block rounded-full bg-coral px-5 py-3 text-center font-semibold text-abyss">
            Book a Course
          </Link>
        </div>
      )}
    </header>
  );
}

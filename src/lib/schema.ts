import { site, absoluteUrl } from "./site";
import type { Course } from "./courses";
import type { DiveLocation } from "./locations";
import type { Faq } from "./courses";
import type { Product } from "./store";

// Central JSON-LD builders. Rendered via <JsonLd /> component.

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "SportsActivityLocation"],
  "@id": absoluteUrl("/#organization"),
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  logo: absoluteUrl("/logo.png"),
  image: absoluteUrl("/og.jpg"),
  description: site.description,
  email: site.email,
  telephone: site.phone,
  foundingDate: String(site.founded),
  address: { "@type": "PostalAddress", ...site.address },
  geo: { "@type": "GeoCoordinates", ...site.geo },
  sameAs: [site.instagram],
  priceRange: "₹₹",
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": absoluteUrl("/#website"),
  url: site.url,
  name: site.name,
  publisher: { "@id": absoluteUrl("/#organization") },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: absoluteUrl("/blog?q={search_term_string}") },
    "query-input": "required name=search_term_string",
  },
});

export const courseSchema = (c: Course) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  name: c.name,
  description: c.overview,
  url: absoluteUrl(`/courses/${c.slug}`),
  provider: { "@id": absoluteUrl("/#organization") },
  offers: {
    "@type": "Offer",
    price: c.priceInr,
    priceCurrency: "INR",
    availability: c.comingSoon ? "https://schema.org/PreOrder" : "https://schema.org/InStock",
    url: absoluteUrl(`/courses/${c.slug}`),
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "Onsite",
    courseWorkload: c.durationIso,
    location: { "@type": "Place", name: `Sea Critter, ${site.address.addressLocality}`, address: { "@type": "PostalAddress", ...site.address } },
  },
  educationalCredentialAwarded: c.certification,
});

export const placeSchema = (l: DiveLocation) => ({
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  name: `Freediving in ${l.name}`,
  description: l.whyDive,
  url: absoluteUrl(`/locations/${l.slug}`),
  geo: { "@type": "GeoCoordinates", latitude: l.geo.lat, longitude: l.geo.lng },
  touristType: "Freedivers",
});

export const faqSchema = (faqs: Faq[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const articleSchema = (p: { title: string; description: string; date: string; slug: string }) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: p.title,
  description: p.description,
  datePublished: p.date,
  dateModified: p.date,
  url: absoluteUrl(`/blog/${p.slug}`),
  author: { "@type": "Person", name: "Arjun Nair", jobTitle: "PADI Freediver Instructor Trainer" },
  publisher: { "@id": absoluteUrl("/#organization") },
  image: absoluteUrl(`/blog/${p.slug}/opengraph-image`),
});

export const productSchema = (p: Product) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: p.name,
  description: p.description,
  category: p.category,
  image: p.image,
  url: absoluteUrl(`/store/${p.slug}`),
  offers: {
    "@type": "Offer",
    price: p.priceInr,
    priceCurrency: "INR",
    availability: p.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    url: absoluteUrl(`/store/${p.slug}`),
    seller: { "@id": absoluteUrl("/#organization") },
  },
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: absoluteUrl(it.path),
  })),
});

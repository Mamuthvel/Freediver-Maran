import type { Faq } from "./courses";

export type Trip = {
  slug: string;
  name: string;
  locationSlug: string;
  locationName: string;
  depthTag: string;
  season: string;
  duration: string;
  groupSize: string;
  forWho: string;
  tagline: string;
  description: string;
  highlights: string[];
  included: string[];
  faqs: Faq[];
};

export const trips: Trip[] = [
  {
    slug: "pondicherry-weekend-immersion",
    name: "Pondicherry Weekend Immersion",
    locationSlug: "pondicherry",
    locationName: "Pondicherry",
    depthTag: "−18 M",
    season: "Year-round, best Feb–Apr & Aug–Oct",
    duration: "2–3 days",
    groupSize: "Max 4 per instructor",
    forWho: "Anyone from complete beginner to PADI Freediver level",
    tagline: "Certification plus reef dives, all from our home base.",
    description:
      "Our most-booked trip: pair a Basic or PADI Freediver certification with fun dives on Pondicherry's artificial reefs, then spend evenings in the French Quarter. Short boat rides and warm water year-round make this the easiest way to combine a weekend away with a real certification.",
    highlights: [
      "Course sessions plus 1–2 extra fun dives on the reef",
      "Short boat transfers — no long open-water crossings",
      "Evenings free to explore White Town and Auroville",
    ],
    included: ["All course/dive equipment", "Boat transfers", "Instructor-guided reef dives", "Certification fees"],
    faqs: [
      { q: "Can I join without prior freediving experience?", a: "Yes — this trip is built around the Basic or PADI Freediver course, so no experience is required to start." },
      { q: "How many dive days are included?", a: "Typically 2–3 days of course sessions and reef dives, depending on which course you pair it with." },
    ],
  },
  {
    slug: "andaman-depth-camp",
    name: "Andaman Depth Camp",
    locationSlug: "andaman",
    locationName: "Andaman Islands",
    depthTag: "−30 M",
    season: "December to April",
    duration: "5–7 days",
    groupSize: "Max 4 per instructor",
    forWho: "Certified PADI Freedivers ready to push toward Advanced or Master depths",
    tagline: "India's clearest water, dedicated to depth training.",
    description:
      "A seasonal depth camp at Havelock built for certified freedivers who want focused progression rather than a single course. Days are structured around training tables, free-fall technique, and repeated dives on the reef walls where visibility routinely exceeds 20 metres — ideal conditions for building comfort at depth safely.",
    highlights: [
      "Daily structured training tables, not just recreational dives",
      "Reef-wall sites with 15–30 m visibility",
      "Small camp format — the same group and instructor all week",
    ],
    included: ["All dive equipment incl. computer", "Daily boat dives", "Structured training plan", "Safety diver support on every deep dive"],
    faqs: [
      { q: "What certification do I need for the depth camp?", a: "PADI Freediver minimum; most participants are Advanced Freedivers working toward Master or simply logging depth experience." },
      { q: "Is this a certification course or a training camp?", a: "It's a training camp — you can complete your Advanced or Master Freediver certification during it, but its real focus is supervised depth progression over a full week." },
    ],
  },
  {
    slug: "maldives-expedition",
    name: "Maldives Expedition",
    locationSlug: "maldives",
    locationName: "Maldives",
    depthTag: "−40 M",
    season: "November to April",
    duration: "7 days",
    groupSize: "Small group, max 8 divers total",
    forWho: "Certified PADI Freedivers (Advanced recommended for channel sites)",
    tagline: "The graduation trip: atoll channels, manta stations, blue water.",
    description:
      "Sea Critter's annual guided expedition to the South Malé and Ari Atolls — a week of channel dives, thila pinnacles, and manta cleaning stations, based from local-island guesthouses rather than resort pricing. This is the trip most students point to as the reason they got certified in the first place.",
    highlights: [
      "Manta cleaning station dives at 10–15 m",
      "Open blue-water sessions in 40+ m visibility",
      "Local-island stays — authentic and a fraction of resort cost",
    ],
    included: ["Group transfers within the Maldives", "Guided boat dives", "Pre-trip refresher session", "Local-island accommodation (shared)"],
    faqs: [
      { q: "Do I need a certification to join?", a: "Yes — PADI Freediver minimum; some channel sites require Advanced Freediver. We run a pre-trip refresher for anyone who wants to sharpen up first." },
      { q: "Is flights and accommodation included?", a: "In-country transfers, guided dives, and shared local-island accommodation are included. International flights to Malé are booked separately — most trips connect easily from Kochi, Bengaluru, Mumbai, or Delhi." },
    ],
  },
];

export const getTrip = (slug: string) => trips.find((t) => t.slug === slug);

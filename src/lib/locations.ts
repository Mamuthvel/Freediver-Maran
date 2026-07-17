import type { Faq } from "./courses";

export type DiveLocation = {
  slug: string;
  name: string;
  region: string;
  country: string;
  geo: { lat: number; lng: number };
  depthTag: string;
  tagline: string;
  whyDive: string;
  marineLife: string[];
  bestSeason: string;
  weather: string;
  visibility: string;
  travelGuide: string;
  accommodation: string;
  nearbyAttractions: string[];
  faqs: Faq[];
};

export const locations: DiveLocation[] = [
  {
    slug: "pondicherry",
    name: "Pondicherry",
    region: "Puducherry, Bay of Bengal",
    country: "India",
    geo: { lat: 11.9338, lng: 79.8358 },
    depthTag: "−18 M",
    tagline: "Sea Critter's home reef. French quarter mornings, warm-water descents.",
    whyDive:
      "Pondicherry is Sea Critter's home base and India's most accessible freediving destination. Boat rides to the training sites are short, the Bay of Bengal stays warm year-round, and artificial reef sites at 8–18 metres are ideal training depths for Freediver and Advanced courses. Add the French Quarter's cafés and boulevards, and it is the easiest place in India to fold a certification into a long weekend.",
    marineLife: ["Lionfish and scorpionfish on the reefs", "Schooling snapper and fusiliers", "Moray eels", "Seasonal eagle rays", "Octopus on the artificial reefs"],
    bestSeason: "February to April and August to October, when seas are calmest.",
    weather: "Tropical and warm year-round: 26–35 °C air, 27–29 °C water. The northeast monsoon (Nov–Jan) brings surface chop; summers are hot but diveable in the mornings.",
    visibility: "5–15 metres depending on season; best clarity March–April and September.",
    travelGuide:
      "Fly into Chennai (MAA), then a 3-hour drive or shuttle down the scenic East Coast Road. Pondicherry also has a small domestic airport (PNY) with limited connections. Trains run from Chennai Egmore to Puducherry station.",
    accommodation:
      "Stay in White Town for heritage guesthouses within walking distance of our centre, or in Auroville, 20 minutes north, for quieter forested stays. Budget hostels to boutique hotels all sit within ₹800–₹9,000 per night.",
    nearbyAttractions: ["White Town French Quarter", "Auroville and the Matrimandir", "Paradise Beach", "Serenity surf beach", "Sri Aurobindo Ashram"],
    faqs: [
      { q: "Is Pondicherry good for beginner freediving?", a: "Yes — it is arguably India's best beginner destination: warm water, short boat rides, and training-friendly depths of 8–18 metres." },
      { q: "When is freediving season in Pondicherry?", a: "February–April and August–October offer the calmest seas and best visibility." },
    ],
  },
  {
    slug: "goa",
    name: "Goa",
    region: "Konkan Coast, Arabian Sea",
    country: "India",
    geo: { lat: 15.2993, lng: 74.124 },
    depthTag: "−20 M",
    tagline: "Arabian Sea islands, hidden coves, and India's most relaxed dive scene.",
    whyDive:
      "Goa pairs India's most developed travel infrastructure with surprisingly good freediving around Grande Island and the rocky coves south of Palolem. Calm, protected bays make superb training platforms, and post-monsoon plankton blooms bring big schooling fish. If you want certification plus nightlife, food, and beaches for a non-diving partner, Goa is the pick.",
    marineLife: ["Schools of barracuda and trevally", "Turtles around Grande Island", "Nudibranchs and reef fish in the coves", "Seasonal devil rays"],
    bestSeason: "October to May; the sweet spot is November to March.",
    weather: "27–33 °C air, 27–29 °C water in season. The June–September monsoon closes the sea entirely.",
    visibility: "5–12 metres; clearest from November to February.",
    travelGuide:
      "Fly into Goa's Dabolim (GOI) or Mopa (GOX) airports with direct connections across India and the Gulf. Our sessions run from South Goa; taxis and rented scooters cover everything else.",
    accommodation:
      "Beach huts in Palolem and Agonda from ₹1,500, boutique Portuguese-villa stays in Assagao, and five-star resorts along the south coast.",
    nearbyAttractions: ["Palolem and Agonda beaches", "Old Goa churches (UNESCO)", "Cabo de Rama fort", "Spice plantations", "Saturday Night Market, Arpora"],
    faqs: [
      { q: "Can you freedive in Goa during monsoon?", a: "No — the Arabian Sea is closed to boats from roughly June to September. Plan for October–May." },
      { q: "Which is better for freediving, Goa or Pondicherry?", a: "Pondicherry has more consistent training conditions; Goa wins on travel convenience and things to do topside. Many students do a course in one and fun-dive the other." },
    ],
  },
  {
    slug: "andaman",
    name: "Andaman Islands",
    region: "Havelock (Swaraj Dweep), Andaman Sea",
    country: "India",
    geo: { lat: 12.0301, lng: 92.9787 },
    depthTag: "−30 M",
    tagline: "India's clearest water. Coral walls, 30-metre visibility, turquoise everything.",
    whyDive:
      "The Andamans are, simply, the best freediving in India. Visibility routinely exceeds 20 metres, coral reefs are alive and shallow enough to enjoy on a single breath, and deep walls drop straight off the reef edge — perfect for Advanced and Master depth work. Sea Critter runs seasonal course trips and depth camps at Havelock every year.",
    marineLife: ["Hawksbill and green turtles", "Reef sharks on outer walls", "Napoleon wrasse", "Vast hard-coral gardens", "Manta rays (seasonal)", "Dugongs (rare, unforgettable)"],
    bestSeason: "December to April; glassy seas and peak visibility January–March.",
    weather: "26–32 °C air, 28–30 °C water. Two monsoons (May–Sep, Nov) bracket the season.",
    visibility: "15–30+ metres — the best in Indian waters.",
    travelGuide:
      "Fly to Port Blair (IXZ) via Chennai, Delhi, or Bengaluru, then a 90-minute government or private ferry to Havelock. Book ferries in advance in peak season. Indian nationals need no permit; foreign nationals receive a free 30-day permit on arrival.",
    accommodation:
      "Beachfront eco-resorts and dive lodges around Beach No. 5 and Kalapathar; ₹2,000 bamboo cottages to ₹25,000 luxury villas.",
    nearbyAttractions: ["Radhanagar Beach (Asia's best-ranked beach)", "Kalapathar Beach", "Neil Island day trips", "Kayaking the mangroves", "Cellular Jail, Port Blair"],
    faqs: [
      { q: "Why do freedivers rate the Andamans so highly?", a: "Warm water, 20–30 m visibility, and reef walls with real depth close to shore — conditions comparable to Southeast Asia's best, inside India." },
      { q: "Do foreigners need a permit for Havelock?", a: "Foreign nationals get a free Restricted Area Permit on arrival at Port Blair, valid 30 days. Indian citizens need none." },
    ],
  },
  {
    slug: "maldives",
    name: "Maldives",
    region: "South Malé & Ari Atolls, Indian Ocean",
    country: "Maldives",
    geo: { lat: 3.2028, lng: 73.2207 },
    depthTag: "−40 M",
    tagline: "The bucket-list trip. Channels, mantas, and blue water without a floor.",
    whyDive:
      "Our annual Maldives expeditions are the graduation trip of Indian freediving: liveaboard or island-based weeks diving atoll channels, thila pinnacles, and open blue water. Manta cleaning stations at 10–15 metres seem designed for breath-hold divers, and 40-metre-plus visibility makes depth training feel like floating in light. Sea Critter runs guided trips for certified freedivers each season.",
    marineLife: ["Manta rays at cleaning stations", "Whale sharks (South Ari, year-round)", "Grey reef and nurse sharks", "Eagle-ray squadrons", "Endless reef fish on the thilas"],
    bestSeason: "November to April (dry, northeast monsoon); manta activity peaks vary by atoll.",
    weather: "28–31 °C air and water, near-constant. Brief squalls even in season.",
    visibility: "20–40+ metres in the channels and outside the atolls.",
    travelGuide:
      "Fly to Malé (MLE) — direct flights from Kochi, Bengaluru, Mumbai, and Delhi, often under 2 hours from South India. Indians receive visa-free entry. Speedboats or seaplanes connect to the atolls; on Sea Critter trips, transfers are arranged for the group.",
    accommodation:
      "Trips run either on a dedicated liveaboard or from local-island guesthouses (Gulhi, Maafushi, Dhigurah) — the affordable, authentic alternative to resort islands.",
    nearbyAttractions: ["Sandbank picnics", "Bioluminescent night beaches", "Local-island culture on Dhigurah", "Whale-shark snorkel excursions", "Malé fish market"],
    faqs: [
      { q: "Do I need a certification to join the Maldives trip?", a: "Yes — PADI Freediver (or equivalent) minimum; some channel sites require Advanced. We schedule a pre-trip refresher for anyone rusty." },
      { q: "Is the Maldives expensive?", a: "Resort islands are; our trips are not built on them. Local-island guesthouses and shared liveaboards bring a week to roughly the cost of a good domestic holiday." },
    ],
  },
];

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);

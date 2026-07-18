export const site = {
  name: "Sea Critter",
  legalName: "Sea Critter Freediving Training Center",
  tagline: "PADI Freediving Training Center · India",
  description:
    "Sea Critter is a PADI Freediving Training Center in India offering internationally recognized freediving certifications — from Basic Freediver to Master Freediver — in Pondicherry, Goa, the Andaman Islands and the Maldives.",
  url: "https://www.seacritter.in",
  email: "pvmaraneyo@gmail.com",
  phone: "+91-89031-47126",
  hours: "Daily · 7:00 AM – 6:00 PM IST",
  whatsapp: "https://wa.me/918903147126",
  instagram: "https://www.instagram.com/seacritter.freediving",
  address: {
    streetAddress: "12 Beach Road, White Town",
    addressLocality: "Pondicherry",
    addressRegion: "Puducherry",
    postalCode: "605001",
    addressCountry: "IN",
  },
  geo: { latitude: 11.9338, longitude: 79.8358 },
  founded: 2018,
  stats: {
    studentsCertified: 1200,
    countriesRepresented: 34,
    yearsExperience: 8,
    maxBatchSize: 4,
  },
} as const;

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();

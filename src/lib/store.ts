export type Product = {
  slug: string;
  name: string;
  category: "Gear" | "Apparel" | "Accessories";
  priceInr: number;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  inStock: boolean;
};

const u = (id: string) => `https://images.unsplash.com/${id}?q=80&w=1200&auto=format&fit=crop`;

export const products: Product[] = [
  {
    slug: "long-blade-freediving-fins",
    name: "Long-Blade Freediving Fins",
    category: "Gear",
    priceInr: 12500,
    tagline: "The same carbon-composite blades we use on Advanced and Master courses.",
    description:
      "Efficient, low-fatigue long-blade fins built for constant-weight descents and free-fall ascents. A softer flex pattern than most rental fins, tuned for divers who want more distance per kick without burning through their breath-hold.",
    features: ["Carbon-composite blade", "Adjustable open-heel foot pocket", "Sold as a pair", "Padded fin bag included"],
    image: u("photo-1544551763-46a013bb70d5"),
    inStock: true,
  },
  {
    slug: "low-volume-freediving-mask",
    name: "Low-Volume Freediving Mask",
    category: "Gear",
    priceInr: 3200,
    tagline: "Less air to equalize, more of the reef in your field of view.",
    description:
      "A soft-skirt, low-internal-volume mask designed specifically for breath-hold diving — the same model issued on our Basic Freediver and PADI Freediver courses. Wide field of view, easy one-hand clearing, tempered glass lenses.",
    features: ["Ultra-low internal volume", "Silicone skirt, tempered glass", "One-hand purge clearing", "Comes with a hard case"],
    image: u("photo-1603259860985-5dfe6bf9a1fd"),
    inStock: true,
  },
  {
    slug: "open-cell-wetsuit-3mm",
    name: "Open-Cell Wetsuit, 3mm",
    category: "Gear",
    priceInr: 9800,
    tagline: "Warm-water freediving cut — smooth-skin torso, no drag.",
    description:
      "A 3mm open-cell freediving wetsuit tailored for warm Indian and Maldivian waters. Smooth-skin chest panel cuts drag on the surface, camo or navy colourways, made to order across sizes S–XXL.",
    features: ["3mm open-cell neoprene", "Smooth-skin chest panel", "Two-piece: long john + jacket", "Made to order — 7–10 day lead time"],
    image: u("photo-1462947760324-15811216b688"),
    inStock: true,
  },
  {
    slug: "freediving-computer",
    name: "Freediving Dive Computer",
    category: "Gear",
    priceInr: 18500,
    tagline: "Depth, time, and descent-rate alarms on your wrist.",
    description:
      "A dedicated freediving computer with configurable depth and time alarms, descent/ascent rate warnings, and a dive-log you can review with your instructor. The same model our Advanced and Master students train with.",
    features: ["Depth, time & rate alarms", "50-dive log memory", "100m depth rating", "USB-rechargeable"],
    image: u("photo-1591025207163-942350e47db2"),
    inStock: true,
  },
  {
    slug: "sea-critter-rash-guard",
    name: "Sea Critter Rash Guard",
    category: "Apparel",
    priceInr: 1800,
    tagline: "UPF 50+ sun protection, embroidered depth-gauge logo.",
    description:
      "A long-sleeve rash guard in Sea Critter's abyss colourway, quick-dry fabric with UPF 50+ protection for long days on the boat. Unisex fit, embroidered dive-gauge logo on the chest.",
    features: ["UPF 50+ quick-dry fabric", "Unisex fit, sizes XS–XXL", "Embroidered logo", "Flatlock seams — no chafing"],
    image: u("photo-1628630500614-1c8924c99c3e"),
    inStock: true,
  },
  {
    slug: "sea-critter-dry-bag",
    name: "Sea Critter 20L Dry Bag",
    category: "Accessories",
    priceInr: 1400,
    tagline: "Keep your phone, keys, and towel dry between dives.",
    description:
      "A 20-litre roll-top dry bag — enough for a change of clothes, your phone, and a towel between sessions. Welded seams, clip-on D-ring, printed with the Sea Critter depth-gauge mark.",
    features: ["20L roll-top capacity", "Welded waterproof seams", "Clip-on D-ring", "Fits under most boat seats"],
    image: u("photo-1502680390469-be75c86b636f"),
    inStock: true,
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

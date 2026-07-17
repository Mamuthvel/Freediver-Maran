export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  category: "Training" | "Open Water" | "Marine Life" | "Reef";
  credit: string;
};

const u = (id: string) => `https://images.unsplash.com/${id}?q=80&w=1200&auto=format&fit=crop`;

export const galleryImages: GalleryImage[] = [
  { src: u("photo-1602199926649-2e5e447bab97"), alt: "Freediver in free-fall descent through blue water", caption: "Free-fall descent", category: "Training", credit: "Kiril Dobrev" },
  { src: u("photo-1628630500614-1c8924c99c3e"), alt: "Freediver swimming through open blue water", caption: "Open blue water", category: "Open Water", credit: "Chase Baker" },
  { src: u("photo-1503177847378-d2048487fa46"), alt: "Freediver holding streamlined form underwater", caption: "Breath-hold form", category: "Training", credit: "Jeremy Bishop" },
  { src: u("photo-1462947760324-15811216b688"), alt: "Freediver descending on a line", caption: "The descent", category: "Training", credit: "Jakob Boman" },
  { src: u("photo-1603259860985-5dfe6bf9a1fd"), alt: "Freediver practising static apnea underwater", caption: "Static apnea", category: "Training", credit: "Israel Gil" },
  { src: u("photo-1674786375512-0b1d38fda375"), alt: "Instructor and student during a training session", caption: "Training session", category: "Training", credit: "Michael Worden" },
  { src: u("photo-1682687981674-0927add86f2b"), alt: "Diver swimming near a coral reef", caption: "Coral gardens", category: "Reef", credit: "NEOM" },
  { src: u("photo-1567628065080-ecdec09a7588"), alt: "School of reef fish underwater", caption: "Reef fish", category: "Marine Life", credit: "Max Gotts" },
  { src: u("photo-1583212292454-1fe6229603b7"), alt: "Large school of fish in open water", caption: "Schooling fish", category: "Marine Life", credit: "Hiroko Yoshii" },
  { src: u("photo-1682687982167-d7fb3ed8541d"), alt: "Diver swimming through an underwater cave", caption: "Cave swim-through", category: "Open Water", credit: "NEOM" },
  { src: u("photo-1544551763-46a013bb70d5"), alt: "Two divers swimming together underwater", caption: "Buddy team", category: "Training", credit: "Sebastian Pena Lambarri" },
  { src: u("photo-1586508577428-120d6b072945"), alt: "Diver finning past a school of fish", caption: "Fin technique", category: "Training", credit: "Aviv Perets" },
  { src: u("photo-1682687981630-cefe9cd73072"), alt: "Diver swimming over a colourful coral reef", caption: "Reef colours", category: "Reef", credit: "NEOM" },
  { src: u("photo-1614241580814-477d221ebaeb"), alt: "Diver relaxing at the surface between dives", caption: "Surface interval", category: "Open Water", credit: "Ibrahim Mohamed" },
];

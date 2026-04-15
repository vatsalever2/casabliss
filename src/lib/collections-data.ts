export interface Collection {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  catalogueUrl: string;
  philosophy: string;
  gallery: string[];
}

// Master catalogue link (all categories combined)
export const masterCatalogueUrl = "#"; // Replace with your Google Drive link

export const collections: Collection[] = [
  {
    slug: "living-room",
    title: "Living Room",
    tagline: "Pieces that speak before you enter the room.",
    image: "/images/collections/collection-furniture.jpg",
    catalogueUrl: "#", // Replace with Google Drive link for Living Room
    philosophy: "The living room is the architectural heart of the home. We curate expansive Italian leather seating and monolithic stone that command the space with quiet authority.",
    gallery: [
      "/images/collections/collection-furniture.jpg",
      "/images/vignettes/vignette-2.jpg",
      "/images/vignettes/vignette-1.jpg",
      "/images/hero/hero-home.jpg"
    ]
  },
  {
    slug: "bedroom",
    title: "Bedroom",
    tagline: "Where the day ends and quality begins.",
    image: "/images/collections/collection-bedroom-v2.jpg",
    catalogueUrl: "#", // Replace with Google Drive link for Bedroom
    philosophy: "The bedroom demands absolute silence. We architect master suites around European tailoring and textiles that transform the room into a sanctuary of restorative luxury.",
    gallery: [
      "/images/collections/collection-bedroom-v2.jpg",
      "/images/collections/bedroom_2.jpg",
      "/images/collections/bedroom_3.jpg",
      "/images/collections/bedroom_4.jpg"
    ]
  },
  {
    slug: "dining",
    title: "Dining",
    tagline: "Tables that turn a meal into an occasion.",
    image: "/images/collections/collection-dining.jpg",
    catalogueUrl: "#", // Replace with Google Drive link for Dining
    philosophy: "Dining is an occasion of communion. We source sculptural slabs of sintered stone that serve as monumental centerpieces built to last for generations.",
    gallery: [
      "/images/process/service-3.jpg",
      "/images/collections/dining_2.jpg",
      "/images/gallery/gallery-3.jpg",
      "/images/collections/collection-kitchen.jpg"
    ]
  },
  {
    slug: "modular-kitchen-wardrobes",
    title: "Modular Kitchen & Wardrobes",
    tagline: "Precision-crafted spaces for how you live.",
    image: "/images/collections/collection-storage.jpg",
    catalogueUrl: "#", // Replace with Google Drive link for Modular Kitchen & Wardrobes
    philosophy: "A kitchen and wardrobe are not mere storage — they are the operational core of a refined home. We engineer modular systems with German-grade precision, marrying aesthetic coherence with flawless functionality.",
    gallery: [
      "/images/collections/collection-storage.jpg",
      "/images/collections/storage_decor_2.jpg",
      "/images/collections/storage_decor_3.jpg",
      "/images/collections/storage_decor_4.jpg"
    ]
  },
];

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

// ════════════════════════════════════════════════════════
// MASTER CATALOGUES (Google Drive Links)
// ════════════════════════════════════════════════════════
export interface Catalogue {
  id: string;
  title: string;
  category: string;
  driveUrl: string;
}

export const masterCatalogues: Catalogue[] = [
  {
    id: "living-room-sourcebook",
    title: "Living Room Sourcebook",
    category: "Living Room",
    driveUrl: "#", 
  },
  {
    id: "bedroom-suites-v1",
    title: "Bedroom Suites Vol. 1",
    category: "Bedroom",
    driveUrl: "#", 
  },
  {
    id: "dining-architecture",
    title: "Dining Architecture",
    category: "Dining",
    driveUrl: "#", 
  },
  {
    id: "modular-kitchen-wardrobes-catalogue",
    title: "Modular Kitchen & Wardrobes Catalogue",
    category: "Modular Kitchen & Wardrobes",
    driveUrl: "#", 
  }
];

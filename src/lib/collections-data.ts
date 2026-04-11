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
    image: "/images/collection-furniture.jpg",
    catalogueUrl: "#", // Replace with Google Drive link for Living Room
    philosophy: "The living room is the architectural heart of the home. We curate expansive Italian leather seating and monolithic stone that command the space with quiet authority.",
    gallery: [
      "/images/collection-furniture.jpg",
      "/images/gallery-1.jpg",
      "/images/gallery-2.jpg",
      "/images/hero-home.jpg"
    ]
  },
  {
    slug: "bedroom",
    title: "Bedroom",
    tagline: "Where the day ends and quality begins.",
    image: "/images/collection-bedroom-v2.jpg",
    catalogueUrl: "#", // Replace with Google Drive link for Bedroom
    philosophy: "The bedroom demands absolute silence. We architect master suites around European tailoring and textiles that transform the room into a sanctuary of restorative luxury.",
    gallery: [
      "/images/collection-bedroom-v2.jpg",
      "/images/gallery-3.jpg",
      "/images/gallery-1.jpg",
      "/images/service-1.jpg"
    ]
  },
  {
    slug: "dining",
    title: "Dining",
    tagline: "Tables that turn a meal into an occasion.",
    image: "/images/collection-dining.jpg",
    catalogueUrl: "#", // Replace with Google Drive link for Dining
    philosophy: "Dining is an occasion of communion. We source sculptural slabs of sintered stone that serve as monumental centerpieces built to last for generations.",
    gallery: [
      "/images/collection-dining.jpg",
      "/images/gallery-2.jpg",
      "/images/gallery-3.jpg",
      "/images/service-2.jpg"
    ]
  },
  {
    slug: "storage-decor",
    title: "Storage & Decor",
    tagline: "Architecture for your objects.",
    image: "/images/collection-storage.jpg",
    catalogueUrl: "#", // Replace with Google Drive link for Storage & Decor
    philosophy: "True luxury is the absence of visual noise. Our monolithic systems disappear into your architecture, whilst our decor is curated to shape light and space.",
    gallery: [
      "/images/collection-storage.jpg",
      "/images/gallery-1.jpg",
      "/images/gallery-2.jpg",
      "/images/service-3.jpg"
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
    id: "storage-decor-manifesto",
    title: "Storage & Decor Manifesto",
    category: "Storage & Decor",
    driveUrl: "#", 
  }
];

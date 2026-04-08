export interface ProductStory {
  slug: string;
  title: string;
  description: string;
  materials: string;
  image: string;
}

export interface Collection {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  catalogueUrl: string;
  stories: ProductStory[];
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
    stories: [
      {
        slug: "living-systems",
        title: "Living Systems",
        description:
          "Modular seating designed for spaces that host, not just accommodate. Every angle considered, every joint invisible.",
        materials: "Italian leather · Solid walnut frame · High-density foam core",
        image: "/images/collection-furniture.jpg",
      },
      {
        slug: "accent-objects",
        title: "Accent Objects",
        description:
          "The details that complete a room. Console tables, mirrors, and objects chosen for presence.",
        materials: "Marble · Brass · Hand-finished wood · Artisan glass",
        image: "/images/collection-furniture.jpg",
      },
    ],
  },
  {
    slug: "bedroom",
    title: "Bedroom",
    tagline: "Where the day ends and quality begins.",
    image: "/images/collection-bedroom.jpg",
    catalogueUrl: "#", // Replace with Google Drive link for Bedroom
    stories: [
      {
        slug: "bedroom-retreats",
        title: "Master Suites",
        description:
          "Beds engineered for silence and absolute comfort. Premium tailoring meets robust architectural frames.",
        materials: "Solid ash frame · Premium upholstery · Integrated lighting",
        image: "/images/collection-bedroom.jpg",
      },
      {
        slug: "nightstands",
        title: "Nightstands & Consoles",
        description:
          "Essential companions. Storage units that blend seamlessly into the bedroom's calm aesthetic.",
        materials: "Walnut veneer · Soft-close drawers · Brass detailing",
        image: "/images/collection-bedroom.jpg",
      },
    ],
  },
  {
    slug: "dining",
    title: "Dining",
    tagline: "Tables that turn a meal into an occasion.",
    image: "/images/collection-dining.jpg",
    catalogueUrl: "#", // Replace with Google Drive link for Dining
    stories: [
      {
        slug: "dining-statements",
        title: "Dining Statements",
        description:
          "Expansive tables crafted for proportion and built for decades of gathering.",
        materials: "Sintered stone top · Sculptural brushed brass legs",
        image: "/images/collection-dining.jpg",
      },
      {
        slug: "dining-chairs",
        title: "Dining Chairs",
        description:
          "Uncompromised support disguised as elegant design.",
        materials: "Fabric or premium leather upholstery · Solid wood frame",
        image: "/images/collection-dining.jpg",
      },
    ],
  },
  {
    slug: "storage-decor",
    title: "Storage & Decor",
    tagline: "Architecture for your objects.",
    image: "/images/collection-storage.jpg",
    catalogueUrl: "#", // Replace with Google Drive link for Storage & Decor
    stories: [
      {
        slug: "storage-architecture",
        title: "Storage Architecture",
        description:
          "Wardrobes and shelving systems that disappear into the wall or command the room.",
        materials: "MDF with lacquer finish · Tempered glass inserts",
        image: "/images/collection-storage.jpg",
      },
      {
        slug: "mirrors-decor",
        title: "Mirrors & Accents",
        description:
          "Sculptural elements that manipulate light and space. Each object chosen for presence.",
        materials: "Aged brass · Antiqued mirror · Cast aluminium",
        image: "/images/collection-storage.jpg",
      },
    ],
  },
];

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

export function getProductStory(
  categorySlug: string,
  productSlug: string
): ProductStory | undefined {
  const collection = getCollection(categorySlug);
  return collection?.stories.find((s) => s.slug === productSlug);
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

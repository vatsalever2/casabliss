export interface Subcategory {
  id: string;
  title: string;
  tagline: string;
  catalogueUrl: string;
  images: string[];
}

export interface Collection {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  catalogueUrl: string;
  philosophy: string;
  gallery: string[];
  subcategories: Subcategory[];
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
    ],
    subcategories: [
      {
        id: "living-room-sofas",
        title: "Sofas & Seating",
        tagline: "Architectural comfort designed for lingering.",
        catalogueUrl: "#",
        images: [
          "/images/collections/collection-furniture.jpg",
          "/images/vignettes/vignette-1.jpg",
          "/images/gallery/gallery-1.jpg",
          "/images/vignettes/vignette-3.jpg",
        ],
      },
      {
        id: "living-room-coffee-tables",
        title: "Coffee & Side Tables",
        tagline: "Sculptural forms in stone, glass, and metal.",
        catalogueUrl: "#",
        images: [
          "/images/collections/storage_decor_3.jpg",
          "/images/vignettes/vignette-2.jpg",
          "/images/gallery/gallery-2.jpg",
          "/images/collections/collection-lighting.jpg",
        ],
      },
      {
        id: "living-room-tv-units",
        title: "Media Architecture",
        tagline: "Seamless integration of technology and design.",
        catalogueUrl: "#",
        images: [
          "/images/collections/storage_decor_2.jpg",
          "/images/vignettes/vignette-2.jpg",
          "/images/collections/collection-storage.jpg",
          "/images/gallery/gallery-3.jpg",
        ],
      },
      {
        id: "living-room-decor",
        title: "Accent & Decor",
        tagline: "The final layer of curated sophistication.",
        catalogueUrl: "#",
        images: [
          "/images/collections/storage_decor_4.jpg",
          "/images/collections/collection-lighting.jpg",
          "/images/vignettes/vignette-1.jpg",
          "/images/hero/hero-home.jpg",
        ],
      },
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
    ],
    subcategories: [
      {
        id: "bedroom-beds",
        title: "Beds & Headboards",
        tagline: "The sanctuary's centerpoint.",
        catalogueUrl: "#",
        images: [
          "/images/collections/collection-bedroom-v2.jpg",
          "/images/collections/bedroom_4.jpg",
          "/images/collections/bedroom_3.jpg",
          "/images/vignettes/vignette-1.jpg",
        ],
      },
      {
        id: "bedroom-wardrobes",
        title: "Wardrobes & Storage",
        tagline: "Concealed organization with tailored finishes.",
        catalogueUrl: "#",
        images: [
          "/images/collections/bedroom_2.jpg",
          "/images/collections/storage_decor_2.jpg",
          "/images/collections/collection-storage.jpg",
          "/images/collections/storage_decor_3.jpg",
        ],
      },
      {
        id: "bedroom-dressing",
        title: "Dressing Tables",
        tagline: "Intimate spaces for preparation and reflection.",
        catalogueUrl: "#",
        images: [
          "/images/collections/bedroom_3.jpg",
          "/images/collections/storage_decor_4.jpg",
          "/images/collections/bedroom_2.jpg",
          "/images/vignettes/vignette-3.jpg",
        ],
      },
      {
        id: "bedroom-nightstands",
        title: "Nightstands",
        tagline: "Quiet companions of functional luxury.",
        catalogueUrl: "#",
        images: [
          "/images/collections/bedroom_2.jpg",
          "/images/collections/collection-lighting.jpg",
          "/images/collections/bedroom_4.jpg",
          "/images/gallery/gallery-1.jpg",
        ],
      },
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
    ],
    subcategories: [
      {
        id: "dining-tables",
        title: "Dining Tables",
        tagline: "Monolithic slabs forged for gathering.",
        catalogueUrl: "#",
        images: [
          "/images/collections/collection-dining.jpg",
          "/images/collections/dining_2.jpg",
          "/images/process/service-3.jpg",
          "/images/gallery/gallery-3.jpg",
        ],
      },
      {
        id: "dining-chairs",
        title: "Dining Chairs",
        tagline: "Ergonomic support draped in fine materials.",
        catalogueUrl: "#",
        images: [
          "/images/collections/dining_2.jpg",
          "/images/process/service-3.jpg",
          "/images/collections/collection-dining.jpg",
          "/images/process/service-1.jpg",
        ],
      },
      {
        id: "dining-sideboards",
        title: "Sideboards & Buffets",
        tagline: "Architectural storage for fine diningware.",
        catalogueUrl: "#",
        images: [
          "/images/collections/storage_decor_3.jpg",
          "/images/collections/storage_decor_2.jpg",
          "/images/collections/storage_decor_4.jpg",
          "/images/collections/collection-storage.jpg",
        ],
      },
      {
        id: "dining-bar-units",
        title: "Bar Units & Display",
        tagline: "Elevated stages for curation and hosting.",
        catalogueUrl: "#",
        images: [
          "/images/collections/collection-kitchen.jpg",
          "/images/collections/dining_2.jpg",
          "/images/collections/collection-faucets.jpg",
          "/images/gallery/gallery-2.jpg",
        ],
      },
    ]
  },
  {
    slug: "modular-kitchen-wardrobes",
    title: "Modular Kitchen & Wardrobes",
    tagline: "Precision-crafted spaces for how you live.",
    image: "/images/collections/kitchen-1.jpg",
    catalogueUrl: "#", // Replace with Google Drive link for Modular Kitchen & Wardrobes
    philosophy: "A kitchen and wardrobe are not mere storage — they are the operational core of a refined home. We engineer modular systems with German-grade precision, marrying aesthetic coherence with flawless functionality.",
    gallery: [
      "/images/collections/kitchen-1.jpg",
      "/images/collections/kitchen-2.jpg",
      "/images/collections/storage_decor_3.jpg",
      "/images/collections/storage_decor_2.jpg"
    ],
    subcategories: [
      {
        id: "modular-kitchens",
        title: "Modular Kitchens",
        tagline: "Precision-engineered culinary environments.",
        catalogueUrl: "#",
        images: [
          "/images/collections/kitchen-1.jpg",
          "/images/collections/kitchen-2.jpg",
          "/images/collections/collection-kitchen.jpg",
          "/images/process/service-2.jpg",
        ],
      },
      {
        id: "wardrobe-systems",
        title: "Walk-in Closets",
        tagline: "Expansive display and intuitive storage.",
        catalogueUrl: "#",
        images: [
          "/images/collections/bedroom_2.jpg",
          "/images/collections/bedroom_4.jpg",
          "/images/collections/collection-storage.jpg",
          "/images/collections/bedroom_3.jpg",
        ],
      },
      {
        id: "storage-organizers",
        title: "Storage & Organizers",
        tagline: "Systematic luxury to tame the chaos.",
        catalogueUrl: "#",
        images: [
          "/images/collections/storage_decor_3.jpg",
          "/images/collections/storage_decor_2.jpg",
          "/images/collections/storage_decor_4.jpg",
          "/images/collections/collection-storage.jpg",
        ],
      },
      {
        id: "kitchen-countertops",
        title: "Countertops & Surfaces",
        tagline: "Enduring materials that define the workspace.",
        catalogueUrl: "#",
        images: [
          "/images/collections/kitchen-2.jpg",
          "/images/collections/collection-faucets.jpg",
          "/images/collections/kitchen-1.jpg",
          "/images/about/about-sourcing.jpg",
        ],
      },
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

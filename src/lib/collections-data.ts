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
  stories: ProductStory[];
}

export const collections: Collection[] = [
  {
    slug: "furniture",
    title: "Furniture",
    tagline: "Pieces that speak before you enter the room.",
    image: "/images/collection-furniture.jpg",
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
        slug: "dining-statements",
        title: "Dining Statements",
        description:
          "Tables and chairs that turn a meal into an occasion. Crafted for proportion, built for decades.",
        materials: "Sintered stone top · Brushed brass legs · Fabric or leather upholstery",
        image: "/images/collection-furniture.jpg",
      },
      {
        slug: "bedroom-retreats",
        title: "Bedroom Retreats",
        description:
          "Where the day ends and quality begins. Beds engineered for silence and comfort.",
        materials: "Solid ash frame · Premium upholstery · Integrated storage systems",
        image: "/images/collection-furniture.jpg",
      },
      {
        slug: "storage-architecture",
        title: "Storage Architecture",
        description:
          "Wardrobes and shelving that disappear into the wall or command the room. Your choice.",
        materials: "MDF with lacquer finish · Soft-close hardware · Tempered glass inserts",
        image: "/images/collection-furniture.jpg",
      },
      {
        slug: "outdoor-editions",
        title: "Outdoor Editions",
        description:
          "Weather-resistant doesn't mean compromise-ready. Outdoor furniture that belongs indoors.",
        materials: "Powder-coated aluminium · UV-resistant rope weave · Marine-grade cushions",
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
    slug: "kitchen",
    title: "Kitchen Systems",
    tagline: "Kitchens that speak first.",
    image: "/images/collection-kitchen.jpg",
    stories: [
      {
        slug: "modular-islands",
        title: "Modular Islands",
        description:
          "The centre of the home, engineered for flow. Islands that integrate sink, storage, and show.",
        materials: "Sintered stone · Handleless cabinetry · Integrated LED lighting",
        image: "/images/collection-kitchen.jpg",
      },
      {
        slug: "wall-systems",
        title: "Wall Systems",
        description:
          "Floor-to-ceiling kitchen architecture. Everything hidden, everything accessible.",
        materials: "Anti-fingerprint matte · Soft-close mechanisms · Internal organisers",
        image: "/images/collection-kitchen.jpg",
      },
      {
        slug: "pantry-units",
        title: "Pantry Units",
        description:
          "Walk-in or pull-out. Pantry systems designed for serious kitchens with real demands.",
        materials: "Solid wood shelving · Steel pull-out baskets · Glass-front options",
        image: "/images/collection-kitchen.jpg",
      },
      {
        slug: "prep-stations",
        title: "Prep Stations",
        description:
          "Dedicated work surfaces for kitchens that cook. Butcher blocks, integrated sinks, knife storage.",
        materials: "End-grain hardwood · Stainless steel · Integrated drainage",
        image: "/images/collection-kitchen.jpg",
      },
      {
        slug: "bar-counters",
        title: "Bar & Counter Units",
        description:
          "Where the kitchen meets the living room. Breakfast bars and serving counters built for conversation.",
        materials: "Natural stone · Brass footrail · Leather-topped stools",
        image: "/images/collection-kitchen.jpg",
      },
      {
        slug: "hardware-fittings",
        title: "Hardware & Fittings",
        description:
          "The details that define the kitchen. Handles, hinges, and fittings sourced for touch and longevity.",
        materials: "Brushed brass · Matte black steel · Ceramic knobs",
        image: "/images/collection-kitchen.jpg",
      },
    ],
  },
  {
    slug: "faucets",
    title: "Faucets",
    tagline: "Where water meets intention.",
    image: "/images/collection-faucets.jpg",
    stories: [
      {
        slug: "kitchen-mixers",
        title: "Kitchen Mixers",
        description:
          "Pull-down, pull-out, or fixed. Kitchen faucets engineered for daily performance and lasting finish.",
        materials: "Solid brass body · Ceramic disc cartridge · PVD gold or chrome finish",
        image: "/images/collection-faucets.jpg",
      },
      {
        slug: "basin-taps",
        title: "Basin Taps",
        description:
          "Tall, wall-mounted, or vessel. Basin taps that define the bathroom's visual language.",
        materials: "Brass construction · Matte black or brushed gold · Aerator technology",
        image: "/images/collection-faucets.jpg",
      },
      {
        slug: "shower-systems",
        title: "Shower Systems",
        description:
          "Rainfall, handheld, or thermostatic. Complete shower systems designed for architecture, not plumbing.",
        materials: "Stainless steel · Concealed valve body · Anti-scald technology",
        image: "/images/collection-faucets.jpg",
      },
      {
        slug: "bath-fillers",
        title: "Bath Fillers",
        description:
          "Freestanding or wall-mounted fillers that complete the bathing experience. Flow without rush.",
        materials: "Solid brass · Floor-standing base · High-flow cartridge",
        image: "/images/collection-faucets.jpg",
      },
      {
        slug: "accessories",
        title: "Bath Accessories",
        description:
          "Towel bars, robe hooks, soap dispensers. The finishing touches that unify the bathroom.",
        materials: "Matching PVD finishes · Concealed mounting · Solid construction",
        image: "/images/collection-faucets.jpg",
      },
    ],
  },
  {
    slug: "lighting",
    title: "Lighting",
    tagline: "Light that knows where to fall.",
    image: "/images/collection-lighting.jpg",
    stories: [
      {
        slug: "pendant-series",
        title: "Pendant Series",
        description:
          "Single drops or clustered installations. Pendants that anchor a room from above.",
        materials: "Mouth-blown glass · Brass suspension · LED-compatible",
        image: "/images/collection-lighting.jpg",
      },
      {
        slug: "chandelier-editions",
        title: "Chandelier Editions",
        description:
          "Not decorative — architectural. Chandeliers scaled for double-height entries and dining halls.",
        materials: "Crystal or glass · Multi-arm brass frame · Dimmable",
        image: "/images/collection-lighting.jpg",
      },
      {
        slug: "wall-sconces",
        title: "Wall Sconces",
        description:
          "Ambient light without the fixture feeling. Sconces that wash walls with warmth.",
        materials: "Cast aluminium · Linen or glass shade · Warm LED",
        image: "/images/collection-lighting.jpg",
      },
      {
        slug: "floor-table",
        title: "Floor & Table Lamps",
        description:
          "Sculptural light for corners and surfaces. Each lamp is a presence, not an afterthought.",
        materials: "Marble base · Fabric shade · Touch dimmer",
        image: "/images/collection-lighting.jpg",
      },
      {
        slug: "outdoor-lighting",
        title: "Outdoor Lighting",
        description:
          "Garden, pathway, and facade lighting engineered for weather and designed for architecture.",
        materials: "Marine-grade aluminium · IP65 rated · Warm white LED",
        image: "/images/collection-lighting.jpg",
      },
      {
        slug: "recessed-systems",
        title: "Recessed & Track Systems",
        description:
          "The light you feel but don't see. Recessed and track systems for galleries, hallways, and kitchens.",
        materials: "Die-cast housing · Adjustable beam angle · CRI 95+",
        image: "/images/collection-lighting.jpg",
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
    id: "lev-furniture-2",
    title: "Lev Furniture 2",
    category: "Furniture",
    // Replace this string with your actual Google Drive share link!
    driveUrl: "#", 
  },
  {
    id: "kitchen-systems-v1",
    title: "Kitchen Systems Vol. 1",
    category: "Kitchens",
    // Replace this string with your actual Google Drive share link!
    driveUrl: "#", 
  },
  {
    id: "architectural-lighting",
    title: "Architectural Lighting",
    category: "Lighting",
    // Replace this string with your actual Google Drive share link!
    driveUrl: "#", 
  }
];

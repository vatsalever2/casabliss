import type { Metadata } from "next";
import CollectionTile from "@/components/ui/CollectionTile";
import { collections } from "@/lib/collections-data";
import SectionReveal from "@/components/ui/SectionReveal";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Explore Casa Bliss collections — premium furniture, kitchen systems, designer faucets, and architectural lighting sourced from China's finest factories.",
};

export default function CollectionsPage() {
  return (
    <div className="pt-32 md:pt-40 pb-20 md:pb-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <SectionReveal>
          <div className="text-center mb-16 md:mb-24">
            <p className="text-eyebrow text-gold/60 mb-4">Collections</p>
            <h1 className="text-display text-4xl md:text-5xl lg:text-6xl text-off-white mb-6">
              The Collection
            </h1>
            <p className="text-lg text-cream/50 max-w-lg mx-auto">
              Four categories. Each one curated from a network of factories we&apos;ve spent years building.
            </p>
          </div>
        </SectionReveal>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {collections.map((collection, index) => (
            <CollectionTile
              key={collection.slug}
              href={`/collections/${collection.slug}`}
              title={collection.title}
              image={collection.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import CollectionTile from "@/components/ui/CollectionTile";
import { collections, masterCatalogues } from "@/lib/collections-data";
import SectionReveal from "@/components/ui/SectionReveal";
import CatalogueCard from "@/components/ui/CatalogueCard";

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-32 md:mb-48">
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

        {/* Digital Sourcebooks (Catalogues) Section */}
        <SectionReveal>
          <div className="mb-12 border-t border-gold/10 pt-16">
            <h2 className="text-display text-3xl md:text-4xl text-off-white mb-4">
              Digital Sourcebooks
            </h2>
            <p className="text-cream/50 max-w-xl">
              Access our comprehensive library of factory-direct catalogues and internal sourcing documents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {masterCatalogues.map((catalogue) => (
              <CatalogueCard
                key={catalogue.id}
                title={catalogue.title}
                category={catalogue.category}
                driveUrl={catalogue.driveUrl}
              />
            ))}
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}

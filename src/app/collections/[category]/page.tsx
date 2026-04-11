import type { Metadata } from "next";

import Link from "next/link";
import { notFound } from "next/navigation";
import { collections, getCollection } from "@/lib/collections-data";
import SectionReveal from "@/components/ui/SectionReveal";
import CatalogDownloadTray from "@/components/ui/CatalogDownloadTray";
import PremiumImage from "@/components/ui/PremiumImage";
import { getLocalImageBlur } from "@/lib/getImageBlur";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return collections.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const collection = getCollection(category);
  if (!collection) return {};

  return {
    title: collection.title,
    description: `Explore the ${collection.title} collection by Casa Bliss — ${collection.tagline}`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const collection = getCollection(category);

  if (!collection) {
    notFound();
  }

  // Pre-generate the 10-byte blurry Base64 placeholder for the main hero image
  const collectionHeroBlur = await getLocalImageBlur(collection.image);

  return (
    <div className="pt-32 md:pt-40 pb-20 md:pb-32 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <SectionReveal>
          <nav className="mb-12 flex items-center gap-2 text-sm text-cream/40">
            <Link href="/collections" className="hover:text-gold transition-colors duration-300">
              Collections
            </Link>
            <span>→</span>
            <span className="text-cream/70">{collection.title}</span>
          </nav>
        </SectionReveal>

        {/* Hero */}
        <SectionReveal>
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-sm mb-16 md:mb-24">
            <PremiumImage
              src={collection.image}
              alt={collection.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
              blurDataURL={collectionHeroBlur}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-ink/80 to-transparent" />
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
              <p className="text-eyebrow text-gold/80 mb-3">{collection.title}</p>
              <p className="text-heading text-2xl md:text-3xl text-off-white max-w-lg">
                {collection.tagline}
              </p>
            </div>
          </div>
        </SectionReveal>

        {/* Product Stories - Massively Scaled */}
        <div className="flex flex-col gap-32 md:gap-40">
          {await Promise.all(collection.stories.map(async (story, index) => {
            const isEven = index % 2 === 0;
            const storyBlur = await getLocalImageBlur(story.image);
            
            return (
              <div key={story.slug} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 relative`}>
                
                {/* Huge Background Numeral */}
                <div className={`absolute top-1/2 -translate-y-1/2 ${isEven ? 'left-[-5%]' : 'right-[-5%]'} text-[12rem] md:text-[25rem] font-serif font-light text-off-white/5 pointer-events-none select-none z-0 tracking-tighter`}>
                  0{index + 1}
                </div>

                {/* Image */}
                <div className="w-full md:w-[60%] z-10 relative">
                    <div className="block group relative w-full aspect-[4/5] md:aspect-[4/3] overflow-hidden">
                        <div className="w-full h-full relative">
                          <PremiumImage 
                            src={story.image} 
                            alt={story.title} 
                            fill 
                            className="object-cover" 
                            sizes="(max-width: 768px) 100vw, 60vw"
                            blurDataURL={storyBlur}
                          />
                        </div>
                    </div>
                </div>

                {/* Typography Block */}
                <div className={`w-full md:w-[40%] flex flex-col z-20 mt-8 md:mt-0 relative ${isEven ? 'md:pl-8' : 'md:pr-8'}`}>
                  <SectionReveal>
                    <h3 className="text-display text-4xl md:text-5xl lg:text-6xl text-off-white mb-6">
                      {story.title}
                    </h3>
                    <p className="text-cream/60 text-lg md:text-xl font-light mb-6 max-w-md">
                      {story.description}
                    </p>
                    <p className="text-xs text-gold/60 uppercase tracking-widest font-sans mb-10">
                      {story.materials}
                    </p>
                    <div className="pt-2">
                      <CatalogDownloadTray
                        categoryName={collection.title}
                        pdfUrl={collection.catalogueUrl}
                      />
                    </div>
                  </SectionReveal>
                </div>

              </div>
            );
          }))}
        </div>

        {/* Bottom CTA */}
        <SectionReveal>
          <div className="text-center mt-24 md:mt-32">
            <div className="w-12 h-px bg-gold/30 mx-auto mb-10" />
            <p className="text-cream/40 text-sm mb-6">
              Interested in this collection?
            </p>
            <Link
              href="/inquire"
              className="gold-link text-heading text-xl text-off-white"
            >
              Tell us about your project
            </Link>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}

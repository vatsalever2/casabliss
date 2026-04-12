import type { Metadata } from "next";

import Link from "next/link";
import { notFound } from "next/navigation";
import { collections, getCollection } from "@/lib/collections-data";
import SectionReveal from "@/components/ui/SectionReveal";
import CurtainReveal from "@/components/ui/CurtainReveal";
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
    <div className="relative w-full bg-soft-black">

      {/* Act I: The Hero Initiation (Full Bleed) */}
      <section className="relative w-full overflow-hidden flex flex-col justify-between pt-28 md:pt-36 lg:pt-40 pb-16 md:pb-24 px-6 md:px-12 lg:px-24 min-h-[85vh] lg:min-h-screen">
        
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <PremiumImage
            src={collection.image}
            alt={collection.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
            blurDataURL={collectionHeroBlur}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-soft-black via-deep-ink/40 to-transparent" />
        </div>
        
        {/* Top: Isolated Premium Breadcrumb Anchor */}
        <div className="relative z-30 w-full mb-12">
           <SectionReveal>
             <nav className="inline-flex items-center gap-4 px-6 py-2.5 bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl rounded-sm">
               <Link 
                 href="/collections" 
                 className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-sans text-white/50 hover:text-gold transition-colors duration-500"
               >
                 Collections
               </Link>
               <span className="w-px h-3 bg-gold/40" />
               <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-sans text-off-white">
                 {collection.title}
               </span>
             </nav>
           </SectionReveal>
        </div>

        {/* Bottom: Hero Title Block */}
        <div className="relative z-30 w-full max-w-4xl mt-auto">
          <SectionReveal>
            <div className="flex items-center gap-4 mb-6">
               <div className="w-10 md:w-16 h-px bg-gold/40" />
               <p className="text-[10px] md:text-xs text-gold uppercase tracking-[0.4em] font-sans">
                 Discipline
               </p>
            </div>
            
            <h1 className="text-display font-light text-5xl md:text-7xl lg:text-8xl xl:text-[8rem] text-off-white mb-6 drop-shadow-2xl leading-[1.1] tracking-tight">
              {collection.title}.
            </h1>
            
            <p className="text-serif italic font-light text-cream/80 text-lg md:text-2xl lg:text-3xl leading-relaxed tracking-wide drop-shadow-md max-w-2xl text-balance">
              {collection.tagline}
            </p>
          </SectionReveal>
        </div>
        
      </section>

      {/* Act II: The Philosophy Editorial */}
      <section className="py-24 md:py-48 w-full px-6 md:px-12 lg:px-24 bg-soft-black relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-full max-w-2xl bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32 relative z-10">
          
          {/* Left: Section Header & Accent */}
          <div className="w-full lg:w-1/4 flex flex-col border-t border-gold/20 pt-8">
            <SectionReveal>
               <div className="flex justify-between items-start">
                 <span className="text-gold uppercase tracking-[0.4em] text-[10px] md:text-xs font-sans">
                   02
                 </span>
                 <span className="text-white/30 uppercase tracking-[0.2em] text-[10px] font-sans hidden sm:block">
                   Manifesto
                 </span>
               </div>
               <h2 className="text-lg md:text-xl text-off-white mt-8 tracking-wider font-light uppercase">
                 Our Philosophy
               </h2>
               
               {/* Decorative Abstract Element */}
               <div className="mt-16 w-16 h-16 rounded-full border border-gold/10 flex items-center justify-center relative hidden md:flex">
                  <div className="absolute w-full h-px bg-gold/10" />
                  <div className="absolute h-full w-px bg-gold/10" />
                  <div className="w-2 h-2 bg-gold/40 rounded-full z-10" />
               </div>
            </SectionReveal>
          </div>

          {/* Right: The Manifesto */}
          <div className="w-full lg:w-3/4 flex flex-col justify-center border-t border-white/5 pt-8">
            <SectionReveal delay={0.2}>
               {/* Editorial Drop Cap implementation */}
               <p className="text-display font-light text-3xl md:text-4xl lg:text-5xl text-off-white/90 leading-[1.4] md:leading-[1.3] tracking-wide text-pretty
                  first-letter:text-7xl first-letter:md:text-[7rem] first-letter:lg:text-[8rem] first-letter:font-normal first-letter:text-gold first-letter:float-left first-letter:mr-6 lg:first-letter:mr-8 first-letter:mt-1 lg:first-letter:mt-2 first-letter:leading-none">
                 {collection.philosophy}
               </p>

               <div className="mt-16 md:mt-24 flex items-center gap-6">
                 <div className="h-px max-w-[200px] flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
                 <span className="text-[10px] md:text-xs font-sans uppercase tracking-[0.3em] text-gold/40">Casa Bliss Architecture</span>
               </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Act III: The Gallery Array (Editorial Offset Grid on PC) */}
      <section className="w-full bg-deep-ink">
        <div className="flex overflow-x-auto overflow-y-hidden gap-4 px-4 md:px-12 lg:px-24 md:grid md:grid-cols-12 md:gap-x-8 md:gap-y-32 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-8 md:py-32">
           {await Promise.all(collection.gallery.map(async (img, i) => {
               const imgBlur = await getLocalImageBlur(img);
               
               // Desktop Editorial Grid Logic (cycles every 4 images)
               let desktopClass = "";
               let desktopSizes = "";
               const patternIndex = i % 4;
               
               if (patternIndex === 0) {
                 // Image 1: Massive cinematic lead
                 desktopClass = "md:col-span-12 md:col-start-1 md:aspect-[21/9]";
                 desktopSizes = "(max-width: 768px) 85vw, 100vw";
               } else if (patternIndex === 1) {
                 // Image 2: Staggered left portrait
                 desktopClass = "md:col-span-5 md:col-start-2 md:aspect-[3/4] md:mt-48";
                 desktopSizes = "(max-width: 768px) 85vw, 40vw";
               } else if (patternIndex === 2) {
                 // Image 3: Standard right portrait, floating higher up
                 desktopClass = "md:col-span-4 md:col-start-8 md:aspect-[4/5]";
                 desktopSizes = "(max-width: 768px) 85vw, 33vw";
               } else {
                 // Image 4: Centered wide conclusion
                 desktopClass = "md:col-span-8 md:col-start-3 md:aspect-[16/9] md:mt-24";
                 desktopSizes = "(max-width: 768px) 85vw, 70vw";
               }
               
               return (
                 <div key={i} className={`relative overflow-hidden group flex-shrink-0 w-[85vw] snap-center aspect-[4/5] md:w-auto md:snap-align-none bg-black rounded-sm md:rounded-none ${desktopClass}`}>
                    <div className="w-full h-full relative">
                        <PremiumImage 
                          src={img} 
                          fill 
                          alt={`${collection.title} Space ${i + 1}`}
                          className="object-cover transition-transform duration-[3s] ease-out md:group-hover:scale-[1.05]"
                          sizes={desktopSizes}
                          blurDataURL={imgBlur}
                        />
                        
                        {/* Mobile Overlay (Always visible gradient for text readability) */}
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-soft-black via-soft-black/50 to-transparent opacity-90 md:opacity-0 pointer-events-none" />
                        
                        {/* Desktop Overlay (Darkened, clears on hover) */}
                        <div className="absolute inset-0 hidden md:block bg-black/40 xl:bg-black/60 transition-colors duration-1000 group-hover:bg-transparent mix-blend-multiply pointer-events-none" />
                        
                        {/* Architectural Metadata Overlay */}
                        <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 flex flex-col opacity-100 translate-y-0 md:opacity-0 md:group-hover:opacity-100 transition-all duration-700 md:translate-y-4 md:group-hover:translate-y-0 z-10 pointer-events-none leading-none">
                           <span className="text-gold uppercase tracking-[0.4em] text-[10px] md:text-xs font-sans mb-2 md:mb-3 drop-shadow-md">
                             Plate 0{i + 1}
                           </span>
                           <h3 className="text-off-white font-display text-2xl md:text-4xl lg:text-5xl drop-shadow-2xl tracking-wide">
                             {collection.title}
                           </h3>
                        </div>
                    </div>
                 </div>
               );
           }))}
        </div>
      </section>

      {/* Act IV: The Catalogues */}
      <section className="w-full bg-soft-black relative overflow-hidden flex flex-col items-center py-20 px-6">
        <SectionReveal>
          {/* Refined, minimal elegant card */}
          <div className="relative z-10 w-full max-w-5xl mx-auto border border-white/5 bg-deep-ink p-10 md:p-16 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-10">
             
             <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent pointer-events-none" />

             {/* Text Block */}
             <div className="flex flex-col items-center md:items-start max-w-lg relative z-20">
               <div className="w-12 h-px bg-gold/30 mb-4 hidden md:block" />
               <p className="text-[10px] md:text-xs text-gold/80 uppercase tracking-[0.4em] font-sans mb-3 md:mb-4">
                 Access The Archives
               </p>
               <h2 className="text-display font-light text-4xl md:text-5xl text-off-white mb-4 leading-tight tracking-tight">
                 {collection.title} Catalogue.
               </h2>
               <p className="text-cream/50 font-light leading-relaxed text-sm md:text-base tracking-wide text-balance">
                 Review pristine dimensions, architectural material finishes, and global freight parameters direct from the factory floor.
               </p>
             </div>

             {/* Minimal Download Button */}
             <div className="flex-shrink-0 relative z-20">
                <a 
                  href={collection.catalogueUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center border border-gold/30 bg-gold/5 px-8 md:px-10 py-4 md:py-5 text-[10px] md:text-xs uppercase tracking-[0.25em] font-sans text-off-white hover:bg-gold hover:text-deep-ink hover:border-gold transition-all duration-500"
                >
                  <span className="relative z-10 flex items-center gap-4">
                    <span>View Catalogue</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </a>
             </div>
             
          </div>
        </SectionReveal>
      </section>

      {/* Bottom Navigation */}
      <section className="w-full bg-soft-black py-16 flex justify-center">
        <SectionReveal>
          <Link
            href="/collections"
            className="inline-flex relative items-center gap-4 text-[10px] md:text-xs font-sans uppercase tracking-[0.4em] text-cream/40 hover:text-gold transition-colors pb-2 before:absolute before:bottom-0 before:left-0 before:w-full before:h-px before:bg-gold/10 hover:before:bg-gold before:transition-colors"
          >
            <span>←</span>
            <span>Back to Menu</span>
          </Link>
        </SectionReveal>
      </section>
    </div>
  );
}

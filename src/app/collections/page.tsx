import type { Metadata } from "next";
import CollectionsAccordion from "@/components/ui/CollectionsAccordion";
import { collections, masterCatalogueUrl } from "@/lib/collections-data";
import SectionReveal from "@/components/ui/SectionReveal";
import Magnetic from "@/components/ui/Magnetic";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Explore Casa Bliss collections — premium Living Room, Bedroom, Dining, and Storage & Decor solutions sourced direct from China's finest factories.",
};

export default function CollectionsPage() {
  return (
    <div className="w-full h-[100svh] overflow-hidden bg-soft-black flex flex-col">
      {/* Cinematic Title Card */}
      <div className="w-full flex-shrink-0 flex flex-col items-center justify-center text-center pt-24 md:pt-32 pb-6 md:pb-10">
        <SectionReveal>
           <div className="flex items-center gap-4 md:gap-6 mb-4 justify-center">
               <div className="w-6 md:w-12 h-px bg-gold/30" />
               <span className="text-gold/60 text-[10px] md:text-xs tracking-[0.4em] uppercase font-sans">
                 Menu
               </span>
               <div className="w-6 md:w-12 h-px bg-gold/30" />
            </div>
          <h1 className="text-display font-light text-5xl md:text-7xl lg:text-[7rem] text-off-white tracking-tight leading-none mb-6">
            Collections.
          </h1>

          <div className="flex justify-center w-full">
            <Magnetic strength={15}>
              <a 
                href={masterCatalogueUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center border border-gold/30 bg-gold/5 px-6 md:px-8 py-3 text-[10px] md:text-xs uppercase tracking-[0.2em] font-sans text-off-white hover:bg-gold hover:text-deep-ink hover:border-gold transition-all duration-500"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <span>View Master Catalogue</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </a>
            </Magnetic>
          </div>
        </SectionReveal>
      </div>

      {/* The Frame Motion Fluid Accordion — Full Bleed */}
      <div className="w-full flex-1 min-h-0 flex flex-col">
         <CollectionsAccordion collections={collections} />
      </div>
    </div>
  );
}

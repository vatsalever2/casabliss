import type { Metadata } from "next";
import CollectionsAccordion from "@/components/ui/CollectionsAccordion";
import { collections } from "@/lib/collections-data";
import SectionReveal from "@/components/ui/SectionReveal";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Explore Casa Bliss collections — premium Living Room, Bedroom, Dining, and Storage & Decor solutions sourced direct from China's finest factories.",
};

export default function CollectionsPage() {
  return (
    <div className="w-full min-h-screen bg-soft-black flex flex-col">
      {/* Cinematic Title Card */}
      <div className="w-full flex flex-col items-center justify-center text-center pt-36 pb-12 md:pt-44 md:pb-16">
        <SectionReveal>
           <div className="flex items-center gap-6 mb-6 justify-center">
               <div className="w-8 md:w-16 h-px bg-gold/30" />
               <span className="text-gold/60 text-[10px] md:text-xs tracking-[0.4em] uppercase font-sans">
                 Menu
               </span>
               <div className="w-8 md:w-16 h-px bg-gold/30" />
            </div>
          <h1 className="text-display font-light text-6xl md:text-8xl lg:text-[9rem] text-off-white tracking-tight leading-none">
            Collections.
          </h1>
        </SectionReveal>
      </div>

      {/* The Frame Motion Fluid Accordion — Full Bleed */}
      <div className="w-full h-[70vh] md:h-[80vh] flex flex-col">
         <CollectionsAccordion collections={collections} />
      </div>
    </div>
  );
}

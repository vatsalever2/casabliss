"use client";

import { motion } from "framer-motion";
import PremiumImage from "@/components/ui/PremiumImage";

export default function ChapterIII_Showroom() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-7xl mx-auto pr-8 pl-[4.5rem] md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-32 relative"
    >
      <div className="w-full md:w-[45%] flex flex-col text-left md:text-right items-start md:items-end order-2 md:order-1 ml-auto">
        <span className="text-gold font-serif text-3xl mb-6 block italic opacity-80">III.</span>
        <h2 className="text-display text-4xl md:text-6xl text-off-white leading-tight mb-6 md:mb-8">
          You arrive.<br/><i className="italic font-light text-gold/90">The floor is yours.</i>
        </h2>
        <p className="text-sans text-cream/60 text-[15px] md:text-lg leading-relaxed max-w-sm mb-12">
          The showroom spans three floors of curated living — furniture systems, kitchen installations, material libraries. Walk it with our team. Nothing is roped off. Every door is open.
        </p>

        <div className="flex gap-10 md:gap-12 text-left md:text-right">
           <div className="flex flex-col items-start md:items-end">
             <span className="text-display text-3xl md:text-4xl text-off-white">3</span>
             <span className="text-eyebrow text-gold/60 text-[10px] mt-1 text-left md:text-right w-full">Floors</span>
           </div>
           <div className="w-px h-10 md:h-12 bg-gold/20" />
           <div className="flex flex-col items-start md:items-end">
             <span className="text-display text-3xl md:text-4xl text-off-white">200+</span>
             <span className="text-eyebrow text-gold/60 text-[10px] mt-1 text-left md:text-right w-full">Brands</span>
           </div>
        </div>
      </div>

      <div className="w-full md:w-[45%] h-[40vh] md:h-[80vh] relative order-1 md:order-2 mr-auto overflow-hidden">
        <PremiumImage 
          src="/images/hero-home.jpg" 
          alt="Foshan Showroom" 
          fill 
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover opacity-90 transition-transform duration-[20s] ease-linear hover:scale-110"
        />
        <div className="absolute inset-0 border border-gold/10" />
      </div>
    </motion.div>
  );
}

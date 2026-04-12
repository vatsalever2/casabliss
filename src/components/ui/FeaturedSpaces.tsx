"use client";

import PremiumImage from "./PremiumImage";
import SectionReveal from "./SectionReveal";
import CurtainReveal from "./CurtainReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FeaturedSpaces() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={scrollRef} className="py-24 md:py-32 px-6 lg:px-12 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-off-white/10 to-transparent" />
      
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Typography */}
        <div className="w-full md:w-1/3 flex flex-col pt-12 md:pt-0">
          <SectionReveal>
            <span className="text-gold/60 text-xs md:text-sm tracking-[0.2em] uppercase font-sans mb-6 block">
              The Gallery
            </span>
            <h2 className="text-display text-4xl lg:text-5xl xl:text-6xl text-off-white leading-tight mb-8">
              Spaces defined by <br/> <i className="italic font-light text-gold/90">silence</i> and scale.
            </h2>
            <p className="text-sans text-cream/70 text-lg leading-relaxed max-w-sm">
              Explore how our curated pieces interact within high-end architectural environments. 
              Pure material presence, unfiltered.
            </p>
          </SectionReveal>
        </div>

        {/* Right Side: Parallax Grid */}
        <div className="w-full md:w-2/3 grid grid-cols-2 gap-4 sm:gap-8 md:gap-12 relative min-h-[50vh] md:min-h-[80vh]">
          
          <motion.div style={{ y: y1 }} className="flex flex-col gap-4 sm:gap-8 md:gap-12 mt-12 md:mt-24 z-10 relative">
            <div className="relative aspect-[3/4] w-full group">
              <div className="w-full h-full relative overflow-hidden">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }} className="w-full h-full relative">
                  <PremiumImage src="/images/gallery-1.jpg" alt="Architectural Storage" fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div style={{ y: y2 }} className="flex flex-col gap-4 sm:gap-8 md:gap-12 z-20 relative">
            <div className="relative aspect-square w-full group">
              <div className="w-full h-full relative overflow-hidden">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }} className="w-full h-full relative">
                  <PremiumImage src="/images/gallery-2.jpg" alt="Curated Bedroom Piece" fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </motion.div>
              </div>
            </div>
            
            <div className="relative aspect-[4/3] w-full group">
              <div className="w-full h-full relative overflow-hidden">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }} className="w-full h-full relative">
                  <PremiumImage src="/images/gallery-3.jpg" alt="Dining Environment" fill className="object-cover grayscale-[20%]" sizes="(max-width: 768px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </motion.div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ChapterV_Shipment() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-7xl mx-auto pr-8 pl-[4.5rem] md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-32 relative"
    >
      <div className="w-full md:w-[45%] flex flex-col text-left md:text-right items-start md:items-end order-2 md:order-1 ml-auto">
        <span className="text-gold font-serif text-3xl mb-6 block italic opacity-80">V.</span>
        <h2 className="text-display text-4xl md:text-6xl text-off-white leading-tight mb-6 md:mb-8">
          From Foshan to <br className="hidden md:block"/><i className="italic font-light text-gold/90">your foyer.</i>
        </h2>
        <p className="text-sans text-cream/60 text-[15px] md:text-lg leading-relaxed max-w-sm mb-10 md:mb-12">
          The logistical chain is absolute. We handle 100% customs clearance from factory floor to your shores. Securely crated, meticulously insured, and tracked until it arrives perfectly at your property.
        </p>

        <div className="flex gap-10 md:gap-12 text-left md:text-right">
           <div className="flex flex-col items-start md:items-end">
             <span className="text-display text-3xl md:text-4xl text-off-white">6-8</span>
             <span className="text-eyebrow text-gold/60 text-[10px] mt-1 text-left md:text-right w-full">Weeks Transit</span>
           </div>
           <div className="w-px h-10 md:h-12 bg-gold/20" />
           <div className="flex flex-col items-start md:items-end">
             <span className="text-display text-3xl md:text-4xl text-off-white">100%</span>
             <span className="text-eyebrow text-gold/60 text-[10px] mt-1 text-left md:text-right w-full">Insured</span>
           </div>
        </div>
      </div>

      <div className="w-full md:w-[45%] relative order-1 md:order-2 mr-auto flex justify-center items-center h-[200px] md:h-[300px]">
        {/* Animated Map Element instead of Image */}
        <svg viewBox="0 0 800 400" className="w-full h-full drop-shadow-[0_0_20px_rgba(212,175,55,0.15)] overflow-visible">
          
          {/* Ethereal Glow Arc */}
          <motion.path 
            d="M 650,250 Q 400,0 150,250" 
            className="stroke-gold/20 fill-none stroke-[4]"
            style={{ pathLength }}
            filter="blur(8px)"
          />
          
          {/* Sharp Main Arc */}
          <motion.path 
            d="M 650,250 Q 400,0 150,250" 
            className="stroke-gold/80 fill-none stroke-[2]"
            strokeDasharray="6 12"
            style={{ pathLength }}
          />
          
          {/* Pulsing Nodes - Foshan */}
          <circle cx="650" cy="250" r="5" className="fill-gold" />
          <motion.circle 
            cx="650" cy="250" r="24" className="stroke-gold/50 fill-none stroke-1" 
            initial={{ scale: 0.2, opacity: 1 }} animate={{ scale: 1.5, opacity: 0 }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeOut" }} 
          />
          
          {/* Pulsing Nodes - Destination */}
          <circle cx="150" cy="250" r="5" className="fill-gold" />
          <motion.circle 
            cx="150" cy="250" r="24" className="stroke-gold/50 fill-none stroke-1" 
            initial={{ scale: 0.2, opacity: 1 }} animate={{ scale: 1.5, opacity: 0 }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeOut", delay: 1.25 }} 
          />
          
          <text x="670" y="255" className="fill-cream text-[14px] md:text-[14px] tracking-[0.25em] font-sans uppercase drop-shadow-md">Foshan</text>
          {/* Two text nodes for responsive positioning */}
          <text x="-50" y="255" className="fill-cream text-[14px] tracking-[0.25em] font-sans uppercase drop-shadow-md md:hidden">Your City</text>
          <text x="30" y="255" className="fill-cream text-[14px] tracking-[0.25em] font-sans uppercase drop-shadow-md hidden md:block">Your City</text>
        </svg>
      </div>
    </motion.div>
  );
}

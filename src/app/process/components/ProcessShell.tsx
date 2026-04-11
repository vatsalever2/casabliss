"use client";

import { useRef, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import ChapterI_Inquiry from "./ChapterI_Inquiry";
import ChapterII_Visa from "./ChapterII_Visa";
import ChapterIII_Showroom from "./ChapterIII_Showroom";
import ChapterIV_Designer from "./ChapterIV_Designer";
import ChapterV_Shipment from "./ChapterV_Shipment";
import ChapterVI_Handover from "./ChapterVI_Handover";

export default function ProcessShell() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const w = window as any;
    let oldDuration = 1.5;
    if (w.lenis && w.lenis.options) {
      oldDuration = w.lenis.options.duration;
      w.lenis.options.duration = 2.0; 
    }
    return () => {
      if (w.lenis && w.lenis.options) {
        w.lenis.options.duration = oldDuration;
      }
    };
  }, []);

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative w-full bg-deep-ink flex flex-col min-h-screen">
        
        {/* Physical Absolute Passage Line - Bound to the content height */}
        <div className="absolute top-[35vh] bottom-[15vh] left-8 md:left-1/2 md:-translate-x-1/2 w-[2px] z-0 pointer-events-none mix-blend-screen">
          
          {/* Subtle static background line with fade at top/bottom */}
          <div className="absolute inset-0 w-full bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
          
          {/* Active Progress Fill Line (Trailing Light) */}
          <motion.div 
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-transparent via-gold/60 to-gold shadow-[0_0_8px_rgba(212,175,55,0.3)] origin-top"
            style={{ height: lineHeight }}
          />

          {/* Golden Aura Glow (follows cursor) */}
          <motion.div
             className="absolute left-[1px] -translate-x-1/2 w-[40px] h-[60px] bg-gold/15 blur-[12px] rounded-full"
             style={{ top: lineHeight, y: "-50%" }}
          />
          
          {/* The Elegant Arrow Playhead */}
          <motion.div
             className="absolute left-[1px] -translate-x-1/2 w-[14px] h-[14px] flex items-center justify-center text-gold drop-shadow-[0_0_12px_rgba(212,175,55,1)]"
             style={{ top: lineHeight, y: "-50%" }}
          >
             <svg width="14" height="8" viewBox="0 0 14 8" fill="none" stroke="currentColor" strokeWidth="1.5">
               <path d="M1 1L7 7L13 1" strokeLinecap="square" strokeLinejoin="miter"/>
             </svg>
          </motion.div>
        </div>

        {/* The Vertical Journey Stack */}
        <div className="w-full relative z-10 flex flex-col pt-[15vh] pb-[15vh] gap-[10vh] md:gap-[12vh] overflow-hidden">
          
          {/* Main Process Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-col items-center justify-center text-center px-8 mb-8"
          >
            <span className="text-gold font-sans uppercase tracking-[0.4em] text-xs md:text-sm mb-6 block">The Methodology</span>
            <h1 className="text-display text-5xl md:text-7xl lg:text-8xl text-off-white leading-tight">
              The <i className="italic font-light text-gold/90">Passage.</i>
            </h1>
            <p className="text-sans text-cream/50 max-w-lg mx-auto mt-8 text-sm md:text-base leading-relaxed tracking-wide">
              A meticulously orchestrated journey from concept to absolute completion. Six chapters. Zero compromises.
            </p>
          </motion.div>

          <ChapterI_Inquiry />
          <ChapterII_Visa />
          <ChapterIII_Showroom />
          <ChapterIV_Designer />
          <ChapterV_Shipment />
          <ChapterVI_Handover />
        </div>
    </div>
  );
}

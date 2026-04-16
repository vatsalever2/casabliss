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
    interface LenisWindow extends Window { lenis?: { options?: { duration: number } } }
    const w = window as LenisWindow;
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
    <div ref={containerRef} style={{ position: "relative" }} className="relative w-full bg-deep-ink flex flex-col min-h-screen">
        
        {/* Physical Absolute Passage Line - Bound to the content height */}
        <div className="absolute top-[100vh] bottom-[18vh] left-8 md:left-1/2 md:-translate-x-1/2 w-[2px] z-0 pointer-events-none mix-blend-screen">
          
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
        <div className="w-full relative z-10 flex flex-col pt-[15vh] pb-[20vh] gap-[15vh] md:gap-[20vh] overflow-hidden">
          
          {/* Cinematic Title Card - 100vh Dedicated Screen */}
          <div className="w-full h-[85vh] -mt-[15vh] relative flex flex-col items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex flex-col items-center justify-center text-center px-4"
            >
              {/* Delicate Eyebrow */}
              <div className="flex items-center gap-6 mb-12">
                 <div className="w-12 md:w-20 h-px bg-gold/30" />
                 <span className="text-gold font-sans uppercase tracking-[0.5em] text-[9px] md:text-xs ml-[0.5em]">Methodology</span>
                 <div className="w-12 md:w-20 h-px bg-gold/30" />
              </div>
              
              {/* Massive Cinematic Heading */}
              <h1 className="text-display font-light text-6xl md:text-[8rem] lg:text-[10rem] text-off-white tracking-tight leading-none mb-12 drop-shadow-2xl">
                The Passage.
              </h1>
              
              {/* Elegant Italic Subtext */}
              <p className="text-serif italic font-light text-cream/50 text-xl md:text-3xl max-w-3xl mx-auto leading-relaxed tracking-wide">
                Six chapters of meticulous orchestration. <br className="hidden md:block"/>From factory floor, to absolute perfection.
              </p>
            </motion.div>

            {/* Premium Scroll Indicator */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1.5, delay: 1.5 }}
               className="absolute bottom-4 md:bottom-8 flex flex-col items-center gap-3"
            >
               <span className="text-[8px] md:text-[9px] font-sans uppercase tracking-[0.5em] text-cream/40 ml-[0.5em]">
                 Descend
               </span>
               <div className="w-[1px] h-12 md:h-16 bg-gold/20 relative overflow-hidden flex justify-center">
                  <motion.div 
                     className="absolute w-[2px] h-[8px] bg-gold rounded-full shadow-[0_0_8px_rgba(212,175,55,1)]"
                     animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
                     transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
               </div>
            </motion.div>
          </div>

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

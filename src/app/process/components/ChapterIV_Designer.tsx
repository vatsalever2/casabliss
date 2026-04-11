"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ChapterIV_Designer() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);
  const optionalOpacity = useTransform(scrollYProgress, [0.4, 0.75], [0, 1]);

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-7xl mx-auto pr-8 pl-[4.5rem] md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-32 relative"
    >
      <div className="w-full md:w-[45%] relative order-1 md:order-1 mr-auto flex justify-center items-center h-[250px] md:h-[300px]">
        {/* Abstract Architectural Diagram */}
        <div className="relative z-20 w-[220px] h-[220px] md:w-[320px] md:h-[320px]">
          <svg viewBox="0 0 240 240" className="w-full h-full stroke-gold/40 fill-none stroke-[1] drop-shadow-xl">
            <motion.rect x="30" y="30" width="180" height="180" style={{ pathLength }} className="stroke-gold/30" />
            <motion.path d="M30 100 L120 100 L120 210" style={{ pathLength }} strokeWidth="1.5" />
            <motion.path d="M120 100 L210 100" style={{ pathLength }} strokeWidth="1" strokeDasharray="4 4" />
            <motion.path d="M160 30 L160 100" style={{ pathLength }} strokeWidth="1.5" />
            
            <motion.circle cx="120" cy="100" r="40" style={{ pathLength }} className="stroke-gold/20" strokeDasharray="2 4" />
            <motion.path d="M120 140 A40 40 0 0 1 160 100" style={{ pathLength }} strokeWidth="1.5" />
            
            <motion.circle cx="30" cy="100" r="2" className="fill-gold/60" style={{ opacity: pathLength }} />
            <motion.circle cx="120" cy="100" r="2" className="fill-gold/60" style={{ opacity: pathLength }} />
            <motion.circle cx="160" cy="100" r="2" className="fill-gold/60" style={{ opacity: pathLength }} />
            <motion.circle cx="120" cy="210" r="2" className="fill-gold/60" style={{ opacity: pathLength }} />

            <motion.text
              x="32" y="96" style={{ opacity: optionalOpacity }}
              fontSize="9" fill="rgba(196,164,119,0.8)" fontFamily="serif" fontStyle="italic" letterSpacing="0.5"
            >You</motion.text>
            <motion.text
              x="164" y="96" style={{ opacity: optionalOpacity }}
              fontSize="9" fill="rgba(196,164,119,0.6)" fontFamily="serif" fontStyle="italic" letterSpacing="0.5"
            >Designer</motion.text>
            <motion.line x1="55" y1="93" x2="115" y2="93" stroke="rgba(196,164,119,0.3)" strokeWidth="0.5" strokeDasharray="2 3" style={{ opacity: optionalOpacity }} />
          </svg>
          
          <motion.span 
            style={{ opacity: optionalOpacity }}
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-4 font-sans uppercase tracking-[0.3em] text-[10px] text-cream/40 whitespace-nowrap"
          >
            Optional Integration
          </motion.span>
        </div>
      </div>

      <div className="w-full md:w-[45%] flex flex-col text-left items-start order-2 md:order-2 ml-auto">
        <span className="text-gold font-serif text-3xl mb-6 block italic opacity-80">IV.</span>
        <h2 className="text-display text-4xl md:text-6xl text-off-white leading-tight mb-6 md:mb-8">
          Your eye, your team, <br className="hidden md:block"/><i className="italic font-light text-gold/90">your call.</i>
        </h2>
        <p className="text-sans text-cream/60 text-[15px] md:text-lg leading-relaxed max-w-sm">
          Your interior designer or architect is welcome at every stage. Separate visa arrangements are available on request. This chapter is yours to share, providing absolute creative fidelity to your original blueprint.
        </p>
      </div>
    </motion.div>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ChapterII_Visa() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const drawSvg = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

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
        {/* Visa Stamp Graphic instead of Image */}
        <div className="relative w-[220px] h-[220px] md:w-[300px] md:h-[300px] z-20">
          <svg viewBox="0 0 180 180" className="absolute inset-0 w-full h-full drop-shadow-[0_0_15px_rgba(196,164,119,0.1)]">
            {/* Outer stamp ring */}
            <motion.circle
              cx="90" cy="90" r="82"
              fill="none" stroke="rgba(196,164,119,0.8)" strokeWidth="1.5"
              strokeDasharray="6 4"
              style={{ pathLength: drawSvg }}
            />
            {/* Inner ring */}
            <motion.circle
              cx="90" cy="90" r="70"
              fill="none" stroke="rgba(196,164,119,0.4)" strokeWidth="1"
              style={{ pathLength: drawSvg }}
            />
            <defs>
              <path id="topArc" d="M 18,90 A 72,72 0 0,1 162,90" />
              <path id="botArc" d="M 22,96 A 68,68 0 0,0 158,96" />
            </defs>
            <motion.text style={{ opacity: drawSvg }} className="fill-gold text-[10px] tracking-[0.3em] uppercase font-sans drop-shadow-sm">
              <textPath href="#topArc" startOffset="10%">China Business Visa</textPath>
            </motion.text>
            <motion.text style={{ opacity: drawSvg }} className="fill-gold/60 text-[9px] tracking-[0.2em] uppercase font-sans drop-shadow-sm">
              <textPath href="#botArc" startOffset="12%">Arranged End-to-End</textPath>
            </motion.text>
          </svg>
          
          <motion.div
            style={{ opacity: drawSvg, scale: useTransform(drawSvg, [0,1], [0.8, 1]) }}
            className="absolute inset-0 flex flex-col items-center justify-center z-10"
          >
            <span className="text-gold/90 font-serif italic text-3xl md:text-4xl drop-shadow-md">Approved</span>
          </motion.div>
        </div>
      </div>

      <div className="w-full md:w-[45%] flex flex-col text-left items-start order-2 md:order-2 ml-auto">
        <span className="text-gold font-serif text-3xl mb-6 block italic opacity-80">II.</span>
        <h2 className="text-display text-4xl md:text-6xl text-off-white leading-tight mb-6 md:mb-8">
          The Visa.<br/><i className="italic font-light text-gold/90">Handled.</i>
        </h2>
        <p className="text-sans text-cream/60 text-[15px] md:text-lg leading-relaxed max-w-sm">
          Before you walk the grounds in Foshan, we ensure your arrival is effortless. China business visas, appointment scheduling, and all governmental paperwork are managed entirely by our team.
        </p>
      </div>
    </motion.div>
  );
}

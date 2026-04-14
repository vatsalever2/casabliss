"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionReveal from "./SectionReveal";

const advantages = [
  { label: "Factory Direct", detail: "Zero middlemen" },
  { label: "Quality Assured", detail: "On-site inspections" },
  { label: "Exclusive Access", detail: "Before it hits the market" },
  { label: "India & Australia", detail: "White-glove delivery" },
];

export default function GlobalPedigree() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-5%", "3%"]);

  const marqueeWords1 = ["Precision", "Integrity", "Craftsmanship", "Direct", "Exclusive", "Uncompromised"];
  const marqueeWords2 = ["Factory-Floor Control", "Zero Middlemen", "Global Standards", "Local Delivery", "Transparent Sourcing"];

  return (
    <section ref={containerRef} style={{ position: "relative" }} className="py-24 md:py-32 overflow-hidden bg-deep-ink border-t border-gold/10 relative">
      
      {/* Minimal Eyebrow */}
      <div className="max-w-7xl mx-auto px-6 mb-6 md:mb-10">
        <SectionReveal>
          <div className="flex items-center gap-5">
            <div className="w-12 h-px bg-gold/60" />
            <span className="text-gold/80 text-xs md:text-sm tracking-[0.3em] uppercase font-sans">
              The Advantage
            </span>
          </div>
        </SectionReveal>
      </div>

      {/* Scrolling Marquee — Values, not cities */}
      <div className="relative flex flex-col gap-6 md:gap-10 opacity-60 my-12 overflow-hidden">
        
        {/* DESKTOP (Scroll-linked) */}
        <div className="hidden md:flex flex-col gap-10">
          <motion.div style={{ x: x1 }} className="flex gap-16 whitespace-nowrap px-10">
            {[...marqueeWords1, ...marqueeWords1, ...marqueeWords1].map((word, i) => (
              <div key={`desk-w1-${i}`} className="flex items-center gap-16">
                <span className="text-4xl md:text-7xl font-sans text-transparent bg-clip-text bg-gradient-to-r from-off-white/80 to-off-white/15 uppercase tracking-tighter">
                  {word}
                </span>
                <span className="text-gold/30 text-2xl">✦</span>
              </div>
            ))}
          </motion.div>

          <motion.div style={{ x: x2 }} className="flex gap-16 whitespace-nowrap px-10">
            {[...marqueeWords2, ...marqueeWords2, ...marqueeWords2].map((word, i) => (
              <div key={`desk-w2-${i}`} className="flex items-center gap-16">
                <span className="text-4xl md:text-7xl font-sans text-transparent bg-clip-text bg-gradient-to-r from-off-white/80 to-off-white/15 uppercase tracking-tighter">
                  {word}
                </span>
                <span className="text-gold/30 text-2xl">✦</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* MOBILE (Auto-scrolling) */}
        <div className="flex md:hidden flex-col gap-6 w-full">
          <motion.div 
            animate={{ x: [0, "-50%"] }} 
            transition={{ repeat: Infinity, ease: "linear", duration: 200 }}
            className="flex gap-8 whitespace-nowrap w-fit pr-8"
          >
            {[...marqueeWords1, ...marqueeWords1, ...marqueeWords1, ...marqueeWords1].map((word, i) => (
              <div key={`mob-w1-${i}`} className="flex items-center gap-8">
                <span className="text-4xl font-sans text-transparent bg-clip-text bg-gradient-to-r from-off-white/80 to-off-white/15 uppercase tracking-tighter">
                  {word}
                </span>
                <span className="text-gold/30 text-xl">✦</span>
              </div>
            ))}
          </motion.div>

          <motion.div 
            animate={{ x: ["-50%", 0] }} 
            transition={{ repeat: Infinity, ease: "linear", duration: 250 }}
            className="flex gap-8 whitespace-nowrap w-fit pr-8"
          >
            {[...marqueeWords2, ...marqueeWords2, ...marqueeWords2, ...marqueeWords2].map((word, i) => (
              <div key={`mob-w2-${i}`} className="flex items-center gap-8">
                <span className="text-4xl font-sans text-transparent bg-clip-text bg-gradient-to-r from-off-white/80 to-off-white/15 uppercase tracking-tighter">
                  {word}
                </span>
                <span className="text-gold/30 text-xl">✦</span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
      
      {/* Edge Gradients */}
      <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-deep-ink to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-deep-ink to-transparent z-10 pointer-events-none" />

      {/* Advantage Cards */}
      <div className="max-w-6xl mx-auto px-6 mt-20">
        <SectionReveal delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/10 border border-gold/10">
            {advantages.map((adv) => (
              <div key={adv.label} className="bg-deep-ink p-8 md:p-10 flex flex-col items-center text-center group hover:bg-gold/5 transition-colors duration-500">
                <span className="text-off-white text-lg md:text-xl font-light tracking-wide mb-2 group-hover:text-gold transition-colors duration-500">
                  {adv.label}
                </span>
                <span className="text-cream/40 text-xs md:text-sm tracking-[0.15em] uppercase">
                  {adv.detail}
                </span>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

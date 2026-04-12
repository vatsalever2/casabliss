"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SPACES = [
  "Master Bedroom.",
  "Living Room.",
  "Kitchen System.",
  "Home Office.",
  "Dining Space.",
  "Walk-in Wardrobe.",
];

function TypewriterCycle() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = SPACES[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 65);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % SPACES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <div className="flex flex-col items-start gap-4 w-full text-left">
      <span className="text-eyebrow text-gold/30 tracking-[0.25em] uppercase text-xs">Aesthetic Briefing:</span>
      <span className="text-gold/90 font-serif text-4xl md:text-5xl italic h-12 pr-1 relative">
        {displayed}
        <span className="absolute top-[10%] right-[-10px] w-[2px] h-[80%] bg-gold/70 animate-pulse" />
      </span>
    </div>
  );
}

export default function ChapterI_Inquiry() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-7xl mx-auto pr-8 pl-[4.5rem] md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-32 relative"
    >
      <div className="w-full md:w-[45%] flex flex-col text-left md:text-right items-start md:items-end order-2 md:order-1 ml-auto">
        <span className="text-gold font-serif text-3xl mb-6 block italic opacity-80">I.</span>
        <h2 className="text-display text-4xl md:text-6xl text-off-white leading-tight mb-6 md:mb-8">
          Every home begins with a <br className="hidden md:block"/><i className="italic font-light text-gold/90">conversation.</i>
        </h2>
        <p className="text-sans text-cream/60 text-[15px] md:text-lg leading-relaxed max-w-sm">
          Casa Bliss opens with listening — not a catalogue. We gather room types, budget envelopes, reference images, and lifestyle constraints. The process begins with understanding the soul of your space.
        </p>
      </div>

      <div className="w-full md:w-[45%] h-[200px] md:h-[300px] flex items-center justify-start relative order-1 md:order-2 mr-auto px-0 md:px-12 border-l-0 md:border-l border-gold/10 pl-0 md:pl-8">
        <TypewriterCycle />
      </div>
    </motion.div>
  );
}

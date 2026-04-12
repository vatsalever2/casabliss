"use client";

import { motion } from "framer-motion";

export default function ChapterIV_Designer() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-7xl mx-auto pr-8 pl-[4.5rem] md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-32 relative"
    >
      <div className="w-full md:w-[45%] relative order-1 md:order-1 mr-auto flex justify-center items-center h-[250px] md:h-[300px]">
        {/* Editorial Typographic Element */}
        <div className="relative z-20 flex items-center justify-center w-[240px] h-[240px] md:w-[300px] md:h-[300px]">
          {/* Massive subtle ampersand */}
          <motion.div 
            animate={{ opacity: [0.1, 0.3, 0.1], scale: [0.98, 1.02, 0.98] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute text-[12rem] md:text-[18rem] font-serif italic text-gold leading-none select-none tracking-tighter"
          >
            &
          </motion.div>
          
          {/* Inner rotating glowing circle */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-[0.5px] border-gold/30 rounded-full scale-[0.65] md:scale-[0.7] border-t-transparent"
          />
          
          {/* Outer rotating dashed circle */}
           <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-[0.5px] border-gold/10 rounded-full scale-[0.85] md:scale-[0.9] border-dashed"
          />

          <div className="z-10 flex flex-col items-center gap-4 md:gap-5 p-4 rounded-full mt-4">
            <span className="text-off-white/70 font-sans uppercase tracking-[0.4em] text-[10px] md:text-xs drop-shadow-md">Your Vision</span>
            <div className="h-10 md:h-14 w-px bg-gradient-to-b from-transparent via-gold/70 to-transparent" />
            <span className="text-gold/90 font-serif italic text-2xl md:text-4xl drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]">Our Execution</span>
          </div>
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

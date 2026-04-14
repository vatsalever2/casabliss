"use client";

import { motion } from "framer-motion";

export default function ChapterV_Shipment() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
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
             <span className="text-display text-3xl md:text-4xl text-off-white">8-12</span>
             <span className="text-eyebrow text-gold/60 text-[10px] mt-1 text-left md:text-right w-full">Weeks Transit</span>
           </div>
        </div>
      </div>

      <div className="w-full md:w-[45%] relative order-1 md:order-2 mr-auto flex justify-center items-center h-[200px] md:h-[300px]">
        {/* Premium Logistics Manifest Element */}
        <div className="relative w-[280px] md:w-[340px] h-[180px] md:h-[220px] border border-gold/10 bg-deep-ink/50 backdrop-blur-md flex flex-col justify-between p-6 overflow-hidden group">
          
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-50" />

          {/* Scanning light line */}
          <motion.div 
            animate={{ top: ["-10%", "110%", "-10%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent shadow-[0_0_15px_rgba(212,175,55,0.4)] z-20"
          />
          
          <div className="flex justify-between items-start relative z-10">
            <div className="flex flex-col gap-1">
              <span className="text-[9px] uppercase tracking-[0.3em] text-gold/50 font-sans">Origin</span>
              <span className="text-base md:text-xl font-serif italic text-off-white">Foshan, CN</span>
            </div>
            <span className="text-[9px] font-mono tracking-widest text-gold/30">23.02&deg;N 113.12&deg;E</span>
          </div>
          
          <div className="w-full h-px bg-gold/10 relative my-4 z-10 flex items-center">
            <motion.div 
              className="absolute left-0 w-2 h-2 rounded-full bg-gold shadow-[0_0_10px_rgba(212,175,55,1)]"
              animate={{ left: ["0%", "100%", "0%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="flex justify-between items-end relative z-10">
            <span className="text-[9px] font-mono tracking-widest text-gold/30">SECURE INBOUND</span>
            <div className="flex flex-col gap-1 text-right">
              <span className="text-[9px] uppercase tracking-[0.3em] text-gold/50 font-sans">Destination</span>
              <span className="text-base md:text-xl font-serif italic text-off-white">Your Estate</span>
            </div>
          </div>
          
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/30" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/30" />
        </div>
      </div>
    </motion.div>
  );
}

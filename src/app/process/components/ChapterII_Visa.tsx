"use client";

import { motion } from "framer-motion";

export default function ChapterII_Visa() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-7xl mx-auto pr-8 pl-[4.5rem] md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-32 relative"
    >
      <div className="w-full md:w-[45%] relative order-1 md:order-1 mr-auto flex justify-center items-center h-[250px] md:h-[300px]">
        {/* Minimalist Premium Visa Document Abstract */}
        <div className="relative z-20 w-[180px] h-[260px] md:w-[220px] md:h-[300px] bg-deep-ink/40 backdrop-blur-md border border-gold/10 p-5 flex flex-col justify-between overflow-hidden shadow-2xl group">
          {/* Fine Geometric Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(196,164,119,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(196,164,119,0.03)_1px,transparent_1px)] bg-[size:12px_12px]" />
          
          {/* Delicate ambient corner glow */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gold/5 blur-[25px] rounded-full" />
          
          {/* Header */}
          <div className="relative z-10 flex justify-between items-start">
            <div className="flex flex-col gap-1">
              <span className="text-[6px] md:text-[7px] font-mono tracking-widest text-gold/40">DOCUMENT NO.</span>
              <span className="text-[10px] md:text-[11px] font-sans uppercase tracking-[0.3em] text-off-white/80">CB-8894</span>
            </div>
            {/* Spinning Authentication Seal */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 md:w-6 md:h-6 border-[0.5px] border-dashed border-gold/50 rounded-full flex items-center justify-center p-[2px]"
            >
              <div className="w-full h-full border-[0.5px] border-gold/20 rounded-full" />
            </motion.div>
          </div>

          {/* Center Emblem & Scan Line */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center">
            {/* Holographic scanner line */}
            <motion.div 
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent shadow-[0_0_10px_rgba(212,175,55,0.4)] z-20 pointer-events-none"
            />
            
            {/* Subtly beating watermark */}
            <motion.div 
              initial={{ opacity: 0.3, scale: 0.98 }}
              animate={{ opacity: 0.7, scale: 1.02 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="text-gold/10 font-serif italic text-5xl md:text-6xl tracking-widest -rotate-90 select-none"
            >
              Valid
            </motion.div>
            
            {/* Foreground strict clearance stamp */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="border border-gold/30 px-3 py-1 bg-deep-ink/80 backdrop-blur-md -rotate-12 shadow-lg">
                  <span className="text-[7px] md:text-[8px] font-sans uppercase tracking-[0.4em] text-gold/90 font-medium">Clearance Granted</span>
                </div>
            </div>
          </div>

          {/* Footer details */}
          <div className="relative z-10 flex flex-col gap-3">
            <div className="w-full h-px border-t border-dashed border-gold/20" />
            <div className="flex justify-between items-end">
              <div className="flex flex-col">
                <span className="text-[6px] md:text-[7px] font-mono tracking-[0.2em] text-gold/30">DESTINATION</span>
                <span className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-cream/70 mt-1">Mainland China</span>
              </div>
              <div className="flex flex-col text-right">
                <span className="text-[6px] md:text-[7px] font-mono tracking-[0.2em] text-gold/30">ACCESS</span>
                <span className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-gold mt-1">All Areas</span>
              </div>
            </div>
          </div>
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

"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 3.2s sequence for the physical architectural reveal
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <div key="preloader" className="fixed inset-0 z-[100] pointer-events-none">
          
          {/* Left Door */}
          <motion.div
            initial={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 left-0 w-1/2 h-full bg-[#050505] z-10 box-border border-r border-[#151515]"
          />

          {/* Right Door */}
          <motion.div
            initial={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 right-0 w-1/2 h-full bg-[#050505] z-10 box-border border-l border-[#151515]"
          />

          {/* Center Architecture Line that draws down the seam */}
          <motion.div
            initial={{ height: "0%" }}
            animate={{ height: "100%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-px bg-gold/50 z-20"
          />

          {/* Typography centered over the doors */}
          <motion.div 
            className="absolute inset-0 z-30 flex items-center justify-center flex-col"
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-gold font-serif font-light text-3xl md:text-5xl uppercase tracking-widest bg-[#050505] px-8 py-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
            >
              Casa Bliss
            </motion.h1>
            
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-4 text-[10px] tracking-[0.4em] uppercase text-gold/60 font-sans bg-[#050505] px-4 py-1"
            >
              Architectural Sourcing
            </motion.span>
          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}

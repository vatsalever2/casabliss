"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CatalogDownloadTrayProps {
  categoryName: string;
  pdfUrl: string;
}

export default function CatalogDownloadTray({
  categoryName,
  pdfUrl,
}: CatalogDownloadTrayProps) {
  const [state, setState] = useState<"idle" | "downloading" | "complete">("idle");

  const handleDownload = useCallback(() => {
    setState("downloading");

    // Trigger actual download
    const a = document.createElement("a");
    a.href = pdfUrl;
    a.download = `${categoryName}-catalog.pdf`;
    a.click();

    // Simulate progress
    setTimeout(() => setState("complete"), 2000);
    setTimeout(() => setState("idle"), 5000);
  }, [categoryName, pdfUrl]);

  return (
    <>
      <button
        onClick={handleDownload}
        disabled={state !== "idle"}
        className="group relative flex items-center justify-center gap-6 md:gap-10 py-5 px-8 md:px-12 border border-white/20 hover:border-gold/40 bg-white/[0.02] transition-colors duration-[1000ms] ease-out rounded-full backdrop-blur-md overflow-hidden"
      >
        {/* Soft, ethereal background glow on hover */}
        <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-[1000ms] ease-out" />
        
        <span className="text-[10px] md:text-xs uppercase font-sans tracking-[0.4em] text-off-white/80 group-hover:text-gold transition-colors duration-[800ms] relative z-10 pt-0.5">
          {state === "idle" ? "Download Catalog" : state === "downloading" ? "Downloading..." : "Retrieved"}
        </span>
        
        {/* Micro-interaction Container */}
        <div className="relative z-10 w-4 h-4 flex items-center justify-center overflow-hidden">
           {state === "idle" && (
              <>
                 {/* The Dot (Default State) */}
                 <div className="absolute w-1.5 h-1.5 bg-gold/50 rounded-full group-hover:opacity-0 group-hover:scale-50 transition-all duration-500 ease-in-out" />
                 
                 {/* The Arrow (Hover State) */}
                 <div className="absolute flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-[800ms] ease-[0.16,1,0.3,1] -translate-x-4 group-hover:translate-x-0 w-full h-full">
                    <div className="w-full h-[1px] bg-gold relative">
                       <div className="absolute right-0 top-0 w-1.5 h-[1px] bg-gold transform origin-right rotate-45" />
                       <div className="absolute right-0 top-0 w-1.5 h-[1px] bg-gold transform origin-right -rotate-45" />
                    </div>
                 </div>
              </>
           )}
           {state === "downloading" && (
              <motion.div 
                 animate={{ opacity: [0.3, 1, 0.3] }} 
                 transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                 className="w-1.5 h-1.5 bg-gold rounded-full"
              />
           )}
           {state === "complete" && (
              <div className="w-1.5 h-1.5 bg-off-white rounded-full transition-all duration-500" />
           )}
        </div>
      </button>

      <AnimatePresence>
        {state !== "idle" && (
          <motion.div
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-soft-black/95 rounded-full border border-white/10 px-6 py-3 md:px-8 md:py-4 shadow-2xl backdrop-blur-2xl flex items-center gap-6 min-w-max"
            initial={{ y: 40, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {state === "downloading" ? (
              <div className="flex items-center gap-4">
                 <motion.div 
                   className="w-3 h-3 border border-t-gold border-r-gold border-b-transparent border-l-transparent rounded-full"
                   animate={{ rotate: 360 }}
                   transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                 />
                 <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-sans text-cream/70">
                   Compiling {categoryName} Sourcebook...
                 </span>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                 <div className="w-1 h-1 bg-gold rounded-full" />
                 <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-sans text-off-white">
                   Saved to your device
                 </span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

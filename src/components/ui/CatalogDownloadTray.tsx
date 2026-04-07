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
        className="gold-link text-sm text-cream/80 hover:text-off-white transition-colors duration-300 disabled:opacity-50"
      >
        Download catalog
      </button>

      <AnimatePresence>
        {state !== "idle" && (
          <motion.div
            className="fixed bottom-8 right-8 z-50 bg-soft-black border border-raised/40 rounded-lg px-6 py-4 min-w-[280px] shadow-2xl"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {state === "downloading" ? (
              <>
                <p className="text-sm text-cream mb-3">
                  Downloading {categoryName} Catalog…
                </p>
                <div className="h-px w-full bg-raised overflow-hidden rounded-full">
                  <motion.div
                    className="h-full bg-gold"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.8, ease: "easeInOut" }}
                  />
                </div>
              </>
            ) : (
              <p className="text-sm text-gold">Saved to your device.</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

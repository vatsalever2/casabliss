"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function CurtainReveal({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden w-full h-full group">
      {/* The actual content (e.g. Image) */}
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative w-full h-full"
      >
        {children}
      </motion.div>

      {/* The Curtain that slides down to reveal */}
      <motion.div
        className="absolute inset-0 bg-soft-black z-10"
        initial={{ y: "0%" }}
        whileInView={{ y: "100%" }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1], delay: 0.1 }}
      />
    </div>
  );
}

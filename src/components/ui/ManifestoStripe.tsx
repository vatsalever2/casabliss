"use client";

import { motion } from "framer-motion";

export default function ManifestoStripe() {
  return (
    <section className="w-full bg-deep-ink py-12 md:py-20 px-6 flex flex-col items-center justify-center relative z-20">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Decorative connecting line */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          whileInView={{ opacity: 1, height: 50 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-px bg-gradient-to-b from-gold/20 via-gold/50 to-transparent mb-8 md:mb-10"
        />

        {/* Main Manifesto Copy */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-cream/90 text-xl md:text-2xl lg:text-3xl font-light tracking-wide leading-relaxed"
        >
          Curating the finest craftsmanship from Italy and China to elevate your extraordinary home.
        </motion.p>
      </div>
    </section>
  );
}

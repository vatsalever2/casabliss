"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PremiumImage from "@/components/ui/PremiumImage";

export default function ChapterVI_Handover() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-7xl mx-auto pr-8 pl-[4.5rem] md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-32 relative"
    >
      <div className="w-full md:w-[45%] h-[40vh] md:h-[80vh] relative order-1 md:order-1 mr-auto overflow-hidden">
        <PremiumImage 
          src="/images/gallery/gallery-3.jpg" 
          alt="Handover" 
          fill 
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover opacity-90 transition-transform duration-[20s] ease-linear hover:scale-110"
        />
        <div className="absolute inset-0 border border-gold/10" />
      </div>

      <div className="w-full md:w-[45%] flex flex-col text-left items-start order-2 md:order-2 ml-auto md:pb-32">
        <span className="text-gold font-serif text-3xl mb-6 block italic opacity-80">VI.</span>
        <h2 className="text-display text-4xl md:text-6xl text-off-white leading-tight mb-6 md:mb-8">
          The last thing we do <br className="hidden md:block"/>is leave it <i className="italic font-light text-gold/90">perfect.</i>
        </h2>
        <p className="text-sans text-cream/60 text-[15px] md:text-lg leading-relaxed max-w-sm mb-10 md:mb-12">
          Our team coordinates placement and full assembly. You don&apos;t lift a finger. When we leave, every piece is exactly where it belongs. That is the end of the passage. And the beginning of your home.
        </p>

        <Link
          href="/inquire"
          className="group relative inline-flex items-center justify-center border border-gold/30 bg-gold/5 px-8 md:px-10 py-4 md:py-5 text-[10px] md:text-xs uppercase tracking-[0.25em] font-sans text-off-white hover:bg-gold hover:text-deep-ink hover:border-gold transition-all duration-500"
        >
          <span className="relative z-10 flex items-center gap-4">
            <span>Begin Your Passage</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </span>
        </Link>
      </div>
    </motion.div>
  );
}

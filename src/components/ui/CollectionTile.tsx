"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import CurtainReveal from "@/components/ui/CurtainReveal";

interface CollectionTileProps {
  href: string;
  title: string;
  image: string;
  index: number;
  tagline?: string;
}

export default function CollectionTile({
  href,
  title,
  image,
  index,
  tagline,
}: CollectionTileProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="w-full relative group"
    >
      <Link href={href} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24 w-full`}>
        
        {/* Massive Background Numeral */}
        <div className={`absolute top-1/2 -translate-y-1/2 ${isEven ? 'left-[-8%]' : 'right-[-8%]'} text-[15rem] md:text-[25rem] lg:text-[35rem] font-serif font-light text-off-white/5 pointer-events-none select-none z-0 tracking-tighter`}>
          0{index + 1}
        </div>

        {/* Image Block */}
        <div className="w-full lg:w-[65%] z-10 relative overflow-hidden">
          <motion.div
            className="relative w-full aspect-[4/5] lg:aspect-[16/10] overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <CurtainReveal>
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
              <div className="absolute inset-0 bg-deep-ink/20 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0" />
            </CurtainReveal>
          </motion.div>
        </div>

        {/* Typography & Interaction Block */}
        <div className={`w-full lg:w-[35%] flex flex-col justify-center z-20 ${isEven ? 'lg:pl-8' : 'lg:pr-8'}`}>
          <div className="w-12 h-px bg-gold/50 mb-8" />
          
          <h2 className="text-display font-light text-5xl md:text-6xl lg:text-7xl text-off-white mb-6 group-hover:text-gold transition-colors duration-500">
            {title}
          </h2>
          
          {tagline && (
            <p className="text-cream/50 text-lg md:text-xl font-light mb-12 max-w-sm">
              {tagline}
            </p>
          )}
          
          <div className="flex items-center gap-4 text-xs tracking-[0.2em] font-sans uppercase text-gold">
            <span className="transition-transform duration-500 group-hover:translate-x-2">Explore Discipline</span>
            <span className="transition-transform duration-500 delay-75 group-hover:translate-x-4">→</span>
          </div>
        </div>

      </Link>
    </motion.div>
  );
}

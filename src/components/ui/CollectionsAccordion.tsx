"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PremiumImage from "@/components/ui/PremiumImage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Collection } from "@/lib/collections-data";

export default function CollectionsAccordion({ collections }: { collections: Collection[] }) {
  // Default to the first item being open
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const router = useRouter();

  return (
    <div className="w-full h-full flex flex-col md:flex-row overflow-hidden bg-deep-ink relative z-10">
      {collections.map((category, index) => {
        const isActive = hoveredIndex === index;
        
        return (
          <motion.div
            key={category.slug}
            onMouseEnter={() => setHoveredIndex(index)}
            onClick={() => {
              if (isActive) {
                router.push(`/collections/${category.slug}`);
              } else {
                setHoveredIndex(index);
              }
            }}
            layout
            initial={false}
            animate={{
              flex: isActive ? 6 : 1
            }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className={`relative h-full overflow-hidden group cursor-pointer ${isActive ? 'ring-1 ring-gold/20' : ''}`}
          >
            <PremiumImage 
                src={category.image} 
                alt={category.title} 
                fill 
                sizes="(max-width: 768px) 100vw, 70vw"
                className={`object-cover transition-transform duration-[1.5s] ease-out ${isActive ? 'scale-100' : 'scale-110 grayscale-[30%]'}`} 
            />
            
            {/* Overlay Gradient */}
            <div className={`absolute inset-0 transition-colors duration-500 ${isActive ? 'bg-black/30' : 'bg-black/60 group-hover:bg-black/40'}`} />
            
            {/* Smooth Text Backdrop Gradient */}
            {isActive && (
              <motion.div 
                 initial={{ opacity: 0 }} 
                 animate={{ opacity: 1 }} 
                 exit={{ opacity: 0 }} 
                 transition={{ duration: 0.5 }}
                 className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" 
              />
            )}

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col justify-end">
              <AnimatePresence mode="popLayout">
                {isActive ? (
                  <motion.div
                    key="active"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    className="relative z-10 p-6 md:p-12 lg:p-16 flex flex-col w-full h-full justify-end"
                  >
                    <span className="text-gold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 md:mb-6 font-sans">
                      0{index + 1}
                    </span>
                    <h2 className="text-display font-light text-4xl md:text-6xl lg:text-8xl text-off-white leading-none mb-4 md:mb-6 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                      {category.title}.
                    </h2>
                    <p className="text-cream/70 font-light text-sm md:text-base max-w-md mb-8 md:mb-10 hidden md:block leading-relaxed">
                      {category.tagline}
                    </p>
                    
                    <div>
                      <Link 
                        href={`/collections/${category.slug}`} 
                        className="inline-flex relative items-center gap-4 text-[10px] md:text-xs font-sans uppercase tracking-[0.3em] text-white hover:text-gold transition-colors pb-2 before:absolute before:bottom-0 before:left-0 before:w-full before:h-px before:bg-gold/30 hover:before:bg-gold before:transition-colors"
                      >
                        <span>Explore Discipline</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="collapsed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.1 } }}
                    className="w-full h-full flex flex-col items-center justify-end md:justify-center p-4 md:p-0"
                  >
                    <span className="text-gold/40 text-[10px] uppercase tracking-widest font-sans mb-4 hidden md:block">
                        0{index + 1}
                    </span>
                    <span className="text-off-white/80 font-display text-lg md:text-2xl md:-rotate-90 md:whitespace-nowrap tracking-wide">
                      {category.title}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

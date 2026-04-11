"use client";

import PremiumImage from "@/components/ui/PremiumImage";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import Magnetic from "@/components/ui/Magnetic";
import CurtainReveal from "@/components/ui/CurtainReveal";
import GlobalPedigree from "@/components/ui/GlobalPedigree";
import FeaturedSpaces from "@/components/ui/FeaturedSpaces";
import BespokeProcess from "@/components/ui/BespokeProcess";
import { collections, masterCatalogueUrl } from "@/lib/collections-data";

export default function HomePage() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Move the background image down slower than the user scrolls
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const philosophyRef = useRef<HTMLElement>(null);
  const { scrollYProgress: philosophyScrollY } = useScroll({
    target: philosophyRef,
    offset: ["start end", "end start"],
  });
  
  const y1 = useTransform(philosophyScrollY, [0, 1], ["-10%", "10%"]);
  const y2 = useTransform(philosophyScrollY, [0, 1], ["15%", "-15%"]);

  const heroImages = [
    "/images/hero-home.jpg",
    "/images/collection-furniture.jpg",
    "/images/collection-kitchen.jpg",
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000); // 6 second loop
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <>
      {/* ═══════════════════════════════════════════════════
          HERO — Premium Crossfade Slider
          ═══════════════════════════════════════════════════ */}
      <section ref={containerRef} style={{ position: "relative" }} className="relative h-[100svh] w-full bg-deep-ink overflow-hidden flex items-center justify-center">
        
        {/* Breathing Crossfade Background Layer */}
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <PremiumImage
                src={heroImages[currentImage]}
                alt="Luxury interior showroom"
                fill
                priority
                className="object-cover opacity-60 md:opacity-75"
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>
          {/* Subtle gradient overlay for text readability and blending to the next section */}
          <div className="absolute inset-0 bg-gradient-to-t from-deep-ink via-deep-ink/20 to-black/30 z-10" />
        </motion.div>

        {/* Master Typography Layer - Centered Elegant Luxury */}
        <div className="relative z-20 w-full max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-8"
            >
              <span className="text-gold/80 text-xs md:text-sm tracking-[0.3em] uppercase font-sans">
                Welcome to
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-display text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] text-off-white tracking-tight leading-[1] mb-10"
            >
              CASA BLISS
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="w-16 h-px bg-gold/50 mb-10"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-cream/80 text-lg md:text-xl font-light tracking-wide max-w-2xl leading-relaxed"
            >
              Curated luxury living. <br className="md:hidden" />
              Sourced from the world&apos;s most <i className="italic font-light text-gold/90">exclusive</i> factories.
            </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
           className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 z-20"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.5, duration: 1 }}
         >
           <div className="flex flex-col items-center gap-4">
             <span className="text-gold/40 text-[10px] tracking-[0.2em] uppercase font-sans">Scroll</span>
             <motion.div
               className="w-px h-16 bg-gradient-to-b from-gold/40 to-transparent"
               animate={{ y: [0, 8, 0], opacity: [0.3, 1, 0.3] }}
               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
             />
           </div>
         </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PHILOSOPHY — Editorial Parallax
          ═══════════════════════════════════════════════════ */}
      <section ref={philosophyRef} style={{ position: "relative" }} className="py-32 md:py-48 px-6 lg:px-12 relative overflow-hidden bg-deep-ink">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen max-w-7xl h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Typography */}
          <div className="w-full md:w-1/2 flex flex-col z-10 relative">
            <SectionReveal delay={0}>
              <span className="text-gold/60 text-xs md:text-sm tracking-[0.2em] uppercase font-sans mb-6 block">
                The Philosophy
              </span>
              <h2 className="text-display text-4xl lg:text-5xl xl:text-6xl text-off-white leading-tight mb-8">
                We source only what we would place in our <i className="italic font-light pr-1 text-gold/90">own</i> home.
              </h2>
            </SectionReveal>
            
            <SectionReveal delay={0.2}>
              <p className="text-sans text-cream/70 text-lg leading-relaxed mb-6 max-w-md">
                Every piece in our catalogue is chosen for longevity, proportion, and absolute material honesty. We do not deal in fleeting trends.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.4}>
              <p className="text-sans text-cream/50 text-lg leading-relaxed max-w-md">
                This is architecture for your interior. This is furniture for people who already <i className="italic font-light">know</i>.
              </p>
            </SectionReveal>
          </div>

          {/* Right: Parallax Image Composition */}
          <div className="w-full md:w-1/2 relative h-[60vh] md:h-[80vh] min-h-[500px]">
             {/* Main Image */}
             <motion.div 
               className="absolute top-0 right-0 w-[85%] h-[85%] overflow-hidden z-10 shadow-2xl"
               style={{ y: y1 }}
             >
                <div className="absolute inset-0 bg-deep-ink/10 z-10 pointer-events-none" />
                <PremiumImage src="/images/vignette-1.jpg" alt="Luxury detail" fill className="object-cover opacity-90" sizes="(max-width: 768px) 100vw, 50vw" />
             </motion.div>
             
             {/* Offset Floating Image */}
             <motion.div 
               className="absolute bottom-0 left-0 w-[55%] h-[45%] overflow-hidden z-20 shadow-[-10px_20px_40px_rgba(0,0,0,0.5)] border border-gold/10"
               style={{ y: y2 }}
             >
                <div className="absolute inset-0 bg-deep-ink/20 mix-blend-multiply z-10 pointer-events-none" />
                <PremiumImage src="/images/vignette-3.jpg" alt="Material texture" fill className="object-cover grayscale-[30%] opacity-90 mix-blend-luminosity" sizes="(max-width: 768px) 50vw, 25vw" />
             </motion.div>
          </div>
          
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          THE ORIGINS (Global Pedigree)
          ═══════════════════════════════════════════════════ */}
      <GlobalPedigree />

      {/* ═══════════════════════════════════════════════════
          THE COLLECTION — Alternating Staggered Layout
          ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 lg:px-12 bg-deep-ink overflow-hidden border-t border-gold/10">
        <div className="max-w-[1400px] mx-auto">
          <SectionReveal>
            <div className="flex flex-col items-center mb-24 md:mb-40 text-center">
              <span className="text-eyebrow text-gold/60 mb-6">The Collection</span>
              <h2 className="text-display text-4xl md:text-5xl lg:text-7xl text-off-white relative z-10 leading-[1.1]">
                Four Pillars. <br/> <i className="italic font-light text-gold/80">One Standard.</i>
              </h2>
              <div className="mt-10">
                <Magnetic strength={15}>
                  <a
                    href={masterCatalogueUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 border border-gold/30 text-gold/80 px-6 py-3 text-xs uppercase tracking-[0.2em] font-sans hover:bg-gold/10 hover:border-gold/60 transition-all duration-500"
                  >
                    <span>View All Catalogues</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                </Magnetic>
              </div>
            </div>
          </SectionReveal>

          <div className="flex flex-col gap-32 md:gap-40">
            {collections.map((collection, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={collection.slug} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 relative`}>
                  
                  {/* Huge Background Numeral */}
                  <div className={`absolute top-1/2 -translate-y-1/2 ${isEven ? 'left-[-5%]' : 'right-[-5%]'} text-[12rem] md:text-[25rem] font-serif font-light text-off-white/5 pointer-events-none select-none z-0 tracking-tighter`}>
                    0{index + 1}
                  </div>

                  {/* Image */}
                  <div className="w-full md:w-[60%] z-10 relative">
                     <Link href={`/collections/${collection.slug}`} className="block group relative w-full aspect-[4/5] md:aspect-[4/3] overflow-hidden">
                       <CurtainReveal>
                         <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }} className="w-full h-full relative">
                           <PremiumImage src={collection.image} alt={collection.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 60vw" />
                           <div className="absolute inset-0 bg-deep-ink/20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-700 pointer-events-none" />
                         </motion.div>
                       </CurtainReveal>
                     </Link>
                  </div>

                  {/* Typography Block */}
                  <div className={`w-full md:w-[40%] flex flex-col z-20 mt-8 md:mt-0 relative ${isEven ? 'md:pl-8' : 'md:pr-8'}`}>
                    <SectionReveal>
                      <h3 className="text-display text-4xl md:text-5xl lg:text-6xl text-off-white mb-6">
                        {collection.title}
                      </h3>
                      <p className="text-cream/60 text-lg md:text-xl font-light mb-10 max-w-md">
                        {collection.tagline}
                      </p>
                      <Magnetic strength={15}>
                         <Link href={`/collections/${collection.slug}`} className="gold-link text-eyebrow text-gold/80 inline-flex items-center gap-4 py-2">
                           <span>Explore Pillar</span>
                           <span>→</span>
                         </Link>
                      </Magnetic>
                      <a
                        href={collection.catalogueUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-cream/40 text-xs uppercase tracking-[0.2em] font-sans mt-4 hover:text-gold/70 transition-colors duration-400"
                      >
                        <span>View Catalogue</span>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </a>
                    </SectionReveal>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FEATURED SPACES (The Gallery)
          ═══════════════════════════════════════════════════ */}
      <FeaturedSpaces />

      {/* ═══════════════════════════════════════════════════
          THE BESPOKE PROCESS
          ═══════════════════════════════════════════════════ */}
      <BespokeProcess />

      {/* ═══════════════════════════════════════════════════
          CLOSING CTA — Immersive Editorial Block
          ═══════════════════════════════════════════════════ */}
      <section className="relative py-32 md:py-48 px-6 lg:px-12 flex items-center justify-center overflow-hidden border-t border-gold/10">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <PremiumImage 
            src="/images/vignette-2.jpg" 
            alt="Casa Bliss Luxury Sourcing" 
            fill 
            className="object-cover object-center translate-y-[-10%] scale-105" 
          />
          <div className="absolute inset-0 bg-deep-ink/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-ink via-transparent to-deep-ink" />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-ink via-transparent to-transparent opacity-80" />
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col md:flex-row items-center md:items-end justify-between gap-12">
          
          <div className="max-w-2xl text-center md:text-left">
            <SectionReveal>
              <h2 className="text-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-off-white leading-[1.1] mb-6">
                Your vision. <br />
                <span className="italic font-light text-gold/80">Our connections.</span>
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <p className="text-cream/60 text-lg md:text-xl font-light max-w-md mx-auto md:mx-0 leading-relaxed">
                Skip the showrooms. Bypass the markups. Experience white-glove sourcing direct from the world&apos;s most capable factories.
              </p>
            </SectionReveal>
          </div>

          <div className="md:pb-6 w-full md:w-auto flex justify-center md:justify-end">
            <SectionReveal delay={0.3}>
              <Magnetic strength={20}>
                <Link
                  href="/inquire"
                  className="group relative inline-flex items-center justify-center border border-gold/40 bg-gold/5 px-10 py-5 md:px-12 md:py-6 text-sm uppercase tracking-[0.25em] font-sans text-off-white hover:bg-gold hover:text-deep-ink hover:border-gold transition-all duration-500 overflow-hidden w-full md:w-auto"
                >
                  <span className="relative z-10 flex items-center gap-4">
                    <span>Begin Consultation</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </Link>
              </Magnetic>
            </SectionReveal>
          </div>
          
        </div>
      </section>
    </>
  );
}

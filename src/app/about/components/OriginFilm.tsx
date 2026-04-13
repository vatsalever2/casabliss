"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PremiumImage from "@/components/ui/PremiumImage";
import Link from "next/link";
import Magnetic from "@/components/ui/Magnetic";

/* ═══════════════════════════════════════════════════════════
   THE ORIGIN FILM — V4: EDITORIAL LUXURY
   Pure vertical flow. High-end sticky split-screens and 
   massive typography. No horizontal scroll tracking.
   ═══════════════════════════════════════════════════════════ */

function ScrollFade({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [40, 0, 0, -30]);

  return (
    <motion.div ref={ref} style={{ opacity, y }} className={`relative ${className}`}>
      {children}
    </motion.div>
  );
}

export default function OriginFilm() {

  /* ── HERO: Zoom-Through (Kept from V3) ── */
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });
  const originScale = useTransform(heroProgress, [0, 0.8], [1, 120]);
  const originOpacity = useTransform(heroProgress, [0, 0.35, 0.65], [1, 1, 0]);
  const heroImageOpacity = useTransform(heroProgress, [0, 0.5, 0.8], [0.3, 0.5, 0.9]);
  const heroImageScale = useTransform(heroProgress, [0, 1], [1.1, 1.3]);
  const introTextOpacity = useTransform(heroProgress, [0, 0.08], [1, 0]);

  /* ── SCENE 1: The Foshan Reveal (Kept from V3) ── */
  const scene1Ref = useRef<HTMLElement>(null);
  const { scrollYProgress: scene1Progress } = useScroll({
    target: scene1Ref,
    offset: ["start start", "end end"],
  });
  const scene1ImageY = useTransform(scene1Progress, [0, 1], ["0%", "15%"]);
  const scene1Text1Opacity = useTransform(scene1Progress, [0, 0.15, 0.35, 0.5], [0, 1, 1, 0]);
  const scene1Text2Opacity = useTransform(scene1Progress, [0.4, 0.55, 0.75, 0.9], [0, 1, 1, 0]);
  const scene1Text3Opacity = useTransform(scene1Progress, [0.7, 0.85, 0.95, 1], [0, 1, 1, 0.6]);

  /* ── SCENE 3: The Vertical Journey (New V4) ── */
  const journeyRef = useRef<HTMLElement>(null);
  const { scrollYProgress: journeyProgress } = useScroll({
    target: journeyRef,
    offset: ["start center", "end center"],
  });
  const threadScaleY = useTransform(journeyProgress, [0, 1], [0, 1]);

  return (
    <div className="relative w-full bg-deep-ink">

      {/* ═══════════════════════════════════════════════════
          HERO — THE ZOOM THROUGH
          ═══════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative w-full h-[250svh]">
        <div className="sticky top-0 w-full h-[100svh] flex items-center justify-center overflow-hidden bg-black">
          
          <motion.div
            className="absolute inset-0 z-0 origin-center"
            style={{ scale: heroImageScale, opacity: heroImageOpacity }}
          >
            <PremiumImage
              src="/images/about-sourcing.jpg"
              alt="Casa Bliss Factory Floor"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
          </motion.div>

          <motion.div
            className="relative z-10 pointer-events-none"
            style={{ scale: originScale, opacity: originOpacity }}
          >
            <h1 className="text-deep-ink font-serif tracking-tighter uppercase leading-none text-[15vw] md:text-[200px] select-none mix-blend-plus-lighter">
              <span className="text-[#ffffff]">ORIGIN</span>
            </h1>
          </motion.div>

          <motion.div
            className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none"
            style={{ opacity: introTextOpacity }}
          >
            <p className="text-gold/60 text-xs tracking-[0.5em] uppercase font-sans mb-8 -translate-y-28">
              Every piece has an
            </p>
            <div className="absolute bottom-16 flex flex-col items-center gap-3">
              <span className="text-gold/30 text-[9px] tracking-[0.3em] uppercase font-sans">
                Scroll to enter
              </span>
              <motion.div
                className="w-px h-12 bg-gradient-to-b from-gold/40 to-transparent"
                animate={{ y: [0, 6, 0], opacity: [0.2, 0.8, 0.2] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SCENE 1 — THE SOURCE
          ═══════════════════════════════════════════════════ */}
      <section ref={scene1Ref} className="relative w-full h-[350vh]">
        <div className="sticky top-0 w-full h-[100svh] overflow-hidden bg-deep-ink">
          
          <motion.div className="absolute inset-0 z-0" style={{ y: scene1ImageY }}>
            <PremiumImage
              src="/images/collection-kitchen.jpg"
              alt="Foshan Manufacturing"
              fill
              className="object-cover scale-110"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-ink via-transparent to-deep-ink/30" />
          </motion.div>

          {/* Persistent corner metadata */}
          <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 z-30 text-right">
            <p className="font-mono text-[9px] md:text-[10px] text-gold/40 tracking-[0.3em] uppercase leading-loose">
              23.0215° N, 113.1214° E
              <br />
              Foshan, Guangdong
            </p>
          </div>

          <motion.div
            className="absolute inset-0 z-20 flex items-center justify-center px-6"
            style={{ opacity: scene1Text1Opacity }}
          >
            <div className="max-w-4xl text-center">
              <p className="text-gold/50 text-[10px] md:text-xs tracking-[0.5em] uppercase font-sans mb-8">
                I — The Source
              </p>
              <h2 className="text-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-off-white leading-[1.05] tracking-tight">
                We don&apos;t source
                <br />
                from catalogues.
              </h2>
            </div>
          </motion.div>

          <motion.div
            className="absolute inset-0 z-20 flex items-center justify-center px-6"
            style={{ opacity: scene1Text2Opacity }}
          >
            <div className="max-w-4xl text-center">
              <h2 className="text-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-off-white/80 leading-[1.05] tracking-tight italic font-light">
                We source from
                <br />
                production floors.
              </h2>
            </div>
          </motion.div>

          <motion.div
            className="absolute inset-0 z-20 flex items-end px-6 md:px-16 pb-24 md:pb-32"
            style={{ opacity: scene1Text3Opacity }}
          >
            <div className="max-w-2xl">
              <div className="w-12 h-px bg-gold/40 mb-8" />
              <p className="text-cream/70 text-lg md:text-2xl font-light leading-relaxed mb-6">
                Casa Bliss was born from a simple frustration — the best
                furniture in the world is made in China, but getting access
                requires relationships that take years to build.
              </p>
              <p className="text-cream/40 text-sm md:text-base font-light leading-relaxed">
                We built those relationships so you don&apos;t have to.
                We fly to Foshan twice a year. Every factory has been visited,
                vetted, and revisited.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SCENE 2 — THE SELECTION (STICKY SPLIT-SCREEN)
          Smooth vertical scroll. Left side sticks, right scrolls.
          ═══════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#080808] border-t border-gold/10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">
            
            {/* Sticky Left Sidebar */}
            <div className="lg:col-span-5 relative">
              <div className="lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center py-24 lg:py-0">
                <span className="text-gold/50 text-[10px] md:text-xs tracking-[0.5em] uppercase font-sans mb-8">
                  II — The Selection
                </span>
                
                <h2 className="text-display text-5xl md:text-6xl text-off-white leading-[1.05] tracking-tight mb-8">
                  We don&apos;t offer<br />
                  ten thousand<br />
                  products.
                </h2>
                <h2 className="text-display text-5xl md:text-6xl text-gold/80 italic font-light leading-[1.05] tracking-tight mb-8">
                  We offer the right ones.
                </h2>
                  
                <p className="text-cream/40 text-base md:text-lg font-light leading-relaxed max-w-sm">
                  Every piece in our collection has been explicitly selected for 
                  its construction quality, material integrity, and design longevity.
                </p>
              </div>
            </div>

            {/* Vertical Scroll Right Column */}
            <div className="lg:col-span-7 pb-32 lg:pb-48 pt-0 lg:pt-48 flex flex-col gap-32 lg:gap-64">
              
              {/* Card 1 */}
              <ScrollFade className="flex flex-col">
                <div className="relative w-full aspect-[4/5] md:aspect-[3/2] overflow-hidden shadow-2xl ring-1 ring-white/5 mb-8">
                  <PremiumImage
                    src="/images/gallery-3.jpg"
                    alt="Factory Direct"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />
                </div>
                <h3 className="text-off-white text-3xl font-serif tracking-tight mb-4">Factory Direct</h3>
                <p className="text-cream/50 text-base md:text-lg font-light max-w-lg leading-relaxed">
                  No middlemen. No trading companies. We maintain direct purchasing relationships with the exact 
                  same factories that produce for top-tier European luxury brands. 
                </p>
              </ScrollFade>

              {/* Card 2 */}
              <ScrollFade className="flex flex-col">
                <div className="relative w-full aspect-[4/5] md:aspect-[3/2] overflow-hidden shadow-2xl ring-1 ring-white/5 mb-8">
                  <PremiumImage
                    src="/images/vignette-1.jpg"
                    alt="Curated Collection"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />
                </div>
                <h3 className="text-off-white text-3xl font-serif tracking-tight mb-4">Ruthlessly Curated</h3>
                <p className="text-cream/50 text-base md:text-lg font-light max-w-lg leading-relaxed">
                  We don&apos;t deal in mass market. If a piece&apos;s internal joinery, frame material, or upholstery 
                  does not pass our rigorous physical inspection, it never makes our final collection.
                </p>
              </ScrollFade>

              {/* Card 3 */}
              <ScrollFade className="flex flex-col">
                <div className="relative w-full aspect-[4/5] md:aspect-[3/2] overflow-hidden shadow-2xl ring-1 ring-white/5 mb-8">
                  <PremiumImage
                    src="/images/vignette-2.jpg"
                    alt="End To End"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />
                </div>
                <h3 className="text-off-white text-3xl font-serif tracking-tight mb-4">End To End</h3>
                <p className="text-cream/50 text-base md:text-lg font-light max-w-lg leading-relaxed">
                  From factory floor to your front door. We manage sourcing, quality control, crating, international shipping, 
                  customs clearance, and complete white-glove installation at your project site.
                </p>
              </ScrollFade>

            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SCENE 3 — THE VERTICAL JOURNEY
          Pure vertical scroll. Massive typography.
          ═══════════════════════════════════════════════════ */}
      <section ref={journeyRef} className="relative w-full bg-deep-ink border-t border-gold/10 overflow-hidden">
        
        {/* The Animated Golden Thread */}
        <div className="absolute left-6 md:left-[10%] top-0 bottom-0 w-px bg-white/5 z-0" />
        <motion.div 
          className="absolute left-6 md:left-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold to-gold origin-top z-10 shadow-[0_0_15px_rgba(201,169,110,0.5)]"
          style={{ scaleY: threadScaleY }}
        />

        <div className="max-w-[1400px] mx-auto py-32 md:py-48 px-6 md:px-12 lg:px-24">
          
          <ScrollFade>
            <div className="pl-8 md:pl-[calc(10%+40px)] mb-32 md:mb-48">
              <span className="text-gold/50 text-[10px] md:text-xs tracking-[0.5em] uppercase font-sans mb-8 block">
                III — The Journey
              </span>
              <h2 className="text-display text-5xl md:text-7xl lg:text-[6rem] text-off-white leading-[1.05] tracking-tight mb-8">
                From production
                <br />
                <span className="italic font-light text-gold/80">
                  to your door.
                </span>
              </h2>
            </div>
          </ScrollFade>

          <div className="flex flex-col gap-32 md:gap-48 relative z-20">
            
            {[
              {
                step: "01",
                title: "Sourcing.",
                desc: "We identify and vet the finest factories across Foshan, Guangzhou, and Jieyang.",
                img: "/images/hero-home.jpg"
              },
              {
                step: "02",
                title: "Inspection.",
                desc: "Rigorous physical multi-stage inspection at the factory before any padding or packaging is applied.",
                img: "/images/vignette-1.jpg"
              },
              {
                step: "03",
                title: "Shipping.",
                desc: "International freight, complete export documentation, and customs clearance handled entirely by us.",
                img: "/images/vignette-2.jpg"
              }
            ].map((node, i) => (
              <ScrollFade key={i} className="pl-8 md:pl-[calc(10%+40px)] flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
                
                {/* Node Dot on the thread line */}
                <div className="absolute left-[20px] md:left-[calc(10%-4px)] w-2.5 h-2.5 rounded-full bg-deep-ink border border-gold shadow-[0_0_10px_rgba(201,169,110,0.5)] z-20" />

                {/* Massive Typography & Content */}
                <div className="flex-1 w-full order-2 md:order-1">
                  <h3 className="font-serif text-[6rem] md:text-[9rem] lg:text-[12rem] text-gold/10 leading-none tracking-tighter mb-4 select-none">
                    {node.step}
                  </h3>
                  <h4 className="text-off-white text-4xl md:text-5xl lg:text-6xl font-display tracking-tight mb-6 -mt-12 md:-mt-20 relative z-10">
                    {node.title}
                  </h4>
                  <p className="text-cream/50 text-lg md:text-xl font-light leading-relaxed max-w-md">
                    {node.desc}
                  </p>
                </div>

                {/* Associated Image */}
                <div className="w-full md:w-[40%] order-1 md:order-2">
                  <div className="relative w-full aspect-square overflow-hidden ring-1 ring-white/10 shadow-2xl grayscale-[20%]">
                    <PremiumImage
                      src={node.img}
                      alt={node.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                </div>

              </ScrollFade>
            ))}
            
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SCENE 4 — THE PROMISE (CLOSING SHOT)
          ═══════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden border-t border-gold/10">
        <div className="absolute inset-0 z-0">
          <PremiumImage
            src="/images/hero-home.jpg"
            alt="Casa Bliss Interior"
            fill
            className="object-cover opacity-60"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-ink via-deep-ink/70 to-deep-ink/30" />
        </div>

        <ScrollFade className="relative z-10 max-w-4xl mx-auto px-6 py-32 md:py-48 text-center">
          <p className="text-gold/50 text-[10px] md:text-xs tracking-[0.5em] uppercase font-sans mb-10">
            IV — The Promise
          </p>

          <h2 className="text-display text-5xl md:text-7xl lg:text-[6rem] text-off-white leading-[1.05] tracking-tight mb-8">
            Your vision.
            <br />
            <span className="italic font-light text-gold/90 drop-shadow-xl">
              Our connections.
            </span>
          </h2>

          <p className="text-cream/60 text-lg md:text-xl font-light mb-16 max-w-xl mx-auto leading-relaxed">
            Skip the showrooms. Bypass the markups. Experience white-glove
            sourcing direct from the world&apos;s most capable factories.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-12">
            <Magnetic strength={20}>
              <Link
                href="/collections"
                className="group inline-flex items-center gap-4 bg-gold px-10 py-5 md:px-12 md:py-6 text-xs uppercase tracking-[0.25em] font-sans text-deep-ink hover:bg-off-white transition-all duration-500 shadow-[0_0_40px_rgba(201,169,110,0.2)]"
              >
                <span className="font-medium">Explore Collections</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </Magnetic>

            <span className="hidden sm:block w-px h-12 bg-gold/20" />

            <Magnetic strength={15}>
              <Link
                href="/inquire"
                className="group inline-flex items-center gap-4 text-cream/70 text-sm uppercase tracking-[0.2em] font-sans hover:text-gold transition-colors duration-500"
              >
                <div className="w-8 h-px bg-gold/40 group-hover:w-12 transition-all duration-300" />
                <span>Begin Consultation</span>
                <div className="w-8 h-px bg-gold/40 group-hover:w-12 transition-all duration-300" />
              </Link>
            </Magnetic>
          </div>

          <p className="mt-32 text-[10px] md:text-xs text-cream/30 uppercase tracking-[0.4em] font-sans">
            Trusted by interior architects across India & Australia
          </p>
        </ScrollFade>
      </section>
    </div>
  );
}

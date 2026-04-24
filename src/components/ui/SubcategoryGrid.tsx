"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import Magnetic from "@/components/ui/Magnetic";
import { Subcategory } from "@/lib/collections-data";

/* ─── Per-card carousel ─────────────────────────────────────── */
function SubcategoryCarousel({ sub, aspectClass = "aspect-[3/2] md:aspect-[4/3]" }: { sub: Subcategory, aspectClass?: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const images = sub.images ?? [];
  const count = images.length;

  /* Sync active index on native scroll */
  useEffect(() => {
    const track = trackRef.current;
    if (!track || count < 2) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const slides = Array.from(track.children) as HTMLElement[];
        const center = track.scrollLeft + track.clientWidth / 2;
        let nearest = 0, minDist = Infinity;
        slides.forEach((el, i) => {
          const d = Math.abs(el.offsetLeft + el.clientWidth / 2 - center);
          if (d < minDist) { minDist = d; nearest = i; }
        });
        setActiveIndex(nearest);
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => { cancelAnimationFrame(raf); track.removeEventListener("scroll", onScroll); };
  }, [count]);

  const goTo = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const bounded = Math.min(Math.max(i, 0), count - 1);
    const slide = track.children[bounded] as HTMLElement | undefined;
    if (slide) {
      slide.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      setActiveIndex(bounded);
    }
  }, [count]);

  if (count === 0) return null;

  return (
    <div className="w-full relative group/carousel overflow-hidden">

      {/* ── Slides track ── */}
      <div
        ref={trackRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {images.map((src, i) => (
          <div
            key={i}
            className={`w-full flex-shrink-0 snap-center snap-always relative overflow-hidden bg-black ${aspectClass}`}
          >
            <Image
              src={src}
              alt={`${sub.title} – ${i + 1}`}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`
                object-cover pointer-events-none select-none
                transition-transform duration-[3.5s] ease-out will-change-transform
                ${activeIndex === i ? "scale-[1.07]" : "scale-100"}
              `}
            />
            {/* Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

            {/* Floating plate label — bottom-left */}
            <span className="absolute bottom-3 left-4 text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-gold/80 font-sans">
              {String(i + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>

      {/* ── Prev / Next arrows (desktop hover, mobile always-visible) ── */}
      {count > 1 && (
        <>
          {/* Prev */}
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label="Previous"
            className="
              absolute left-3 md:left-4 top-1/2 -translate-y-1/2 z-20
              h-10 w-10 md:h-12 md:w-12 rounded-full
              inline-flex items-center justify-center
              border border-white/10 bg-black/90 backdrop-blur-md text-white shadow-2xl
              disabled:opacity-0 hover:bg-black hover:border-gold/50 hover:text-gold hover:scale-105
              transition-all duration-500 transform
              md:opacity-0 md:scale-90 md:group-hover/carousel:opacity-100 md:group-hover/carousel:scale-100
            "
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 stroke-[1]">
              <path d="M20 12H4M10 6l-6 6 6 6" strokeLinecap="square" strokeLinejoin="miter" />
            </svg>
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            disabled={activeIndex === count - 1}
            aria-label="Next"
            className="
              absolute right-3 md:right-4 top-1/2 -translate-y-1/2 z-20
              h-10 w-10 md:h-12 md:w-12 rounded-full
              inline-flex items-center justify-center
              border border-white/10 bg-black/90 backdrop-blur-md text-white shadow-2xl
              disabled:opacity-0 hover:bg-black hover:border-gold/50 hover:text-gold hover:scale-105
              transition-all duration-500 transform
              md:opacity-0 md:scale-90 md:group-hover/carousel:opacity-100 md:group-hover/carousel:scale-100
            "
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 stroke-[1]">
              <path d="M4 12h16M14 6l6 6-6 6" strokeLinecap="square" strokeLinejoin="miter" />
            </svg>
          </button>

          {/* ── Dot indicators — bottom-right ── */}
          <div className="absolute bottom-3 right-4 flex items-center gap-1.5 z-20">
            {images.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => goTo(dotIdx)}
                aria-label={`Slide ${dotIdx + 1}`}
                className={`
                  h-[3px] rounded-full transition-all duration-500
                  ${dotIdx === activeIndex
                    ? "w-6 bg-gold"
                    : "w-2 bg-white/35 hover:bg-white/60"}
                `}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/* ─── Main section ───────────────────────────────────────────── */
interface SubcategoryGridProps {
  collectionTitle: string;
  subcategories?: Subcategory[];
}

export default function SubcategoryGrid({ collectionTitle, subcategories }: SubcategoryGridProps) {
  if (!subcategories || subcategories.length === 0) return null;

  return (
    <section className="w-full bg-soft-black relative overflow-hidden py-20 md:py-28">
      {/* Top separator line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

      {/* ── Section header ── */}
      <SectionReveal>
        <div className="flex flex-col items-center text-center mb-14 md:mb-20 px-6">
          <div className="flex items-center gap-4 md:gap-6 mb-5">
            <div className="w-8 md:w-12 h-px bg-gold/40" />
            <p className="text-[10px] md:text-xs text-gold uppercase tracking-[0.4em] font-sans">Archives</p>
            <div className="w-8 md:w-12 h-px bg-gold/40" />
          </div>
          <h2 className="text-display font-light text-4xl md:text-5xl lg:text-6xl text-off-white mb-4 leading-tight tracking-tight max-w-4xl">
            Explore {collectionTitle} Catalogues.
          </h2>
          <p className="text-cream/45 font-light text-sm md:text-base leading-relaxed tracking-wide max-w-xl text-balance">
            Curated selections — dimensions, finishes, and sourcing parameters direct from the source.
          </p>
        </div>
      </SectionReveal>

      {/* ══════════════════════════════════════════════
          MOBILE LAYOUT — Flawless 10/10 Editorial Zig-Zag
      ══════════════════════════════════════════════ */}
      <div className="md:hidden flex flex-col px-5 gap-20 pb-16 w-full">
        {subcategories.map((sub, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <SectionReveal key={sub.id} delay={0.1}>
              <div className="relative w-full flex flex-col">
                
                {/* ── Title & Ghost Numeral ── */}
                <div className={`flex items-end mb-6 ${isEven ? 'justify-start' : 'justify-end'} relative`}>
                  {/* Majestic Ghost Number pushed behind */}
                  <span className={`absolute -top-10 ${isEven ? '-left-3' : '-right-3'} text-[8rem] font-light leading-none text-white/[0.04] font-display select-none pointer-events-none`}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  
                  <h3 className={`text-display font-light text-4xl text-off-white leading-none z-10 ${isEven ? "text-left" : "text-right"}`}>
                    {sub.title}
                  </h3>
                </div>

                {/* ── Premium 4:5 Immersive Carousel ── */}
                <div className="w-full shadow-2xl border border-white/10 rounded-sm overflow-hidden z-10 bg-black">
                  <SubcategoryCarousel sub={sub} aspectClass="aspect-[4/5]" />
                </div>

                {/* ── Tagline & Unified Solid CTA ── */}
                <div className={`mt-7 flex flex-col w-full z-10 ${isEven ? "items-start text-left" : "items-end text-right"}`}>
                  <p className="text-cream/50 text-sm leading-relaxed tracking-wide mb-8 max-w-[88%]">
                    {sub.tagline}
                  </p>
                  
                  {/* Flawless UX Button: Always Full Width, High Visibility */}
                  <a 
                    href={sub.catalogueUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full flex justify-center items-center gap-3 bg-gold/10 border border-gold/40 hover:bg-gold hover:text-deep-ink py-4 text-[11px] uppercase tracking-[0.25em] font-sans text-gold transition-colors duration-300"
                  >
                    <span>View Catalogue</span>
                    <span className="text-sm">→</span>
                  </a>
                </div>

              </div>
            </SectionReveal>
          );
        })}
      </div>

      {/* ══════════════════════════════════════════════
          DESKTOP LAYOUT — 2 × 2 card grid
      ══════════════════════════════════════════════ */}
      <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8 w-full max-w-6xl mx-auto px-6">
        {subcategories.map((sub, idx) => (
          <SectionReveal key={sub.id} delay={0.08 * idx}>
            <div className="
              relative w-full h-full flex flex-col
              border border-white/5 bg-deep-ink group
              hover:border-gold/20 transition-colors duration-500
              overflow-hidden
            ">
              {/* Gold shimmer on hover — top edge */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/40 transition-all duration-700 pointer-events-none z-10" />

              {/* Carousel — full width, no padding */}
              <SubcategoryCarousel sub={sub} />

              {/* Text + CTA */}
              <div className="flex flex-col flex-1 px-8 pb-9 pt-6 md:px-9 md:pb-10">
                <div className="w-10 h-px bg-gold/30 mb-5 transition-all duration-500 group-hover:w-20 group-hover:bg-gold/55" />
                <h3 className="text-display font-light text-2xl md:text-[1.75rem] text-off-white mb-3 leading-tight tracking-tight">
                  {sub.title}
                </h3>
                <p className="text-cream/45 font-light text-sm leading-relaxed tracking-wide mb-8 flex-1">
                  {sub.tagline}
                </p>

                <div className="self-start mt-auto">
                  <Magnetic strength={10}>
                    <a
                      href={sub.catalogueUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group/btn inline-flex items-center gap-3
                        border border-gold/30 bg-gold/5
                        px-7 py-3 md:px-8 md:py-3.5
                        text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-sans text-off-white
                        hover:bg-gold hover:text-deep-ink hover:border-gold
                        transition-all duration-500
                      "
                    >
                      <span>View Catalogue</span>
                      <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                    </a>
                  </Magnetic>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-14 h-14 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-gold/20 to-transparent" />
                <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-gold/20 to-transparent" />
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}

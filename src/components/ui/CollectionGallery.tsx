"use client";

import { useEffect, useRef, useState } from "react";
import PremiumImage from "@/components/ui/PremiumImage";

interface CollectionGalleryItem {
  src: string;
  alt: string;
  blurDataURL: string;
}

interface CollectionGalleryProps {
  collectionTitle: string;
  items: CollectionGalleryItem[];
}

function getNearestSlideIndex(track: HTMLDivElement) {
  const slides = Array.from(track.children) as HTMLElement[];
  if (!slides.length) return 0;

  const viewportCenter = track.scrollLeft + track.clientWidth / 2;
  let nearestIndex = 0;
  let nearestDistance = Number.POSITIVE_INFINITY;

  slides.forEach((slide, index) => {
    const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
    const distance = Math.abs(slideCenter - viewportCenter);
    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearestIndex = index;
    }
  });

  return nearestIndex;
}

export default function CollectionGallery({ collectionTitle, items }: CollectionGalleryProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const maxIndex = Math.max(items.length - 1, 0);

  const goToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;

    const boundedIndex = Math.min(Math.max(index, 0), maxIndex);
    const slides = track.children;
    const slide = slides[boundedIndex] as HTMLElement | undefined;

    if (slide) {
      slide.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      setActiveIndex(boundedIndex);
    }
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    const syncActiveSlide = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setActiveIndex(getNearestSlideIndex(track));
      });
    };

    track.addEventListener("scroll", syncActiveSlide, { passive: true });
    window.addEventListener("resize", syncActiveSlide);
    syncActiveSlide();

    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", syncActiveSlide);
      window.removeEventListener("resize", syncActiveSlide);
    };
  }, []);

  return (
    <section className="w-full bg-deep-ink">
      <div className="relative py-8 md:py-16 lg:py-20 xl:py-24">
        <div
          ref={trackRef}
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") {
              event.preventDefault();
              goToIndex(activeIndex + 1);
            }
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              goToIndex(activeIndex - 1);
            }
          }}
          className="flex gap-4 md:gap-6 px-4 md:px-12 lg:px-24 xl:px-28 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth focus:outline-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          aria-label={`${collectionTitle} gallery carousel`}
        >
          {items.map((item, i) => (
            <article
              key={`${item.src}-${i}`}
              className="relative group shrink-0 snap-center w-[86vw] md:w-[72vw] lg:w-[64vw] xl:w-[56vw] aspect-[4/5] md:aspect-[16/10] bg-black overflow-hidden rounded-sm"
            >
              <PremiumImage
                src={item.src}
                fill
                alt={item.alt}
                className="object-cover transition-transform duration-[2.5s] ease-out md:group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 86vw, (max-width: 1024px) 72vw, (max-width: 1536px) 64vw, 56vw"
                blurDataURL={item.blurDataURL}
              />

              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-soft-black via-soft-black/50 to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 md:bottom-8 md:left-8 z-10 pointer-events-none leading-none">
                <span className="block text-gold uppercase tracking-[0.35em] text-[10px] md:text-xs font-sans mb-2 drop-shadow-md">
                  Plate {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-off-white font-display text-2xl md:text-4xl drop-shadow-2xl tracking-wide">
                  {collectionTitle}
                </h3>
              </div>
            </article>
          ))}
        </div>

        {items.length > 1 ? (
          <div className="hidden md:flex items-center justify-between px-12 lg:px-24 xl:px-28 mt-8">
            <button
              type="button"
              onClick={() => goToIndex(activeIndex - 1)}
              className="inline-flex items-center justify-center h-11 w-11 border border-gold/30 text-gold hover:bg-gold hover:text-deep-ink transition-colors duration-300"
              aria-label="Previous gallery image"
            >
              &lt;
            </button>

            <div className="flex items-center gap-2.5">
              {items.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  type="button"
                  onClick={() => goToIndex(dotIndex)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    dotIndex === activeIndex ? "w-8 bg-gold" : "w-3 bg-white/25 hover:bg-white/45"
                  }`}
                  aria-label={`Go to image ${dotIndex + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => goToIndex(activeIndex + 1)}
              className="inline-flex items-center justify-center h-11 w-11 border border-gold/30 text-gold hover:bg-gold hover:text-deep-ink transition-colors duration-300"
              aria-label="Next gallery image"
            >
              &gt;
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}

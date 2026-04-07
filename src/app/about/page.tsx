import type { Metadata } from "next";
import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import CurtainReveal from "@/components/ui/CurtainReveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Casa Bliss sources what most designers fly to find. Learn about our sourcing process, our values, and why interior architects across India and Australia trust us.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 md:pt-40 pb-20 md:pb-32">
      {/* ═══ Founder Statement ═══ */}
      <section className="px-6 lg:px-12 mb-24 md:mb-40">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <p className="text-eyebrow text-gold/60 mb-6">Our Story</p>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <SectionReveal delay={0}>
              <div className="space-y-8">
                <h1 className="text-display text-3xl md:text-4xl lg:text-5xl text-off-white leading-tight">
                  We fly to Foshan twice a year. We only bring back what passes our <i className="italic font-light pr-1 opacity-90">own</i> test.
                </h1>
                <div className="w-16 h-px bg-gold/40" />
                <p className="text-cream/60 text-lg leading-relaxed">
                  Casa Bliss was born from a simple frustration — the best furniture in the world
                  is made in China, but getting access to it requires relationships that take years
                  to build. We built those relationships so you don&apos;t have to.
                </p>
                <p className="text-cream/40 text-base leading-relaxed">
                  Every factory we work with has been visited, vetted, and revisited. We don&apos;t
                  source from catalogs. We source from production floors.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={1}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <CurtainReveal>
                  <Image
                    src="/images/about-sourcing.jpg"
                    alt="Casa Bliss sourcing process"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </CurtainReveal>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ═══ Why Casa Bliss — 3 Differentiators ═══ */}
      <section className="px-6 lg:px-12 mb-24 md:mb-40 relative pt-12">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen max-w-7xl h-px bg-gold/10" />
        <div className="max-w-4xl mx-auto space-y-20 md:space-y-28">
          <SectionReveal>
            <p className="text-eyebrow text-gold/60 mb-4 text-center">
              Why Casa Bliss
            </p>
            <h2 className="text-heading text-2xl md:text-3xl text-off-white text-center mb-20">
              Three things we do differently.
            </h2>
          </SectionReveal>

          {/* Differentiator 1 */}
          <SectionReveal delay={0}>
            <div className="max-w-[680px]">
              <p className="text-eyebrow text-gold/40 mb-4">01</p>
              <h3 className="text-heading text-xl md:text-2xl text-off-white mb-4">
                Factory-Direct Sourcing
              </h3>
              <p className="text-cream/50 text-base leading-relaxed">
                We don&apos;t work through trading companies or middlemen. Our relationships are
                with the factories themselves — the same ones that produce for European luxury
                brands. This means better quality control, better pricing, and complete
                transparency on materials and processes.
              </p>
            </div>
          </SectionReveal>

          {/* Differentiator 2 */}
          <SectionReveal delay={0}>
            <div className="max-w-[680px] md:ml-auto">
              <p className="text-eyebrow text-gold/40 mb-4">02</p>
              <h3 className="text-heading text-xl md:text-2xl text-off-white mb-4">
                Curated, Not Catalogued
              </h3>
              <p className="text-cream/50 text-base leading-relaxed">
                We don&apos;t offer ten thousand products. We offer the right ones. Every piece in
                our collection has been selected for its construction quality, material integrity,
                and design longevity. If it doesn&apos;t pass our standard, it doesn&apos;t make our
                collection — regardless of margin.
              </p>
            </div>
          </SectionReveal>

          {/* Differentiator 3 */}
          <SectionReveal delay={0}>
            <div className="max-w-[680px]">
              <p className="text-eyebrow text-gold/40 mb-4">03</p>
              <h3 className="text-heading text-xl md:text-2xl text-off-white mb-4">
                End-to-End Handling
              </h3>
              <p className="text-cream/50 text-base leading-relaxed">
                From factory floor to your front door. We handle sourcing, quality inspection,
                export documentation, shipping, customs clearance, and last-mile delivery. You
                share your vision. We handle every step between there and here.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ═══ Where We Source — SVG Map ═══ */}
      <section className="px-6 lg:px-12 mb-24 md:mb-40">
        <div className="max-w-5xl mx-auto text-center">
          <SectionReveal>
            <p className="text-eyebrow text-gold/60 mb-4">Where We Source</p>
            <h2 className="text-heading text-2xl md:text-3xl text-off-white mb-16">
              Southern China&apos;s manufacturing heartland.
            </h2>
          </SectionReveal>

          <SectionReveal delay={1}>
            <div className="relative w-full max-w-3xl mx-auto">
              {/* Minimal Map SVG */}
              <svg
                viewBox="0 0 800 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
              >
                {/* China outline (simplified) */}
                <path
                  d="M200 80 L350 60 L500 70 L620 90 L700 130 L720 200 L710 280 L680 350 L620 400 L540 420 L450 430 L360 410 L280 370 L220 310 L180 240 L170 170 L185 120 Z"
                  fill="#1E1D18"
                  stroke="#2C2B24"
                  strokeWidth="1.5"
                />

                {/* Guangdong Province highlight */}
                <path
                  d="M520 340 L560 330 L600 350 L610 380 L580 400 L540 395 L510 370 Z"
                  fill="#2C2B24"
                  stroke="#C9A96E"
                  strokeWidth="1"
                  opacity="0.5"
                />

                {/* Foshan */}
                <circle cx="545" cy="365" r="6" fill="#C9A96E" />
                <circle cx="545" cy="365" r="10" fill="none" stroke="#C9A96E" strokeWidth="0.5" opacity="0.4" />
                <text x="555" y="358" fill="#E8DFC8" fontSize="12" fontFamily="sans-serif">
                  Foshan
                </text>

                {/* Guangzhou */}
                <circle cx="565" cy="345" r="5" fill="#C9A96E" opacity="0.7" />
                <text x="575" y="340" fill="#E8DFC8" fontSize="11" fontFamily="sans-serif" opacity="0.7">
                  Guangzhou
                </text>

                {/* Jieyang */}
                <circle cx="600" cy="360" r="4" fill="#C9A96E" opacity="0.5" />
                <text x="610" y="355" fill="#E8DFC8" fontSize="11" fontFamily="sans-serif" opacity="0.6">
                  Jieyang
                </text>

                {/* Chaozhou */}
                <circle cx="590" cy="340" r="4" fill="#C9A96E" opacity="0.5" />
                <text x="595" y="330" fill="#E8DFC8" fontSize="11" fontFamily="sans-serif" opacity="0.6">
                  Chaozhou
                </text>
              </svg>

              {/* Labels below */}
              <div className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm text-cream/40">
                <span>Foshan — Furniture & Ceramics</span>
                <span>Guangzhou — Kitchen & Hardware</span>
                <span>Jieyang — Faucets & Metalwork</span>
                <span>Chaozhou — Sanitaryware</span>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ═══ Trust Signal ═══ */}
      <section className="px-6 lg:px-12 py-20 md:py-32">
        <SectionReveal>
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-px bg-gold/30 mx-auto mb-10" />
            <p className="text-heading text-2xl md:text-3xl text-off-white leading-relaxed">
              Trusted by interior architects across India and Australia.
            </p>
            <div className="w-16 h-px bg-gold/30 mx-auto mt-10" />
          </div>
        </SectionReveal>
      </section>
    </div>
  );
}

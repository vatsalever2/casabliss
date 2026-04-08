import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";
import CurtainReveal from "@/components/ui/CurtainReveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Casa Bliss sources what most designers fly to find. Learn about our sourcing process, our values, and why interior architects across India and Australia trust us.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 md:pt-40 pb-0">
      
      {/* ═══════════════════════════════════════════════════
          HERO MANIFESTO
          ═══════════════════════════════════════════════════ */}
      <section className="px-6 lg:px-12 mb-32 md:mb-56 relative">
        <div className="max-w-7xl mx-auto pt-10">
          <SectionReveal>
            <p className="text-xs uppercase tracking-[0.3em] text-gold/60 mb-12 font-sans font-medium">
              The Sourcing Manifesto
            </p>
            <h1 className="text-[3.5rem] md:text-[5.5rem] lg:text-[7.5rem] font-serif leading-[1] text-off-white tracking-tight max-w-[12ch]">
              We don&apos;t source from catalogs.
              <br />
              <span className="text-cream/30 italic font-light">We source from production floors.</span>
            </h1>
          </SectionReveal>
          
          <div className="mt-24 md:mt-40 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-0">
             <div className="md:col-span-5 md:col-start-8">
                <SectionReveal delay={0.4}>
                  <p className="text-cream/70 text-xl md:text-2xl font-light leading-relaxed mb-8">
                    Casa Bliss was born from a simple frustration — the best furniture in the world
                    is made in China, but getting access to it requires relationships that take years
                    to build. We built those relationships so you don&apos;t have to.
                  </p>
                  <div className="w-12 h-px bg-gold/30 mb-8" />
                  <p className="text-cream/40 text-base leading-relaxed">
                    Every factory we work with has been visited, vetted, and revisited. 
                    We fly to Foshan twice a year. We only bring back what passes our own standard.
                  </p>
                </SectionReveal>
             </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          THE STAGGERED EXHIBITION (01, 02, 03)
          ═══════════════════════════════════════════════════ */}
      <section className="overflow-hidden">
        
         {/* 01: Factory Direct */}
         <div className="relative w-full min-h-[80vh] flex items-center px-6 lg:px-12 py-24 md:py-32 border-t border-gold/10">
            <div className="absolute top-1/2 left-[-5%] -translate-y-1/2 text-[15rem] md:text-[35rem] font-serif text-white/[0.02] pointer-events-none select-none leading-none z-0 tracking-tighter">
              01
            </div>
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 relative z-10 items-center">
              <div className="order-2 md:order-1">
                <SectionReveal>
                  <p className="text-xs uppercase tracking-[0.2em] text-gold/60 mb-6 font-sans">Access</p>
                  <h2 className="text-display text-4xl md:text-6xl lg:text-7xl text-off-white mb-8 border-l border-gold/30 pl-8">
                    Factory-Direct.
                  </h2>
                  <p className="text-cream/50 text-lg leading-relaxed max-w-md pl-8">
                    We don&apos;t work through trading companies or middlemen. Our relationships are
                    with the factories themselves — the same ones that produce for European luxury
                    brands. This means better quality control, better pricing, and absolute transparency.
                  </p>
                </SectionReveal>
              </div>
              <div className="order-1 md:order-2 w-full max-w-md mx-auto md:ml-auto">
                <SectionReveal delay={0.2}>
                  <div className="relative aspect-[3/4] w-full overflow-hidden">
                    <CurtainReveal>
                      {/* Temporary placeholder image — swap with raw factory floor shot */}
                      <Image src="/images/about-sourcing.jpg" alt="Factory Direct Access" fill className="object-cover grayscale hover:grayscale-0 transition-transform duration-1000 hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
                    </CurtainReveal>
                  </div>
                </SectionReveal>
              </div>
            </div>
         </div>

         {/* 02: Curated */}
         <div className="relative w-full min-h-[80vh] flex items-center px-6 lg:px-12 py-24 md:py-32 border-t border-gold/10">
            <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 text-[15rem] md:text-[35rem] font-serif text-white/[0.02] pointer-events-none select-none leading-none z-0 tracking-tighter">
              02
            </div>
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 relative z-10 items-center">
              <div className="w-full max-w-md mx-auto md:mr-auto">
                <SectionReveal delay={0.2}>
                  <div className="relative aspect-[3/4] w-full overflow-hidden">
                    <CurtainReveal>
                      {/* Temporary placeholder image — swap with raw materials / marble slab shot */}
                      <Image src="/images/about-sourcing.jpg" alt="Curated Selection" fill className="object-cover grayscale hover:grayscale-0 transition-transform duration-1000 hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
                    </CurtainReveal>
                  </div>
                </SectionReveal>
              </div>
              <div>
                <SectionReveal>
                  <p className="text-xs uppercase tracking-[0.2em] text-gold/60 mb-6 font-sans">Selection</p>
                  <h2 className="text-display text-4xl md:text-6xl lg:text-7xl text-off-white mb-8 border-l border-gold/30 pl-8">
                    Curated.
                  </h2>
                  <p className="text-cream/50 text-lg leading-relaxed max-w-md pl-8">
                    We don&apos;t offer ten thousand products. We offer the right ones. Every piece in
                    our collection has been selected for its construction quality, material integrity,
                    and design longevity. If it doesn&apos;t pass, it doesn&apos;t make our collection.
                  </p>
                </SectionReveal>
              </div>
            </div>
         </div>

         {/* 03: End-to-End */}
         <div className="relative w-full min-h-[80vh] flex items-center px-6 lg:px-12 py-24 md:py-32 border-t border-gold/10">
            <div className="absolute top-1/2 left-[-5%] -translate-y-1/2 text-[15rem] md:text-[35rem] font-serif text-white/[0.02] pointer-events-none select-none leading-none z-0 tracking-tighter">
              03
            </div>
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 relative z-10 items-center">
              <div className="order-2 md:order-1">
                <SectionReveal>
                  <p className="text-xs uppercase tracking-[0.2em] text-gold/60 mb-6 font-sans">Logistics</p>
                  <h2 className="text-display text-4xl md:text-6xl lg:text-7xl text-off-white mb-8 border-l border-gold/30 pl-8">
                    End-to-End.
                  </h2>
                  <p className="text-cream/50 text-lg leading-relaxed max-w-md pl-8">
                    From factory floor to your front door. We handle sourcing, rigorous quality inspection,
                    export documentation, international shipping, customs clearance, and last-mile delivery. 
                    You share your vision. We handle every step between there and here.
                  </p>
                </SectionReveal>
              </div>
              <div className="order-1 md:order-2 w-full max-w-md mx-auto md:ml-auto">
                <SectionReveal delay={0.2}>
                  <div className="relative aspect-[3/4] w-full overflow-hidden">
                    <CurtainReveal>
                      {/* Temporary placeholder image — swap with shipping crates / port shot */}
                      <Image src="/images/about-sourcing.jpg" alt="End to End Logistics" fill className="object-cover grayscale hover:grayscale-0 transition-transform duration-1000 hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
                    </CurtainReveal>
                  </div>
                </SectionReveal>
              </div>
            </div>
         </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          THE BLUEPRINT MAP
          ═══════════════════════════════════════════════════ */}
      <section className="px-6 lg:px-12 py-24 md:py-40 bg-[#080808] border-t border-b border-gold/10 relative overflow-hidden">
        {/* Architectural Grid overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto">
          <SectionReveal>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-gold/20 pb-8 gap-8">
              <div>
                <p className="text-xs font-mono text-gold/60 mb-4 tracking-widest">FIG 1.0 — ORIGIN MAP</p>
                <h2 className="text-display text-3xl md:text-5xl text-off-white">
                  Southern China&apos;s <br/> Manufacturing Heartland.
                </h2>
              </div>
              <div className="text-left md:text-right font-mono text-xs text-cream/40 leading-relaxed uppercase">
                <p>COORD: 23.0215° N, 113.1214° E</p>
                <p>REGION: GUANGDONG PROVINCE</p>
                <p>ZONES: FOSHAN, GUANGZHOU, JIEYANG</p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="relative w-full max-w-4xl mx-auto py-12">
              {/* Technical / Blueprint Map SVG */}
              <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto opacity-80">
                {/* Crosshairs & Guides */}
                <line x1="0" y1="250" x2="800" y2="250" stroke="#C9A96E" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3" />
                <line x1="400" y1="0" x2="400" y2="500" stroke="#C9A96E" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3" />

                {/* China outline (Technical) */}
                <path
                  d="M200 80 L350 60 L500 70 L620 90 L700 130 L720 200 L710 280 L680 350 L620 400 L540 420 L450 430 L360 410 L280 370 L220 310 L180 240 L170 170 L185 120 Z"
                  fill="#0A0A0A"
                  stroke="#2C2B24"
                  strokeWidth="1"
                />

                {/* Guangdong Highlight */}
                <path
                  d="M520 340 L560 330 L600 350 L610 380 L580 400 L540 395 L510 370 Z"
                  fill="#111111"
                  stroke="#C9A96E"
                  strokeWidth="1"
                  opacity="0.8"
                />

                {/* Plot Points */}
                <g transform="translate(545,365)">
                  <circle cx="0" cy="0" r="3" fill="#C9A96E" />
                  <circle cx="0" cy="0" r="15" fill="none" stroke="#C9A96E" strokeWidth="0.5" opacity="0.5" />
                  <line x1="-20" y1="0" x2="20" y2="0" stroke="#C9A96E" strokeWidth="0.5" opacity="0.5" />
                  <line x1="0" y1="-20" x2="0" y2="20" stroke="#C9A96E" strokeWidth="0.5" opacity="0.5" />
                  <text x="15" y="-10" fill="#E8DFC8" fontSize="10" fontFamily="monospace" opacity="0.8">FOSHAN [CERAMICS/FURNITURE]</text>
                </g>

                <g transform="translate(565,345)">
                  <circle cx="0" cy="0" r="2" fill="#C9A96E" opacity="0.7"/>
                  <text x="10" y="-5" fill="#E8DFC8" fontSize="9" fontFamily="monospace" opacity="0.6">GUANGZHOU [KITCHEN]</text>
                </g>

                <g transform="translate(600,360)">
                  <circle cx="0" cy="0" r="2" fill="#C9A96E" opacity="0.7"/>
                  <text x="10" y="5" fill="#E8DFC8" fontSize="9" fontFamily="monospace" opacity="0.6">JIEYANG [METAL/FAUCETS]</text>
                </g>
              </svg>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          THE PITCH CTA
          ═══════════════════════════════════════════════════ */}
      <section className="px-6 lg:px-12 py-24 md:py-40 relative border-t border-gold/10">
        <SectionReveal>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-eyebrow text-gold/60 mb-6">The Next Step</p>
            <h2 className="text-heading text-4xl md:text-5xl lg:text-6xl text-off-white mb-16 leading-tight">
              Ready to furnish <br /> your next project?
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-12">
              <Link 
                href="/collections"
                className="group flex flex-col items-center gap-4"
              >
                <div className="w-full h-px bg-gold/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                <span className="text-cream/80 text-lg group-hover:text-gold transition-colors duration-300">
                  Explore the collections
                </span>
                <div className="w-full h-px bg-gold/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
              </Link>
              
              <span className="hidden sm:block w-px h-12 bg-gold/20" />

              <Link 
                href="/inquire"
                className="group flex flex-col items-center gap-4"
              >
                <div className="w-full h-px bg-gold/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                <span className="text-cream/80 text-lg group-hover:text-off-white transition-colors duration-300">
                  Start a conversation
                </span>
                <div className="w-full h-px bg-gold/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
              </Link>
            </div>
            
            <div className="mt-24">
              <p className="text-xs text-cream/30 uppercase tracking-widest font-mono">
                Trusted by interior architects across India & Australia
              </p>
            </div>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
}

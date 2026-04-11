"use client";

import SectionReveal from "./SectionReveal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./Magnetic";
import Link from "next/link";
import PremiumImage from "./PremiumImage";

const steps = [
  {
    id: "01",
    title: "The Briefing",
    description: "Establishing spatial constraints and architectural vision. We align intimately with your team before any logistics commence.",
    image: "/images/service-1.jpg"
  },
  {
    id: "02",
    title: "The Excursion",
    description: "Absolute access. We manage all global travel while you curate pieces directly from three factory-direct floors in Foshan.",
    image: "/images/service-2.jpg"
  },
  {
    id: "03",
    title: "The Handover",
    description: "Uncompromising execution. Absolute customs clearance transitioning straight into meticulous white-glove assembly within your property.",
    image: "/images/service-3.jpg"
  }
];

export default function BespokeProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 md:py-32 px-6 lg:px-12 bg-deep-ink border-y border-gold/10 relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left: Interactive Sticky Info */}
        <div className="w-full lg:w-1/2 flex flex-col relative z-10">
          <div className="sticky top-32">
            <SectionReveal>
              <div className="flex items-center gap-6 mb-8">
                 <div className="w-8 h-px bg-gold/30" />
                 <span className="text-gold/60 text-[10px] md:text-xs tracking-[0.4em] uppercase font-sans">
                   The Methodology
                 </span>
              </div>
              <h2 className="text-display font-light text-5xl lg:text-7xl text-off-white leading-tight mb-8">
                Bespoke Acquisition. <br/> <i className="italic font-light text-gold/90">Zero Friction.</i>
              </h2>
            </SectionReveal>

            <div className="mt-14 flex flex-col gap-6">
              {steps.map((step, idx) => (
                <div 
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`group cursor-pointer py-6 border-b border-white/5 transition-all duration-500 hover:pl-4 ${activeStep === idx ? 'opacity-100 pl-4 border-white/20' : 'opacity-40 hover:opacity-70'}`}
                >
                  <div className="flex items-center gap-6 md:gap-8">
                    <span className="text-gold/80 font-serif italic text-2xl md:text-3xl w-8">{step.id}.</span>
                    <h3 className="text-display font-light tracking-wide text-2xl md:text-4xl text-off-white group-hover:text-gold transition-colors duration-500">
                      {step.title}
                    </h3>
                  </div>
                  <AnimatePresence>
                    {activeStep === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="mt-6 text-cream/50 leading-relaxed pl-14 md:pl-16 pr-8 text-[15px] md:text-lg max-w-md font-sans">
                          {step.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="mt-16 pl-14 md:pl-16">
              <Magnetic strength={15}>
                 <Link href="/process" className="group relative inline-flex items-center justify-center border border-gold/30 bg-gold/5 px-8 py-4 text-[10px] uppercase tracking-[0.25em] font-sans text-off-white hover:bg-gold hover:text-deep-ink hover:border-gold transition-all duration-500">
                   <span className="relative z-10 flex items-center gap-4">
                     <span>Explore The Passage</span>
                     <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                   </span>
                 </Link>
              </Magnetic>
            </div>
          </div>
        </div>

        {/* Right: Dynamic Image Preview */}
        <div className="absolute lg:relative inset-0 lg:inset-auto w-full lg:w-1/2 h-full lg:h-[80vh] lg:min-h-[400px] mt-0 z-0 lg:z-auto opacity-25 lg:opacity-100 pointer-events-none lg:pointer-events-auto transition-opacity duration-1000">
          <div className="absolute inset-0 lg:hidden bg-gradient-to-t from-deep-ink via-deep-ink/80 to-deep-ink/40 z-10" />
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 overflow-hidden lg:shadow-2xl"
            >
               <PremiumImage 
                 src={steps[activeStep].image} 
                 alt={steps[activeStep].title} 
                 fill 
                 className="object-cover" 
                 sizes="(max-width: 1024px) 100vw, 50vw"
               />
               <div className="absolute inset-0 bg-deep-ink/10 mix-blend-multiply lg:block hidden" />
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

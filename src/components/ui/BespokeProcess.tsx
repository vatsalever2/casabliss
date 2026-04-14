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
    description: "Aligning spatial vision. We establish constraints before logistics commence.",
    image: "/images/process/service-1.jpg"
  },
  {
    id: "02",
    title: "The Excursion",
    description: "We handle travel while you curate directly from Foshan's premier factory floors.",
    image: "/images/process/service-2.jpg"
  },
  {
    id: "03",
    title: "The Handover",
    description: "Complete customs clearance to white-glove assembly in your property.",
    image: "/images/process/service-3.jpg"
  }
];

export default function BespokeProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="h-[100svh] w-full bg-deep-ink border-y border-gold/10 relative overflow-hidden flex items-center">
      
      {/* Background Image (Mobile) / Right Half Image (Desktop) */}
      <div className="absolute inset-0 lg:left-1/2 lg:right-0 lg:w-1/2 h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-deep-ink via-deep-ink/90 to-deep-ink/30 lg:hidden z-10" />
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
             <PremiumImage 
               src={steps[activeStep].image} 
               alt={steps[activeStep].title} 
               fill 
               className="object-cover opacity-40 lg:opacity-100" 
               sizes="(max-width: 1024px) 100vw, 50vw"
             />
             <div className="absolute inset-0 bg-deep-ink/10 mix-blend-multiply lg:block hidden" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Container */}
      <div className="w-full max-w-7xl mx-auto flex h-full relative z-20">
        {/* Left: Text Content */}
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-6 md:px-12 lg:pr-16">
          <SectionReveal>
            <div className="flex items-center gap-4 mb-4">
               <div className="w-6 h-px bg-gold/30" />
               <span className="text-gold/60 text-[10px] md:text-xs tracking-[0.4em] uppercase font-sans">
                 Methodology
               </span>
            </div>
            <h2 className="text-display font-light text-4xl md:text-5xl lg:text-6xl text-off-white leading-tight mb-8 md:mb-12">
              Bespoke Acquisition. <br className="hidden md:block"/> <i className="italic text-gold/90">Zero Friction.</i>
            </h2>
          </SectionReveal>

          <div className="flex flex-col gap-2 md:gap-4 w-full max-w-lg">
            {steps.map((step, idx) => (
              <div 
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`group cursor-pointer py-3 md:py-5 border-b border-white/5 transition-all duration-500 hover:pl-2 md:hover:pl-4 ${activeStep === idx ? 'opacity-100 pl-2 md:pl-4 border-white/20' : 'opacity-40 hover:opacity-70'}`}
              >
                <div className="flex items-center gap-4 md:gap-6">
                  <span className="text-gold/80 font-serif italic text-xl md:text-2xl w-6 md:w-8">{step.id}.</span>
                  <h3 className="text-display font-light tracking-wide text-xl md:text-3xl text-off-white group-hover:text-gold transition-colors duration-500">
                    {step.title}
                  </h3>
                </div>
                <AnimatePresence>
                  {activeStep === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 md:mt-4 text-cream/70 leading-relaxed pl-10 md:pl-14 text-sm md:text-base font-sans pr-4">
                        {step.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-12 pl-2 md:pl-4">
            <Magnetic strength={15}>
               <Link href="/process" className="group relative inline-flex items-center justify-center border border-gold/30 bg-gold/5 px-6 md:px-8 py-3 md:py-4 text-[10px] md:text-xs uppercase tracking-[0.2em] font-sans text-off-white hover:bg-gold hover:text-deep-ink hover:border-gold transition-all duration-500">
                 <span className="relative z-10 flex items-center gap-3 md:gap-4">
                   <span>Explore Process</span>
                   <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                 </span>
               </Link>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}

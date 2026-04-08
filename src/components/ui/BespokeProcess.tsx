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
    title: "Consultation & Vision",
    description: "Our in-house architects work closely with you or your design team to understand the spatial requirements, material preferences, and the exact atmosphere you wish to cultivate.",
    image: "/images/vignette-1.jpg"
  },
  {
    id: "02",
    title: "Factory-Direct Curation",
    description: "We bypass local distributors entirely. Our team works directly with China's finest furniture factories, hand-selecting pieces that meet our exacting standards for material, proportion, and finish.",
    image: "/images/collection-furniture.jpg"
  },
  {
    id: "03",
    title: "White-Glove Acquisition",
    description: "From international logistics to final placement in your home. We handle the entire acquisition lifecycle, ensuring zero compromise on the condition and installation of your pieces.",
    image: "/images/vignette-2.jpg"
  }
];

export default function BespokeProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 md:py-32 px-6 lg:px-12 bg-deep-ink border-y border-gold/10 relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left: Interactive Sticky Info */}
        <div className="w-full lg:w-1/2 flex flex-col relative">
          <div className="sticky top-32">
            <SectionReveal>
              <span className="text-gold/60 text-xs md:text-sm tracking-[0.2em] uppercase font-sans mb-6 block">
                The Service
              </span>
              <h2 className="text-display text-4xl lg:text-6xl text-off-white leading-tight mb-8">
                Bespoke Acquisition. <br/> <i className="italic font-light text-gold/90">Zero Friction.</i>
              </h2>
            </SectionReveal>

            <div className="mt-12 flex flex-col gap-6">
              {steps.map((step, idx) => (
                <div 
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`group cursor-pointer py-6 border-b border-white/5 transition-all duration-500 hover:pl-4 ${activeStep === idx ? 'opacity-100 pl-4' : 'opacity-40 hover:opacity-70'}`}
                >
                  <div className="flex items-center gap-6 md:gap-10">
                    <span className="text-gold/60 font-serif text-xl md:text-2xl">{step.id}</span>
                    <h3 className="text-2xl md:text-3xl text-off-white group-hover:text-gold transition-colors duration-500">
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
                        <p className="mt-4 text-cream/60 leading-relaxed pl-12 md:pl-16 pr-8 text-sm md:text-base max-w-md">
                          {step.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="mt-16 pl-12 md:pl-16">
              <Magnetic strength={15}>
                 <Link href="/inquire" className="gold-link text-eyebrow text-gold/80 inline-flex items-center gap-4 py-2">
                   <span>Begin Consultation</span>
                   <span>→</span>
                 </Link>
              </Magnetic>
            </div>
          </div>
        </div>

        {/* Right: Dynamic Image Preview */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-[80vh] min-h-[400px] relative mt-12 lg:mt-0">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 overflow-hidden shadow-2xl"
            >
               <PremiumImage 
                 src={steps[activeStep].image} 
                 alt={steps[activeStep].title} 
                 fill 
                 className="object-cover" 
                 sizes="(max-width: 1024px) 100vw, 50vw"
               />
               <div className="absolute inset-0 bg-deep-ink/10 mix-blend-multiply" />
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

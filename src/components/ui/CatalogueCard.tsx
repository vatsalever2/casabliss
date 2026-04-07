"use client";

import { motion } from "framer-motion";
import Magnetic from "@/components/ui/Magnetic";

interface CatalogueCardProps {
  title: string;
  category: string;
  driveUrl: string;
}

export default function CatalogueCard({ title, category, driveUrl }: CatalogueCardProps) {
  return (
    <a 
      href={driveUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group block w-full relative border border-gold/10 bg-[#0A0A0A] p-8 md:p-10 transition-colors duration-500 hover:border-gold/30 hover:bg-[#0c0c0c]"
    >
      <div className="flex flex-col h-full justify-between gap-16 relative z-10">
        
        {/* Top Header */}
        <div className="flex items-start justify-between">
          <span className="text-xs uppercase tracking-[0.2em] text-gold/60 font-sans">
            {category}
          </span>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-cream/20 group-hover:text-gold transition-colors duration-500"
          >
            <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 2V8H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Bottom Content */}
        <div>
          <h3 className="text-2xl md:text-3xl text-off-white font-serif mb-6 group-hover:text-gold transition-colors duration-500 pr-4">
            {title}
          </h3>
          <div className="flex items-center gap-4 text-cream/50 text-sm group-hover:text-off-white transition-colors duration-500">
            <span className="gold-link">View Sourcebook</span>
            <motion.span 
               initial={{ x: 0 }}
               whileHover={{ x: 5 }}
               transition={{ duration: 0.3 }}
            >→</motion.span>
          </div>
        </div>
      </div>
      
      {/* Hover Background Noise */}
      <div className="absolute inset-0 z-0 bg-[url('/noise.svg')] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 mix-blend-overlay pointer-events-none" />
    </a>
  );
}

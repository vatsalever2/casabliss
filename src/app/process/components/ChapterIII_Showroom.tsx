"use client";

import { motion } from "framer-motion";
import PremiumImage from "@/components/ui/PremiumImage";

export default function ChapterIII_Showroom() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-7xl mx-auto pr-8 pl-[4.5rem] md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-32 relative"
    >
      <div className="w-full md:w-[45%] flex flex-col text-left md:text-right items-start md:items-end order-2 md:order-1 ml-auto">
        <span className="text-gold font-serif text-3xl mb-6 block italic opacity-80">III.</span>
        
        {/* Animated Premium Heading */}
        <div className="overflow-hidden mb-6 md:mb-8 pb-3">
          <motion.h2 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-display text-4xl md:text-6xl text-off-white leading-tight"
          >
            You explore.<br/>
            <i className="italic font-light text-gold/90 relative inline-block">
              The factories await.
              <motion.span 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                className="absolute -bottom-2 right-0 w-full h-[1px] bg-gradient-to-r from-transparent to-gold/50 origin-right"
              />
            </i>
          </motion.h2>
        </div>

        <motion.p 
          initial={{ opacity: 0, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-sans text-cream/60 text-[15px] md:text-lg leading-relaxed max-w-sm"
        >
          Step directly onto the production floor. Experience exclusive access to visit numerous specialized factories, allowing you to personally hand-pick every required item and inspect the craftsmanship before it ever ships.
        </motion.p>
      </div>

      <div className="w-full md:w-[45%] h-[40vh] md:h-[80vh] relative order-1 md:order-2 mr-auto overflow-hidden shadow-2xl">
        <PremiumImage 
          src="/images/hero/hero-home.jpg" 
          alt="Factory Sourcing" 
          fill 
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover opacity-90 transition-transform duration-[20s] ease-linear hover:scale-110"
        />
        <div className="absolute inset-0 border border-gold/10 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-ink/80 via-transparent to-transparent pointer-events-none z-10" />
        
        {/* Premium Floating Badge Element */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20 bg-[#0A0A0A]/40 backdrop-blur-md border border-gold/20 p-5 md:p-6 flex items-center gap-5 overflow-hidden"
        >
          {/* subtle moving light reflection */}
          <motion.div 
            animate={{ x: ["-150%", "250%"] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", repeatDelay: 1 }}
            className="absolute inset-0 w-[50%] bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 z-0 pointer-events-none"
          />
          
          <div className="w-[2px] h-10 bg-gradient-to-b from-gold to-gold/20 relative z-10 shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
          <div className="relative z-10">
            <span className="block text-gold/70 text-[9px] md:text-[10px] tracking-[0.3em] uppercase mb-1">Exclusive</span>
            <span className="block text-off-white font-serif text-xl md:text-2xl italic tracking-wide">Factory Access</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

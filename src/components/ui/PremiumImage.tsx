"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { motion } from "framer-motion";

interface PremiumImageProps extends ImageProps {
  alt: string;
}

export default function PremiumImage({ alt, ...props }: PremiumImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    const isAbsolute = props.fill || props.className?.includes("absolute");
    
    return (
      <div 
        className={`${isAbsolute ? "absolute inset-0" : "w-full h-full"} ${props.className || ""} bg-[#141517] flex flex-col items-center justify-center overflow-hidden border border-gold/5`}
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <span className="text-gold/30 uppercase tracking-[0.3em] text-[10px] sm:text-xs font-sans mb-1 sm:mb-2 text-center px-4">
            Asset Pending
          </span>
          <span className="text-cream/20 text-lg sm:text-xl font-serif text-center px-4">
            CASA BLISS
          </span>
        </motion.div>
      </div>
    );
  }

  // Smooth fade-in image when it resolves
  return (
    <Image
      {...props}
      alt={alt}
      onError={() => setHasError(true)}
      className={`${props.className || ""} transition-opacity duration-700`}
    />
  );
}

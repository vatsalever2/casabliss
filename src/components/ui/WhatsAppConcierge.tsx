"use client";

import { motion } from "framer-motion";
import Magnetic from "@/components/ui/Magnetic";
import { useEffect, useState } from "react";

export default function WhatsAppConcierge() {
  const [whatsappNumber, setWhatsappNumber] = useState("917386680089"); // Default to India
  const whatsappMessage = "Hello Casa Bliss, I would like to inquire about your collections.";

  useEffect(() => {
    // Detect if client is in Australia
    fetch("https://api.country.is")
      .then((res) => res.json())
      .then((data) => {
        if (data.country === "AU") {
          // Replace with the actual Australian WhatsApp number including country code
          setWhatsappNumber("61000000000"); 
        }
      })
      .catch(() => {
        // Fallback: Check if timezone indicates Australia silently
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (timeZone && timeZone.startsWith("Australia/")) {
          setWhatsappNumber("61000000000"); 
        }
      });
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 mix-blend-difference md:mix-blend-normal"
    >
      <Magnetic strength={15}>
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-3 border border-gold/30 bg-deep-ink/80 backdrop-blur-md px-5 py-3 md:px-6 md:py-4 transition-all duration-500 hover:bg-gold hover:border-gold shadow-2xl"
        >
          {/* Custom Pristine Monochromatic WhatsApp Icon */}
          <svg 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-4 h-4 md:w-5 md:h-5 text-gold/90 group-hover:text-deep-ink transition-colors duration-500 flex-shrink-0"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.885-.653-1.482-1.46-1.656-1.757-.173-.298-.018-.459.13-.607.134-.134.298-.348.446-.521.15-.174.2-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.015c-.198 0-.52.074-.792.347-.272.271-1.04 1.016-1.04 2.474 0 1.458 1.065 2.868 1.213 3.066.149.198 2.093 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
          </svg>
          <span className="text-[10px] md:text-xs text-gold/90 uppercase tracking-[0.2em] font-sans group-hover:text-deep-ink transition-colors duration-500 -mb-px">
            Inquire
          </span>
        </a>
      </Magnetic>
    </motion.div>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import CurtainReveal from "@/components/ui/CurtainReveal";

interface CollectionTileProps {
  href: string;
  title: string;
  image: string;
  index: number;
}

export default function CollectionTile({
  href,
  title,
  image,
  index,
}: CollectionTileProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
    >
      <Link href={href} className="group block relative overflow-hidden cursor-pointer">
        {/* Image wrapped in Curtain Reveal */}
        <motion.div
          className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <CurtainReveal>
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Gradient overlay inside curtain */}
            <div className="absolute inset-0 bg-gradient-to-t from-deep-ink/80 via-deep-ink/20 to-transparent" />
          </CurtainReveal>
        </motion.div>

        {/* Label */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <span className="text-eyebrow text-gold/80 mb-2 block">
            {title}
          </span>
          <div className="flex items-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
            <span className="text-sm text-cream/70">Explore</span>
            <span className="text-gold">→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

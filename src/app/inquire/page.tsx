import type { Metadata } from "next";
import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import CurtainReveal from "@/components/ui/CurtainReveal";
import NoiseOverlay from "@/components/ui/NoiseOverlay";
import InquiryForm from "@/components/ui/InquiryForm";
import Magnetic from "@/components/ui/Magnetic";

export const metadata: Metadata = {
  title: "Inquire",
  description:
    "Tell us about your project. Casa Bliss responds within the business day. Premium furniture sourcing from China, tailored to your vision.",
};

export default function InquirePage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-deep-ink">
      {/* Left Hemisphere: Visual Anchor */}
      <div className="relative w-full md:w-[45%] h-[55vh] md:h-screen sticky top-0 overflow-hidden shrink-0">
        <CurtainReveal>
          <Image
            src="/images/about/about-sourcing.jpg"
            alt="Casa Bliss Sourcing Atelier"
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-[2500ms] ease-luxury"
          />
          <NoiseOverlay />
          {/* Mobile: gradient up from bottom. Desktop: gradient right-to-left into form panel */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-deep-ink/90 via-deep-ink/30 to-transparent" />
        </CurtainReveal>

        {/* Typographic overlay — pinned to bottom-left */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-14 z-20 pointer-events-none">
          <SectionReveal delay={0.3}>
            <p className="text-eyebrow text-gold/70 mb-5 tracking-[0.2em]">The Gateway</p>
            <h1 className="text-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-off-white leading-[1.05] max-w-xs md:max-w-sm">
              Initiate<br />your vision.
            </h1>
          </SectionReveal>
        </div>

        {/* Subtle vertical left-edge rule */}
        <div className="hidden md:block absolute right-0 top-[15%] bottom-[15%] w-px bg-gradient-to-b from-transparent via-raised/40 to-transparent z-30" />
      </div>

      {/* Right Hemisphere: Form Terminal */}
      <div className="w-full md:flex-1 min-h-screen flex flex-col px-6 py-16 md:px-12 lg:px-16 xl:px-20 md:py-0 bg-deep-ink relative z-10 overflow-y-auto">
        <div className="w-full max-w-2xl mx-auto flex flex-col justify-center min-h-screen md:py-24">

          {/* Form intro */}
          <SectionReveal delay={0.2}>
            <p className="text-cream/40 text-sm md:text-base leading-relaxed max-w-lg mb-14 md:mb-20 tracking-wide">
              This isn&apos;t a contact form. It&apos;s the beginning of a sourcing conversation — share what you&apos;re building, and we&apos;ll respond with a curated direction.
            </p>
          </SectionReveal>

          {/* Form */}
          <InquiryForm />

          {/* Contact Footer — editorial strip */}
          <div className="mt-16 md:mt-20">
            <div className="flex items-center gap-5 mb-8">
              <div className="w-8 h-px bg-gold/30" />
              <p className="text-eyebrow text-gold/30 tracking-[0.2em]">Or reach us directly</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 pl-[52px]">
              <div>
                <p className="text-cream/25 text-xs uppercase tracking-widest font-sans mb-2">WhatsApp</p>
                <Magnetic strength={5}>
                  <a
                    href="https://wa.me/917386680089?text=Hello%2C%20I%27d%20like%20to%20know%20more%20about%20Casa%20Bliss."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gold-link text-cream/60 text-sm tracking-widest uppercase hover:text-off-white transition-colors duration-300"
                  >
                    Send a message
                  </a>
                </Magnetic>
              </div>

              <div>
                <p className="text-cream/25 text-xs uppercase tracking-widest font-sans mb-2">Email</p>
                <Magnetic strength={5}>
                  <a
                    href="mailto:hello@casabliss.in"
                    className="gold-link text-cream/60 text-sm tracking-widest uppercase hover:text-off-white transition-colors duration-300"
                  >
                    hello@casabliss.in
                  </a>
                </Magnetic>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

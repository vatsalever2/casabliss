import type { Metadata } from "next";
import SectionReveal from "@/components/ui/SectionReveal";
import InquiryForm from "@/components/ui/InquiryForm";
import Magnetic from "@/components/ui/Magnetic";

export const metadata: Metadata = {
  title: "Inquire",
  description:
    "Tell us about your project. Casa Bliss responds within the business day. Premium furniture sourcing from China, tailored to your vision.",
};

export default function InquirePage() {
  return (
    <div className="pt-32 md:pt-40 pb-20 md:pb-32 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Left — Copy */}
          <SectionReveal delay={0}>
            <div className="space-y-8">
              <div>
                <p className="text-eyebrow text-gold/60 mb-4">Inquire</p>
                <h1 className="text-display text-3xl md:text-4xl lg:text-5xl text-off-white leading-tight">
                  Tell us about your project.
                </h1>
              </div>

              <div className="w-16 h-px bg-gold/30" />

              <p className="text-cream/50 text-base leading-relaxed max-w-md">
                This isn&apos;t a contact form. It&apos;s the beginning of a sourcing
                conversation. Share what you&apos;re looking for, and we&apos;ll
                respond with a curated direction — within the business day.
              </p>

              <div className="pt-8 space-y-6">
                <div>
                  <p className="text-sm text-cream/30 mb-1">Prefer to talk?</p>
                  <Magnetic strength={8}>
                    <a
                      href="https://wa.me/919999999999?text=Hello%2C%20I%27d%20like%20to%20know%20more%20about%20Casa%20Bliss."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gold-link text-base text-off-white"
                    >
                      WhatsApp us directly →
                    </a>
                  </Magnetic>
                </div>

                <div>
                  <p className="text-sm text-cream/30 mb-1">Or email</p>
                  <Magnetic strength={8}>
                    <a
                      href="mailto:hello@casabliss.in"
                      className="gold-link text-base text-off-white"
                    >
                      hello@casabliss.in
                    </a>
                  </Magnetic>
                </div>
              </div>

              <div className="pt-8">
                <p className="text-xs text-cream/20">
                  We respond within the business day. Your information is never shared.
                </p>
              </div>
            </div>
          </SectionReveal>

          {/* Right — Form */}
          <SectionReveal delay={1}>
            <InquiryForm />
          </SectionReveal>
        </div>
      </div>
    </div>
  );
}

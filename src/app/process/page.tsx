import type { Metadata } from "next";
import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";
import Magnetic from "@/components/ui/Magnetic";

export const metadata: Metadata = {
  title: "Process",
  description:
    "From inquiry to delivery — understand how Casa Bliss sources, curates, and delivers premium furniture from China to your home or project.",
};

const steps = [
  {
    number: "01",
    title: "Inquiry",
    description:
      "You tell us about your project — the space, the style, the timeline. This isn't a form submission. It's the beginning of a conversation. We listen before we recommend.",
    detail:
      "Response within the business day. We ask the right questions so we can source the right pieces.",
  },
  {
    number: "02",
    title: "Curation",
    description:
      "Based on your brief, we curate a selection from our factory network. You receive product sheets, material samples, and detailed specifications — not a generic catalog link.",
    detail:
      "Typical curation time: 5–10 working days depending on scope and customisation requirements.",
  },
  {
    number: "03",
    title: "Sampling",
    description:
      "For large orders or custom pieces, we arrange physical samples. You see and feel the materials before committing. Production begins only after your approval.",
    detail:
      "Sample turnaround: 2–4 weeks. Quality inspection at factory before shipping to you.",
  },
  {
    number: "04",
    title: "Delivery",
    description:
      "We handle export documentation, international shipping, customs clearance, and last-mile delivery. Your furniture arrives inspected, insured, and ready to place.",
    detail:
      "Full-container shipments: 30–45 days. LCL shipments: 45–60 days. Domestic delivery coordinated with your schedule.",
  },
];

const expectations = [
  {
    title: "Quality Inspection",
    text: "Every order is inspected at the factory before packing. We photograph each piece and share a pre-shipment report.",
  },
  {
    title: "Import Handling",
    text: "Customs documentation, duty calculations, and port clearance — all handled by our logistics partners. You don't touch paperwork.",
  },
  {
    title: "Transparent Timelines",
    text: "You'll receive a production timeline at the time of order confirmation. Updates at each milestone — production, packing, shipping, arrival.",
  },
  {
    title: "After-Delivery Support",
    text: "If anything arrives damaged or not to specification, we resolve it. Our relationship with our factories means warranty isn't a negotiation.",
  },
];

export default function ProcessPage() {
  return (
    <div className="pt-32 md:pt-40 pb-20 md:pb-32 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <SectionReveal>
          <div className="text-center mb-24 md:mb-32">
            <p className="text-eyebrow text-gold/60 mb-4">How It Works</p>
            <h1 className="text-display text-4xl md:text-5xl lg:text-6xl text-off-white mb-6">
              The Sourcing Journey
            </h1>
            <p className="text-lg text-cream/50 max-w-lg mx-auto">
              Four steps from your brief to your space. No hidden stages, no surprises.
            </p>
          </div>
        </SectionReveal>

        {/* 4-Step Flow */}
        <div className="space-y-20 md:space-y-28 mb-24 md:mb-40">
          {steps.map((step, index) => (
            <SectionReveal key={step.number} delay={0}>
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-16 items-start`}
              >
                {/* Number */}
                <div className="md:w-1/4 flex-shrink-0">
                  <span className="text-display text-6xl md:text-7xl text-raised/60">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="md:w-3/4 space-y-4 pt-4">
                  <h2 className="text-heading text-2xl md:text-3xl text-off-white">
                    {step.title}
                  </h2>
                  <p className="text-cream/60 text-base leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                  <p className="text-sm text-cream/30 leading-relaxed pt-2">
                    {step.detail}
                  </p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* What You Can Expect */}
        <section>
          <SectionReveal>
            <div className="text-center mb-16">
              <div className="w-12 h-px bg-gold/30 mx-auto mb-8" />
              <h2 className="text-heading text-2xl md:text-3xl text-off-white">
                What you can expect
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {expectations.map((item, index) => (
              <SectionReveal key={item.title} delay={index * 0.5}>
                <div className="space-y-3">
                  <h3 className="text-heading text-lg text-off-white">
                    {item.title}
                  </h3>
                  <p className="text-cream/50 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </section>

        {/* Soft CTA */}
        <SectionReveal>
          <div className="text-center mt-24 md:mt-32">
            <div className="w-12 h-px bg-gold/30 mx-auto mb-10" />
            <p className="text-heading text-2xl md:text-3xl text-off-white mb-8">
              Ready to begin?
            </p>
            <Magnetic strength={10}>
              <Link
                href="/inquire"
                className="gold-link text-lg text-off-white"
              >
                Tell us about your project →
              </Link>
            </Magnetic>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectTypes = ["Residential", "Commercial", "Hospitality"];
const locations = ["India", "Australia", "Other"];

const budgetOptions: Record<string, string[]> = {
  India: ["₹5L – ₹15L", "₹15L – ₹50L", "₹50L – ₹1Cr", "₹1Cr+"],
  Australia: ["AUD 10K – 50K", "AUD 50K – 200K", "AUD 200K – 500K", "AUD 500K+"],
  Other: ["USD 10K – 50K", "USD 50K – 200K", "USD 200K – 500K", "USD 500K+"],
};

const fieldVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.75,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
};

const errorVariants = {
  hidden: { opacity: 0, y: -6, height: 0 },
  visible: { opacity: 1, y: 0, height: "auto", transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
  exit: { opacity: 0, y: -4, height: 0, transition: { duration: 0.2 } },
};

function FieldLabel({ index, label, hasError }: { index: string; label: string; hasError?: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className={`font-serif text-xs tracking-widest transition-colors duration-500 ${hasError ? "text-red-400/60" : "text-gold/40"}`}>
        {index}
      </span>
      <span className={`text-eyebrow text-xs tracking-[0.18em] transition-colors duration-500 ${hasError ? "text-red-400/70" : "text-cream/30"}`}>
        {label}
      </span>
    </div>
  );
}

function CustomSelect({
  value,
  options,
  placeholder,
  isOpen,
  onToggle,
  onSelect,
  disabled = false,
  hasError = false,
}: {
  value: string;
  options: string[];
  placeholder: string;
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (val: string) => void;
  disabled?: boolean;
  hasError?: boolean;
}) {
  return (
    <div className="relative w-full">
      <div
        className={`w-full flex items-center justify-between cursor-pointer select-none ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
        onClick={() => !disabled && onToggle()}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            !disabled && onToggle();
          }
        }}
      >
        <span
          className={`text-2xl md:text-3xl lg:text-4xl font-serif tracking-tight transition-colors duration-500 ${
            value ? "text-off-white" : hasError ? "text-red-400/40" : "text-raised/30"
          }`}
        >
          {value || placeholder}
        </span>
        <div
          className={`transition-transform duration-500 shrink-0 ml-4 ${isOpen ? "-rotate-180" : ""} ${
            hasError && !value ? "text-red-400/60" : "text-gold/40"
          }`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && !disabled && (
          <motion.div
            initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 8, filter: "blur(4px)" }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute z-50 left-0 top-full mt-3 w-full bg-surface border border-raised/60 shadow-[0_24px_64px_rgba(0,0,0,0.6)]"
            role="listbox"
          >
            <div className="flex flex-col py-2">
              {options.map((opt) => (
                <div
                  key={opt}
                  role="option"
                  aria-selected={value === opt}
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelect(opt);
                  }}
                  className={`px-6 py-4 text-base font-sans tracking-wide transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    value === opt
                      ? "text-gold bg-raised/30"
                      : "text-cream/50 hover:text-off-white hover:bg-raised/20"
                  }`}
                >
                  <span>{opt}</span>
                  <AnimatePresence>
                    {value === opt && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-1.5 h-1.5 rounded-full bg-gold shrink-0"
                      />
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    projectType: "",
    location: "",
    budget: "",
    message: "",
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const errors = {
    name: !formData.name.trim() ? "Please enter your name." : "",
    projectType: !formData.projectType ? "Select a project type." : "",
    location: !formData.location ? "Select a location." : "",
    budget: !formData.budget ? "Select a budget range." : "",
  };

  const hasErrors = Object.values(errors).some((e) => e);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, projectType: true, location: true, budget: true });
    if (hasErrors) return;

    const recipient = "hello@casabliss.in";
    const subject = encodeURIComponent(
      `New Sourcing Project Inquiry: ${formData.projectType} in ${formData.location}`
    );
    const bodyText = `
Name: ${formData.name}
Project Type: ${formData.projectType}
Location: ${formData.location}
Budget: ${formData.budget}

Project Details:
${formData.message || "—"}
    `.trim();

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
    setSubmitted(true);
  };

  const markTouched = (field: string) =>
    setTouched((prev) => ({ ...prev, [field]: true }));

  const handleLocationSelect = (loc: string) => {
    setFormData((prev) => ({ ...prev, location: loc, budget: "" }));
    markTouched("location");
    setOpenDropdown(null);
  };

  const toggleDropdown = (id: string) =>
    setOpenDropdown((prev) => (prev === id ? null : id));

  const fieldError = (field: string) =>
    touched[field] && errors[field as keyof typeof errors]
      ? errors[field as keyof typeof errors]
      : "";

  return (
    <div className="relative w-full">
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            ref={formRef}
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(12px)", scale: 0.98 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-8"
            noValidate
          >
            {/* 01 — Your Name */}
            <motion.div custom={0} variants={fieldVariants} initial="hidden" animate="visible">
              <FieldLabel index="01" label="Your Name" hasError={!!fieldError("name")} />
              <div
                className={`border-b pb-3 transition-colors duration-700 ${
                  fieldError("name")
                    ? "border-red-400/50"
                    : "border-raised focus-within:border-gold hover:border-raised/70"
                }`}
              >
                <input
                  type="text"
                  placeholder="e.g. Arjun Mehta"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  onFocus={() => setOpenDropdown(null)}
                  onBlur={() => markTouched("name")}
                  className="w-full bg-transparent border-0 text-2xl md:text-3xl lg:text-4xl text-off-white font-serif tracking-tight focus:outline-none placeholder:text-raised/30 transition-all"
                />
              </div>
              <AnimatePresence>
                {fieldError("name") && (
                  <motion.p variants={errorVariants} initial="hidden" animate="visible" exit="exit"
                    className="text-red-400/80 text-xs tracking-widest uppercase pt-2 font-sans">
                    {fieldError("name")}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            {/* 02 — Project Type */}
            <motion.div custom={1} variants={fieldVariants} initial="hidden" animate="visible">
              <FieldLabel index="02" label="Project Type" hasError={!!fieldError("projectType")} />
              <div
                className={`border-b pb-3 transition-colors duration-700 ${
                  fieldError("projectType")
                    ? "border-red-400/50"
                    : openDropdown === "projectType"
                    ? "border-gold"
                    : "border-raised hover:border-raised/70"
                }`}
              >
                <CustomSelect
                  value={formData.projectType}
                  options={projectTypes}
                  placeholder="Select one…"
                  isOpen={openDropdown === "projectType"}
                  onToggle={() => { toggleDropdown("projectType"); markTouched("projectType"); }}
                  onSelect={(val) => { setFormData((prev) => ({ ...prev, projectType: val })); markTouched("projectType"); setOpenDropdown(null); }}
                  hasError={!!fieldError("projectType")}
                />
              </div>
              <AnimatePresence>
                {fieldError("projectType") && (
                  <motion.p variants={errorVariants} initial="hidden" animate="visible" exit="exit"
                    className="text-red-400/80 text-xs tracking-widest uppercase pt-2 font-sans">
                    {fieldError("projectType")}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            {/* 03 — Location */}
            <motion.div custom={2} variants={fieldVariants} initial="hidden" animate="visible">
              <FieldLabel index="03" label="Location" hasError={!!fieldError("location")} />
              <div
                className={`border-b pb-3 transition-colors duration-700 ${
                  fieldError("location")
                    ? "border-red-400/50"
                    : openDropdown === "location"
                    ? "border-gold"
                    : "border-raised hover:border-raised/70"
                }`}
              >
                <CustomSelect
                  value={formData.location}
                  options={locations}
                  placeholder="Select one…"
                  isOpen={openDropdown === "location"}
                  onToggle={() => { toggleDropdown("location"); markTouched("location"); }}
                  onSelect={handleLocationSelect}
                  hasError={!!fieldError("location")}
                />
              </div>
              <AnimatePresence>
                {fieldError("location") && (
                  <motion.p variants={errorVariants} initial="hidden" animate="visible" exit="exit"
                    className="text-red-400/80 text-xs tracking-widest uppercase pt-2 font-sans">
                    {fieldError("location")}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            {/* 04 — Budget Range */}
            <motion.div
              custom={3}
              variants={fieldVariants}
              initial="hidden"
              animate="visible"
              className={`transition-opacity duration-700 ${!formData.location ? "opacity-35 pointer-events-none" : ""}`}
            >
              <FieldLabel
                index="04"
                label={formData.location ? "Budget Range" : "Budget Range — select location first"}
                hasError={!!fieldError("budget")}
              />
              <div
                className={`border-b pb-3 transition-colors duration-700 ${
                  fieldError("budget")
                    ? "border-red-400/50"
                    : openDropdown === "budget"
                    ? "border-gold"
                    : "border-raised hover:border-raised/70"
                }`}
              >
                <CustomSelect
                  value={formData.budget}
                  options={formData.location ? budgetOptions[formData.location] : []}
                  placeholder="Select one…"
                  isOpen={openDropdown === "budget"}
                  onToggle={() => { toggleDropdown("budget"); markTouched("budget"); }}
                  onSelect={(val) => { setFormData((prev) => ({ ...prev, budget: val })); markTouched("budget"); setOpenDropdown(null); }}
                  disabled={!formData.location}
                  hasError={!!fieldError("budget")}
                />
              </div>
              <AnimatePresence>
                {fieldError("budget") && formData.location && (
                  <motion.p variants={errorVariants} initial="hidden" animate="visible" exit="exit"
                    className="text-red-400/80 text-xs tracking-widest uppercase pt-2 font-sans">
                    {fieldError("budget")}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            {/* 05 — Project Brief */}
            <motion.div custom={4} variants={fieldVariants} initial="hidden" animate="visible">
              <FieldLabel index="05" label="Project Brief (optional)" />
              <div className="border-b border-raised focus-within:border-gold hover:border-raised/70 pb-3 transition-colors duration-700">
                <textarea
                  placeholder="Tell us what you're building, the space size, aesthetic references…"
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  onFocus={() => setOpenDropdown(null)}
                  className="w-full bg-transparent border-0 text-xl md:text-2xl text-off-white font-serif tracking-tight focus:outline-none resize-none h-28 md:h-32 placeholder:text-raised/30 mt-1"
                  rows={3}
                />
              </div>
            </motion.div>

            {/* Submit */}
            <motion.div
              custom={5}
              variants={fieldVariants}
              initial="hidden"
              animate="visible"
              className="pt-4 pb-10 flex items-center justify-between"
            >
              <p className="text-cream/20 text-xs tracking-widest uppercase font-sans">
                Response within the business day.
              </p>
              <motion.button
                type="submit"
                className="relative inline-flex items-center gap-3 text-sm text-gold tracking-widest uppercase font-medium group"
                whileHover="hover"
              >
                <span className="relative z-10 transition-colors duration-500 group-hover:text-off-white">
                  Initiate Request
                </span>
                <motion.span
                  className="block h-px bg-gold/40 absolute bottom-0 left-0"
                  initial={{ width: "100%" }}
                  variants={{ hover: { width: "0%" } }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                />
                <motion.span
                  variants={{ hover: { x: 6, color: "#F5F2EC" } }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.form>
        ) : (
          <motion.div
            key="confirmation"
            initial={{ opacity: 0, y: 32, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
            className="flex flex-col items-start justify-center py-24"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
              className="h-px bg-gold mb-14"
            />
            <h2 className="text-display text-5xl md:text-6xl lg:text-7xl text-off-white mb-8 leading-[1.05]">
              Your vision is<br />now in motion.
            </h2>
            <p className="text-gold/80 text-lg md:text-xl max-w-lg font-serif italic mb-14 leading-relaxed">
              We&apos;ll be in touch within the business day.
            </p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.9 }}
              className="h-px bg-gold"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectTypes = ["Residential", "Commercial", "Hospitality"];
const locations = ["India", "Australia", "Other"];

const budgetOptions: Record<string, string[]> = {
  India: ["₹5L – ₹15L", "₹15L – ₹50L", "₹50L – ₹1Cr", "₹1Cr+"],
  Australia: ["AUD 10K – 50K", "AUD 50K – 200K", "AUD 200K – 500K", "AUD 500K+"],
  Other: ["USD 10K – 50K", "USD 50K – 200K", "USD 200K – 500K", "USD 500K+"],
};

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [location, setLocation] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    projectType: "",
    location: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Without a backend database, the most secure architectural approach is to push the sanitized payload directly into the user's native mail client.
    const recipient = "hello@casabliss.in";
    const subject = encodeURIComponent(`New Sourcing Project Inquiry: ${formData.projectType || "General"} in ${formData.location || "Unspecified"}`);
    
    // Construct the body payload with strict whitespace and clear delineation
    const bodyText = `
Name: ${formData.name}
Project Type: ${formData.projectType}
Location: ${formData.location}
Budget: ${formData.budget}

Project Details:
${formData.message}
    `.trim();

    const body = encodeURIComponent(bodyText);
    
    // Safely execute native link navigation
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    
    // Provide visual confirmation in the UI
    setSubmitted(true);
  };

  const handleLocationChange = (value: string) => {
    setLocation(value);
    setFormData((prev) => ({ ...prev, location: value, budget: "" }));
  };

  return (
    <div className="relative min-h-[400px]">
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="space-y-10"
          >
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="YOUR NAME"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full bg-transparent border-0 border-b border-raised py-6 md:py-8 text-2xl md:text-4xl text-off-white font-serif uppercase tracking-widest focus:outline-none focus:border-gold transition-colors duration-500 placeholder:text-raised/50"
                required
              />
            </div>

            {/* Project Type */}
            <div>
              <select
                value={formData.projectType}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    projectType: e.target.value,
                  }))
                }
                className="w-full bg-transparent border-0 border-b border-raised py-6 md:py-8 text-2xl md:text-3xl text-off-white font-serif uppercase tracking-widest focus:outline-none focus:border-gold transition-colors duration-500 appearance-none cursor-pointer placeholder:text-raised/50"
                required
              >
                <option value="" disabled>
                  Project type
                </option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div>
              <select
                value={formData.location}
                onChange={(e) => handleLocationChange(e.target.value)}
                className="w-full bg-transparent border-0 border-b border-raised py-6 md:py-8 text-2xl md:text-3xl text-off-white font-serif uppercase tracking-widest focus:outline-none focus:border-gold transition-colors duration-500 appearance-none cursor-pointer placeholder:text-raised/50"
                required
              >
                <option value="" disabled>
                  Location
                </option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget — auto-switches based on location */}
            <div>
              <select
                value={formData.budget}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, budget: e.target.value }))
                }
                className="w-full bg-transparent border-0 border-b border-raised py-6 md:py-8 text-2xl md:text-3xl text-off-white font-serif uppercase tracking-widest focus:outline-none focus:border-gold transition-colors duration-500 appearance-none cursor-pointer placeholder:text-raised/50"
                required
                disabled={!location}
              >
                <option value="" disabled>
                  {location ? "Budget range" : "Select location first"}
                </option>
                {location &&
                  budgetOptions[location]?.map((budget) => (
                    <option key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <textarea
                placeholder="TELL US ABOUT YOUR PROJECT"
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
                className="w-full bg-transparent border-0 border-b border-raised py-6 md:py-8 text-xl md:text-2xl text-off-white font-serif uppercase tracking-widest focus:outline-none focus:border-gold transition-colors duration-500 resize-none h-40 placeholder:text-raised/50"
                rows={4}
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              className="gold-link text-base text-off-white pt-2"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              Send enquiry →
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            key="confirmation"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="w-12 h-px bg-gold mb-8" />
            <h2 className="text-display text-3xl md:text-4xl text-off-white mb-6">
              We&apos;ve received your enquiry.
            </h2>
            <p className="text-cream/60 text-lg max-w-md">
              Expect to hear from us within the business day.
            </p>
            <div className="w-12 h-px bg-gold mt-8" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

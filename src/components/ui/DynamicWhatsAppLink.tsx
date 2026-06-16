"use client";

import { useEffect, useState } from "react";
import Magnetic from "@/components/ui/Magnetic";

interface DynamicWhatsAppLinkProps {
  defaultMessage: string;
  className?: string;
  children: React.ReactNode;
  useMagnetic?: boolean;
}

export default function DynamicWhatsAppLink({ defaultMessage, className, children, useMagnetic = true }: DynamicWhatsAppLinkProps) {
  const [whatsappNumber, setWhatsappNumber] = useState("917386680089");

  useEffect(() => {
    fetch("https://get.geojs.io/v1/ip/country.json")
      .then((res) => res.json())
      .then((data) => {
        if (data.country === "AU") {
          setWhatsappNumber("61000000000"); // Replace with actual AU number
        }
      })
      .catch((err) => {
        console.error("Location detection failed", err);
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (timeZone && timeZone.startsWith("Australia/")) {
          setWhatsappNumber("61000000000"); // Replace with actual AU number
        }
      });
  }, []);

  const linkContent = (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );

  return useMagnetic ? <Magnetic strength={5}>{linkContent}</Magnetic> : linkContent;
}

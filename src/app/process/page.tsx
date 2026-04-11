import type { Metadata } from "next";
import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";
import Magnetic from "@/components/ui/Magnetic";

export const metadata: Metadata = {
  title: "Process",
  description:
    "From inquiry to delivery — understand how Casa Bliss sources, curates, and delivers premium furniture from China to your home or project.",
};
import ProcessShell from "./components/ProcessShell";

export default function ProcessPage() {
  return <ProcessShell />;
}

import type { Metadata } from "next";
import OriginFilm from "./components/OriginFilm";

export const metadata: Metadata = {
  title: "About",
  description:
    "Casa Bliss sources what most designers fly to find. Learn about our sourcing process, our values, and why interior architects across India and Australia trust us.",
};

export default function AboutPage() {
  return <OriginFilm />;
}

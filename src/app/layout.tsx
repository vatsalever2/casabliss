import type { Metadata } from "next";
import { cormorant, dmSans } from "@/lib/fonts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NoiseOverlay from "@/components/ui/NoiseOverlay";
import Preloader from "@/components/ui/Preloader";
import SmoothScrolling from "@/components/ui/SmoothScrolling";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://casabliss.in"),
  title: {
    default: "Casa Bliss — Luxury Furniture Sourced from China",
    template: "%s | Casa Bliss",
  },
  description:
    "Casa Bliss sources what most designers fly to find. Premium furniture, kitchen systems, faucets, and lighting — curated from China's finest factories, delivered to your vision.",
  keywords: [
    "luxury furniture",
    "China sourcing",
    "premium interiors",
    "kitchen systems",
    "designer faucets",
    "architectural lighting",
    "Casa Bliss",
  ],
  openGraph: {
    title: "Casa Bliss — Luxury Furniture Sourced from China",
    description:
      "Curated furniture, kitchens, faucets, and lighting from China's finest factories.",
    url: "https://casabliss.in",
    siteName: "Casa Bliss",
    images: [
      {
        url: "/images/hero-home.jpg",
        width: 1200,
        height: 630,
        alt: "Casa Bliss Luxury Interior",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Casa Bliss — Luxury Furniture Sourced from China",
    description:
      "Premium furniture, kitchen systems, faucets, and lighting — curated from China's finest factories.",
    images: ["/images/hero-home.jpg"],
  },
  icons: {
    icon: "/images/logo_black-bg.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="flex flex-col relative w-full overflow-x-hidden min-h-screen" suppressHydrationWarning>
        <SmoothScrolling>
          <Preloader />
          <NoiseOverlay />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}

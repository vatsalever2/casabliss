"use client";
import { useEffect, ReactNode } from "react";
import Lenis from "lenis";

export default function SmoothScrolling({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Luxury Easing Curve for heavy, butter-smooth scroll
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      wheelMultiplier: 1,
      touchMultiplier: 2,
      autoResize: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    
    // Force recalculate after heavy DOM mounts just in case
    setTimeout(() => lenis.resize(), 1000);
    setTimeout(() => lenis.resize(), 3000);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

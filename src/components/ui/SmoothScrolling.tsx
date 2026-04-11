"use client";
import { useEffect, ReactNode, useState } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

export default function SmoothScrolling({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);

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

    setTimeout(() => {
      setLenisInstance(lenis);
      (window as any).lenis = lenis;
    }, 0);

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

  // Reset scroll to top on route change
  useEffect(() => {
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenisInstance]);

  return <>{children}</>;
}

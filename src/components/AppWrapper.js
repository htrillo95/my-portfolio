// src/AppWrapper.js
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function AppWrapper({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    window.dispatchEvent(new Event("scroll"));

    requestAnimationFrame(raf);

    window.lenis = lenis; // expose for debugging (optional)

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}
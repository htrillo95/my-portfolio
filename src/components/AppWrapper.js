// src/AppWrapper.js
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function AppWrapper({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      smoothTouch: false,
      touchMultiplier: 1.5,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}
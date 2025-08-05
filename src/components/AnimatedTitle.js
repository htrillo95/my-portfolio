// src/components/AnimatedTitle.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Only register once
if (!gsap.plugins.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

const AnimatedTitle = ({ title, containerClass = "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-gray-900 drop-shadow-[0_5px_20px_rgba(0,0,0,0.25)]" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = containerRef.current.querySelectorAll(".animated-word");
      
      // Single animation for all words
      gsap.fromTo(
        words,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          duration: 0.8,
          stagger: 0.05,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`animated-title w-full text-center ${containerClass}`}
    >
      {title.split("<br />").map((line, i) => (
        <div
          key={i}
          className="animated-line mb-2 flex flex-wrap justify-center"
        >
          {line.split(" ").map((word, wi) => (
            <span
              key={wi}
              className="animated-word inline-block px-1"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle; 
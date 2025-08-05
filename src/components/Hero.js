// src/components/Hero.js
import React from "react";
import AnimatedTitle from "./AnimatedTitle";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-scroll";

const Hero = () => {
  useGSAP(() => {
    gsap.from(".hero-fade", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15,
      delay: 0.2,
    });
  }, []);

  return (
    <section className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white px-6 text-center">
      {/* Top label */}
      <p className="hero-fade uppercase tracking-widest text-sm text-white/80 mb-2">
        welcome
      </p>

      {/* Animated heading */}
      <AnimatedTitle
        title="Crafting <b>bold</b>, <b>interactive</b> web experiences"
        containerClass="text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-lg"
      />

      {/* Description */}
      <p className="hero-fade mt-6 max-w-xl text-white/90 text-base md:text-lg">
        I build clean, high performance interfaces with a touch of cinematic polish.
      </p>

      {/* CTA Button */}
      <div className="hero-fade mt-8">
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300"
        >
          View My Work
        </Link>
      </div>

      {/* Scroll Chevron */}
      <div className="hero-fade mt-10 text-white/70">
        <Link to="about" smooth={true} duration={500}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mx-auto animate-bounce cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
import React from "react";
import { Link } from "react-scroll"; // Smooth scrolling functionality
import { motion } from "framer-motion"; // Framer Motion for animations

function Hero() {
  return (
    <section className="h-screen bg-gradient-to-b from-navy to-black text-gray-100 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold tracking-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Hector
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I create clean, minimalist web experiences.
        </motion.p>

        {/* Animated Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link
            to="projects" // Smooth scroll to Projects section
            smooth={true}
            duration={500}
            className="mt-6 inline-block px-8 py-3 bg-gray-800 text-gray-100 font-bold rounded-lg shadow-lg hover:bg-gray-700 hover:scale-105 transition-transform"
          >
            View My Work
          </Link>
        </motion.div>

        {/* Chevron for Scroll Guidance */}
        <motion.div
          className="mt-8 text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
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
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
import React from "react";
import { Link } from "react-scroll"; // Keep react-scroll for smooth scrolling
import { motion } from "framer-motion"; // Import Framer Motion

function Hero() {
  return (
    <section className="h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center">
      <div className="text-center">
        {/* Animated Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold"
          initial={{ opacity: 0, y: -50 }} // Start hidden and move up
          animate={{ opacity: 1, y: 0 }} // Fade in and slide into place
          transition={{ duration: 1 }} // Animation duration
        >
          Hi, I'm Hector
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          className="mt-4 text-lg md:text-xl"
          initial={{ opacity: 0, y: 50 }} // Start hidden and move down
          animate={{ opacity: 1, y: 0 }} // Fade in and slide into place
          transition={{ duration: 1, delay: 0.5 }} // Slight delay for smoother appearance
        >
          I create modern, minimalist web experiences.
        </motion.p>

        {/* Animated Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} // Start smaller and hidden
          animate={{ opacity: 1, scale: 1 }} // Grow to normal size
          transition={{ duration: 1, delay: 1 }} // Delay for smooth sequence
        >
          <Link
            to="projects" // Link to the Projects section
            smooth={true}
            duration={500}
            className="mt-6 inline-block px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-lg hover:bg-blue-100 cursor-pointer"
          >
            View My Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
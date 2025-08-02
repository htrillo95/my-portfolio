import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-scroll";

// Variants for left column bullets
const listVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Dramatic left column entrance
const leftVariant = {
  hidden: {
    opacity: 0,
    rotateY: 45,
    scale: 0.85,
    y: 40,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// My Journey cards (deeper z-axis effect)
const journeyCardVariant = {
  hidden: (i) => ({
    opacity: 0,
    rotateY: -90,
    x: i % 2 === 0 ? -100 : 100,
    scale: 0.6,
    filter: "blur(8px)",
  }),
  show: (i) => ({
    opacity: 1,
    rotateY: 0,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      delay: 0.2 + i * 0.2,
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// In Progress card launch
const cardVariant = {
  hidden: (i) => {
    const directions = [
      { x: -200, y: 0, rotate: -20 },
      { x: 0, y: 200, rotate: 15 },
      { x: 200, y: 0, rotate: 25 },
    ];
    const dir = directions[i % directions.length];
    return {
      opacity: 0,
      x: dir.x,
      y: dir.y,
      rotate: dir.rotate,
      scale: 0.7,
      filter: "blur(4px)",
    };
  },
  show: (i) => ({
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      delay: 0.5 + i * 0.25,
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

function About() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const leftInView = useInView(leftRef, { once: true });
  const rightInView = useInView(rightRef, { once: true });

  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-black to-navy text-gray-300 px-8 py-16 flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 relative">
        {/* Left Column with 3D slide-in */}
        <motion.div
          ref={leftRef}
          variants={leftVariant}
          initial="hidden"
          animate={leftInView ? "show" : "hidden"}
          className="space-y-8 relative perspective-[1000px]"
        >
          <h2 className="text-4xl font-bold text-gray-100 mb-4 relative z-10">
            About Me
            <span className="absolute top-0 left-[-40px] w-[4px] h-full bg-indigo-500 rounded-md"></span>
          </h2>
          <p className="text-lg">
            I'm a web developer learning the ropes of building functional,
            user friendly apps. I focus on keeping my code clean and my designs
            simple. Right now, I’m sharpening my skills with React and Spring
            Boot as I explore full stack development.
          </p>

          <motion.ul
            className="list-none space-y-4"
            variants={listVariant}
            initial="hidden"
            animate={leftInView ? "show" : "hidden"}
          >
            {[
              "Writing clean, accessible code",
              "Keeping the user experience front and center",
              "Taking inspiration from creativity and innovation",
            ].map((text, i) => (
              <motion.li
                key={i}
                className="flex items-center"
                variants={itemVariant}
              >
                <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full flex-shrink-0 mr-3"></div>
                <span>{text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right Column with cinematic cards */}
        <motion.div
          ref={rightRef}
          initial="hidden"
          animate={rightInView ? "show" : "hidden"}
          className="space-y-8 relative"
        >
          <div className="relative perspective-[1200px]">
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">
              My Journey
            </h3>
            <div className="space-y-4">
              {[
                "2023-2024: Finished a bootcamp focused on full stack web development.",
                "2024-2025: Diving deeper into React and backend development.",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={journeyCardVariant}
                  initial="hidden"
                  animate={rightInView ? "show" : "hidden"}
                  className="bg-gray-800 rounded-lg border border-indigo-500 p-4"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative perspective-[1200px]">
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">
              In Progress
            </h3>
            <div className="space-y-4">
              {[
                "Learning Python for automation and backend scripting.",
                "Exploring machine learning and AI concepts to understand their potential applications in development.",
                "Experimenting with advanced front end features like animations and micro interactions to enhance user experience.",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariant}
                  initial="hidden"
                  animate={rightInView ? "show" : "hidden"}
                  className="bg-gray-800 rounded-lg border border-indigo-500 p-4"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="absolute inset-y-0 left-1/2 w-[1px] bg-gray-600 hidden md:block"></div>
      </div>
    </section>
  );
}

export default About;
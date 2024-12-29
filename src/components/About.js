import React from "react";
import { Link } from "react-scroll";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-black to-navy text-gray-300 px-8 py-16 flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 relative">
        {/* Left Column */}
        <div className="space-y-8 relative">
          <h2 className="text-4xl font-bold text-gray-100 mb-4 relative z-10">
            About Me
            <span className="absolute top-0 left-[-40px] w-[4px] h-full bg-indigo-500 rounded-md"></span>
          </h2>
          <p className="text-lg">
            I’m a web developer learning the ropes of building functional,
            user-friendly apps. I focus on keeping my code clean and my designs
            simple. Right now, I’m sharpening my skills with React and Spring
            Boot as I explore full-stack development.
          </p>
          <ul className="list-none space-y-4">
            <li className="flex items-center">
              <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full flex-shrink-0 mr-3"></div>
              <span>Writing clean, accessible code</span>
            </li>
            <li className="flex items-center">
              <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full flex-shrink-0 mr-3"></div>
              <span>Keeping the user experience front and center</span>
            </li>
            <li className="flex items-center">
              <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full flex-shrink-0 mr-3"></div>
              <span>Taking inspiration from creativity and innovation</span>
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="space-y-8 relative">
          <div className="relative pl-6 border-l-2 border-indigo-500">
            <h3 className="text-2xl font-semibold text-gray-100 mb-2">
              My Journey
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full flex-shrink-0"></div>
                <span>
                  <strong>2023-2024:</strong> Finished a bootcamp focused on
                  full-stack web development.
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full flex-shrink-0"></div>
                <span>
                  <strong>2024-2025:</strong> Building on what I’ve learned by
                  diving deeper into React and backend development.
                </span>
              </div>
            </div>
          </div>

          <div className="relative pl-6 border-l-2 border-indigo-500">
            <h3 className="text-2xl font-semibold text-gray-100 mb-2">
              In Progress
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full flex-shrink-0"></div>
                <span>
                  Learning Python for automation and backend scripting.
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full flex-shrink-0"></div>
                <span>
                  Exploring machine learning and AI concepts to understand their
                  potential applications in development.
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full flex-shrink-0"></div>
                <span>
                  Experimenting with advanced front-end features like animations
                  and micro-interactions to enhance user experience.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="absolute inset-y-0 left-1/2 w-[1px] bg-gray-600 hidden md:block"></div>
      </div>

      {/* Chevron Button */}
      <div className="mt-8 text-gray-400">
        <Link to="projects" smooth={true} duration={500}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 mx-auto animate-bounce cursor-pointer"
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
}

export default About;
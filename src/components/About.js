import React from "react";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-black to-navy text-gray-300 flex flex-col md:flex-row items-center justify-center px-8 py-16"
    >
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <div className="relative">
          <img
            src="https://via.placeholder.com/300" // Replace with your image
            alt="Your Profile"
            className="rounded-full shadow-lg w-60 h-60 border-4 border-gray-700"
          />
        </div>
      </div>
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl font-bold text-gray-100 mb-4">About Me</h2>
        <p className="text-lg mb-4">
          Aspiring web dev creating clean, user-friendly apps
          that make an impact. Learning full-stack development with
  tools like React and Spring Boot.
        </p>
        <p className="text-lg">
          Outside of coding, I enjoy running to stay active and thrifting for
          unique finds that inspire creativity. I believe small details can
          make a big impact—whether in code or design.
        </p>
      </div>
    </section>
  );
}

export default About;
import React from "react";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-white text-gray-800 flex flex-col md:flex-row items-center justify-center px-8 py-16"
    >
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src="https://via.placeholder.com/300" // Replace with your image
          alt="Your Profile"
          className="rounded-full shadow-lg w-60 h-60"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-600 mb-4">
          I'm Hector, an aspiring web dev creating clean, user-friendly apps that make an impact. I'm currently developing my skills in full-stack development with tools like React and Spring Boot.
        </p>
        <p className="text-lg text-gray-600">
          Outside of coding, I enjoy running to stay active and thrifting for unique finds that inspire creativity. I believe small details can make a big impact—whether in code or design.
        </p>
      </div>
    </section>
  );
}

export default About;
import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-navy text-gray-100 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Let’s Connect</h2>
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://github.com/htrillo95"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-gray-100 rounded-lg hover:bg-gray-700 transition-transform"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/hector-trillo-887718264/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-gray-100 rounded-lg hover:bg-gray-700 transition-transform"
          >
            LinkedIn
          </a>
          <a
            href="mailto:htrillo95@gmail.com"
            className="px-4 py-2 bg-blue-600 text-gray-100 rounded-lg hover:bg-blue-500 transition-transform"
          >
            Email Me
          </a>
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-gray-800 text-gray-100 rounded-full p-3 hover:bg-gray-700 hover:scale-110 transition-transform"
        >
          ↑ Back to Top
        </button>
        <p className="text-gray-400 text-sm mt-6">
          © {new Date().getFullYear()} Hector Trillo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
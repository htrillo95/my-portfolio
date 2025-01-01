import React, { useState } from "react";

function ConnectSidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`fixed top-0 right-0 h-full bg-gray-800 text-gray-100 shadow-md z-50 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300`}
    >
      {/* Toggle Button */}
      <button
        className="absolute top-4 left-[-40px] bg-indigo-500 text-gray-100 p-2 rounded-l-md hover:bg-indigo-400 transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? ">" : "<"}
      </button>

      {/* Sidebar Content */}
      <div className="p-6 space-y-6">
        <h2 className="text-2xl font-bold">Let’s Connect</h2>
        <div className="space-y-4">
          <a
            href="https://github.com/htrillo95"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 bg-gray-700 text-gray-100 rounded-lg hover:bg-gray-600 transition-transform"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/hector-trillo-887718264/"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 bg-gray-700 text-gray-100 rounded-lg hover:bg-gray-600 transition-transform"
          >
            LinkedIn
          </a>
          <a
            href="mailto:htrillo95@gmail.com"
            className="block px-4 py-2 bg-blue-600 text-gray-100 rounded-lg hover:bg-blue-500 transition-transform"
          >
            Email Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default ConnectSidebar;
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronLeft, FaChevronRight } from "react-icons/fa";

function ConnectSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white text-gray-800 shadow-lg z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 hidden md:block border-l border-blue-200`}
      >
        {/* Toggle Button */}
        <button
          className={`absolute top-1/2 -left-8 transform -translate-y-1/2 bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-blue-600 transition-all duration-300`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Sidebar"
        >
          {isOpen ? <FaChevronRight /> : <FaChevronLeft />}
        </button>

        {/* Sidebar Content */}
        <div className="p-4 space-y-6">
          <h2 className="text-lg font-bold text-center text-gray-900">Let's Connect</h2>
          <div className="space-y-4">
            {/* GitHub */}
            <div className="flex items-center space-x-2">
              <FaGithub className="text-2xl text-gray-700" />
              <a
                href="https://github.com/htrillo95"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue-600"
              >
                GitHub
              </a>
            </div>
            <div className="border-t border-blue-200"></div> {/* Divider */}
            {/* LinkedIn */}
            <div className="flex items-center space-x-2">
              <FaLinkedin className="text-2xl text-gray-700" />
              <a
                href="https://www.linkedin.com/in/hector-trillo-887718264/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue-600"
              >
                LinkedIn
              </a>
            </div>
            <div className="border-t border-blue-200"></div> {/* Divider */}
            {/* Email */}
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-2xl text-gray-700" />
              <a href="mailto:htrillo95@gmail.com" className="hover:underline hover:text-blue-600">
                Email Me
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-4 left-0 w-full text-center text-sm text-gray-500">
          Made by Hector
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="fixed bottom-0 w-full bg-white flex justify-evenly py-3 shadow-lg z-50 md:hidden border-t border-blue-200">
        <a
          href="https://github.com/htrillo95"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 text-2xl hover:text-blue-600"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/hector-trillo-887718264/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 text-2xl hover:text-blue-600"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:htrillo95@gmail.com"
          className="text-gray-700 text-2xl hover:text-blue-600"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>
    </>
  );
}

export default ConnectSidebar;
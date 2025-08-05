import React, { useEffect, useState, useCallback } from "react";
import "../styles/SideNav.css"; // Import the CSS file for styling

function SideNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [progress, setProgress] = useState(0);

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      const sections = document.querySelectorAll(".section");
      const scrollPos = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const offsetTop = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
          setActiveSection(section.id);
        }
      });

      const totalHeight = document.body.scrollHeight - window.innerHeight;
      setProgress((window.scrollY / totalHeight) * 100);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = useCallback((sectionId) => {
    const element = document.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="sideNav">
      <div className="verticalBar">
        <div
          className="progressIndicator"
          style={{ height: `${progress}%` }}
        />
      </div>
      <div className="navLinksContainer">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
          className={activeSection === "hero" ? "active" : ""}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
          className={activeSection === "about" ? "active" : ""}
        >
          About
        </a>
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("projects");
          }}
          className={activeSection === "projects" ? "active" : ""}
        >
          Projects
        </a>
      </div>
    </div>
  );
}

export default SideNav;
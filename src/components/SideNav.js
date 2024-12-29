import React, { useEffect, useState } from "react";
import "../styles/SideNav.css"; // Import the CSS file for styling

function SideNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
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
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sideNav">
      <div className="verticalBar">
        <div
          className="progressIndicator"
          style={{ height: `${progress}%` }}
        ></div>
      </div>
      <div className="navLinksContainer">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#hero").scrollIntoView({ behavior: "smooth" });
          }}
          className={activeSection === "hero" ? "active" : ""}
        >
          Hero
        </a>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
          }}
          className={activeSection === "about" ? "active" : ""}
        >
          About
        </a>
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
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
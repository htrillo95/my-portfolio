import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import CursorEffect from "./components/CursorEffect";
import SideNav from "./components/SideNav";

function App() {
  return (
    <div>
      <CursorEffect />
      <SideNav />
      <section id="hero" className="section">
        <Hero />
      </section>
      <section id="about" className="section">
        <About />
      </section>
      <section id="projects" className="section">
        <Projects />
      </section>
      <Footer />
    </div>
  );
}

export default App;
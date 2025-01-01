import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import CursorEffect from "./components/CursorEffect";
import SideNav from "./components/SideNav";
import ConnectSidebar from "./components/ConnectSidebar";

function App() {
  return (
    <div>
      <CursorEffect />
      <SideNav />
      <ConnectSidebar />
      <section id="hero" className="section">
        <Hero />
      </section>
      <section id="about" className="section">
        <About />
      </section>
      <section id="projects" className="section">
        <Projects />
      </section>
    </div>
  );
}

export default App;
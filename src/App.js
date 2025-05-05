import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import CaseStudy from "./components/CaseStudy";
import CursorEffect from "./components/CursorEffect";
import SideNav from "./components/SideNav";
import ConnectSidebar from "./components/ConnectSidebar";
import ScrollToTop from "./components/ScrollToTop";

function AppContent() {
  const location = useLocation();
  const isCaseStudy = location.pathname === "/case-study";

  return (
    <div>
      <ScrollToTop /> 
      <CursorEffect />
      {!isCaseStudy && <SideNav />}
      {!isCaseStudy && <ConnectSidebar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="hero" className="section">
                <Hero />
              </section>
              <section id="about" className="section">
                <About />
              </section>
              <section id="projects" className="section">
                <Projects />
              </section>
            </>
          }
        />
        <Route path="/case-study" element={<CaseStudy />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
import React from "react";
import { motion } from "framer-motion";
import javaIcon from "../assets/icons/icons8-java-logo-480.png";
import jsIcon from "../assets/icons/icons8-javascript-480.png";
import reactIcon from "../assets/icons/icons8-react-480.png";
import mysqlIcon from "../assets/icons/icons8-mysql-logo-480.png";
import springIcon from "../assets/icons/icons8-spring-boot-480.png";
import { Link } from "react-router-dom";

function Projects() {
  const skills = [
    { name: "Java", icon: javaIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "React", icon: reactIcon },
    { name: "MySQL", icon: mysqlIcon },
    { name: "Spring Boot", icon: springIcon },
  ];

  const projectList = [
    {
      title: "Courier Route Dashboard",
      description:
        "Prototype dashboard using simulated data to visualize workloads. Designed as a learning tool, not a production system",
      technologies: ["Python", "Pandas", "Streamlit", "PyDeck"],
      learnings:
        "Learned to work with geospatial ZIP data, simulate realistic logistics behavior, and build visual dashboards with filters and heatmaps.",
      liveLink: "/case-study",
      githubLink: "https://github.com/htrillo95/case-study",
    },
    {
      title: "RiverLock",
      description:
        "A password manager built to help users securely store and manage their passwords. Learned secure authentication, backend API integrations, and data encryption techniques.",
      technologies: ["React", "Spring Boot", "Postgres"],
      learnings:
        "Learned secure authentication, backend API integrations, and data encryption techniques.",
      liveLink: "https://riverlock.vercel.app/",
      githubLink: "https://github.com/htrillo95/password-manager-frontend",
    },
    {
      title: "Walmart Sales Dashboard",
      description:
        "A data dashboard built with Python and Streamlit to explore weekly sales patterns, including the impact of holidays and fuel prices. Includes Tableau visualizations, downloadable files, and a scrollable Jupyter notebook.",
      technologies: ["Python", "Streamlit", "Tableau", "Jupyter"],
      learnings:
        "Improved data cleaning, dashboard layout, and correlation analysis. Learned to integrate notebooks, KPIs, and visuals in a shareable app.",
      liveLink: "https://walmartsalesdashboard-c7vh396nzdohei9rgxmjjb.streamlit.app/",
      githubLink: "https://github.com/htrillo95/walmart_sales_dashboard",
    },
    {
      title: "Zine Store",
      description:
        "A storefront for my small batch zine. Built with custom Stripe checkout, Resend emails, and admin tools.",
      technologies: ["Next.js", "Tailwind CSS", "Stripe", "Resend"],
      learnings:
        "Implemented real world e-commerce features: secure checkout, order confirmation emails, and mobile friendly layout. Improved full stack workflow with Vercel and webhooks.",
      liveLink: "https://www.onewayzine.com/",
      githubLink: "https://github.com/htrillo95/oneway-zine",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white text-gray-800"
    >
      <div className="flex-grow py-16 px-8">
        {/* Animated Heading */}
        <motion.h2
          className="text-4xl font-bold text-center text-gray-900 mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          My Work
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 border border-blue-100 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-lg text-gray-700 mb-4">{project.description}</p>
              <ul className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <li
                    key={idx}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-600 mt-2">
                <strong>Learnings:</strong> {project.learnings}
              </p>
              <div className="flex justify-between mt-4">
                <Link
                  to={project.liveLink}
                  className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
                >
                  Live Demo
                </Link>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <motion.h2
          className="text-4xl font-bold text-center text-gray-900 mt-16 mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img
                src={skill.icon}
                alt={`${skill.name} logo`}
                className="w-20 h-20 mb-2"
              />
              <span className="text-gray-700 text-sm font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const projectList = [
    {
      title: "PropertyPro",
      description:
        "A property management application for tenants and admins to manage leases and maintenance requests.",
      technologies: ["React", "Spring Boot", "MySQL"],
      liveLink: "#", // Replace with live demo URL
      githubLink: "#", // Replace with GitHub repo URL
    },
    {
      title: "Coders' Quiz",
      description:
        "An interactive quiz platform for coding enthusiasts to test their skills.",
      technologies: ["Java", "Spring Boot", "React"],
      liveLink: "#", // Replace with live demo URL
      githubLink: "#", // Replace with GitHub repo URL
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-t from-black to-navy py-16 px-8 text-gray-100"
    >
      <h2 className="text-4xl font-bold text-center text-gray-50 mb-8">
        My Projects
      </h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
      >
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            className="bg-navy rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3 className="text-2xl font-bold text-gray-50 mb-2">
              {project.title}
            </h3>
            <p className="text-lg text-gray-300 mb-4">
              {project.description}
            </p>
            <ul className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, idx) => (
                <li
                  key={idx}
                  className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <div className="flex justify-between">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline font-medium"
              >
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline font-medium"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
import React from "react";
import { motion } from "framer-motion"; // Framer Motion for animations
import javaIcon from "../assets/icons/icons8-java-logo-480.png";
import jsIcon from "../assets/icons/icons8-javascript-480.png";
import reactIcon from "../assets/icons/icons8-react-480.png";
import mysqlIcon from "../assets/icons/icons8-mysql-logo-480.png";
import springIcon from "../assets/icons/icons8-spring-boot-480.png";

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
      title: "Coders' Quiz",
      description:
        "An interactive quiz platform for coding enthusiasts to test their skills.",
      technologies: ["Java", "Spring Boot", "React"],
      learnings:
        "Strengthened API integrations and improved understanding of state management.",
      liveLink: "https://coders-quiz.vercel.app/", 
      githubLink: "https://github.com/htrillo95/RailwayHostingTest", 
    },
    {
      title: "RiverLock", 
      description:
        "A password manager built to help users securely store and manage their passwords.",
      technologies: ["React", "Spring Boot", "Postgres"],
      learnings:
        "Learned secure authentication, backend API integrations, and data encryption techniques.",
      liveLink: "https://riverlock.vercel.app/", 
      githubLink: "https://github.com/htrillo95/password-manager-frontend", 
    },
    
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col bg-gradient-to-b from-navy to-black text-gray-100"
    >
      {/* Main Content */}
      <div className="flex-grow py-16 px-8">
        {/* Animated Heading for Projects */}
        <motion.h2
          className="text-4xl font-bold text-center text-gray-100 mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          My Work
        </motion.h2>
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
              className="bg-gray-800 rounded-lg shadow-md p-6 hover:scale-105 hover:shadow-xl transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h3 className="text-2xl font-bold text-gray-100 mb-2">
                {project.title}
              </h3>
              <p className="text-lg text-gray-300 mb-4">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <li
                    key={idx}
                    className="bg-gray-700 text-gray-100 px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-400 mt-2">
                <strong>Learnings:</strong> {project.learnings}
              </p>
              <div className="flex justify-between mt-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Section */}
        <motion.h2
          className="text-4xl font-bold text-center text-gray-100 mt-16 mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.h2>
        <motion.div
          className="flex flex-wrap justify-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <img
                src={skill.icon}
                alt={`${skill.name} logo`}
                className="w-20 h-20 mb-2"
              />
              <span className="text-gray-300 text-sm">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
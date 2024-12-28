import React from "react";

function Projects() {
  const projectList = [
    {
      title: "PropertyPro",
      description: "A property management application for tenants and admins to manage leases and maintenance requests.",
      technologies: ["React", "Spring Boot", "MySQL"],
      liveLink: "#", // Replace with live demo URL
      githubLink: "#", // Replace with GitHub repo URL
    },
    {
      title: "Coders' Quiz",
      description: "An interactive quiz platform for coding enthusiasts to test their skills.",
      technologies: ["Java", "Spring Boot", "React"],
      liveLink: "#", // Replace with live demo URL
      githubLink: "#", // Replace with GitHub repo URL
    },
    // Add more projects as needed
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-100 py-16 px-8 text-gray-800"
    >
      <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <ul className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, idx) => (
                <li
                  key={idx}
                  className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm"
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
                className="text-blue-500 hover:underline"
              >
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
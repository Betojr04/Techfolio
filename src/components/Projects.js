import React from "react";
import { Link } from "react-router-dom";
import "../styles/Project.css";

export const Projects = () => {
  const projectData = [
    {
      title: "Barbas-Barbershop",
      description:
        "Barbas Barbershop Website: A modern, user-friendly website designed to enhance the web presence of a local barbershop. It features an online booking system through Booksy and a gallery of styles to attract and engage clients. The project showcases a blend of traditional barbering and contemporary web design to reach a broader audience and streamline client interactions.",
      link: "https://barbas-barbershop.com/",
      iframesrc: "https://barbas-barbershop.com/"
    }
  ];

  return (
    <section className="projects-section" id="projects">
      {projectData.map((project, index) => (
        <div className="project-card" key={index}>
          <div className="iframe-container">
            <iframe
              src={project.iframesrc}
              title={project.title}
              className="project-iframe"
            ></iframe>
          </div>
          <div className="project-info">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="live-link-btn"
            >
              View Project
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

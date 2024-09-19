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
    },
    {
      title: "TragosCrafted",
      description:
        "Website for local private bartending business. This website contains a modern design with a user-friendly interface. It features client expectations timeline, contact form, and a services section. The project showcases a blend of traditional bartending and contemporary web design to reach a broader audience and streamline client interactions.",
      link: "https://www.tragoscrafted.com/",
      iframesrc: "https://www.tragoscrafted.com/"
    },
    {
      title: "ScehdulingUI (In Progress)",
      description:
        "UI for scheduling service for businesses that require appointments. This project showcases a modern design with a user-friendly interface. It features a calendar, time slots, and a contact form. The project showcases a blend of traditional scheduling and contemporary web design to reach a broader audience and streamline client interactions.",
      link: "https://schedulingui.vercel.app/",
      iframesrc: "https://schedulingui.vercel.app/"
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

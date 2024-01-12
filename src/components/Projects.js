import React from "react";
import { Link } from "react-router-dom";
import "../styles/Project.css";

export const Projects = () => {
  const projectData = [
    {
      title: "Barber",
      description: "Website for barbers using React and EmailJS, ",
      link: "https://barber-lake-nine.vercel.app/",
      iframesrc: "https://barber-lake-nine.vercel.app/",
      image: "https://i.imgur.com/4K0VX6n.png",
    },
    {
      title: "Personal Trainer",
      description: "Website for personal trainers using ReactJS, and EmailJS.",
      link: "https://personal-training-web.vercel.app/",
      iframesrc: "https://personal-training-web.vercel.app/",
      image: "https://i.imgur.com/4K0VX6n.png",
    },
    {
      title: "FinanceBuddy",
      description:
        "Take control of your money with this Fulll-Stack AI-powered personal finance app. Connect your accounts with ease using Plaid API, and watch as our AI suggests smart places to put your money. It offers personalized financial habits, backed by data from your transactions, bills, and more. Our AI is your financial educator, simplifying complex concepts. Got questions? Ask away! Plus, enjoy modern financial reports and a dashboard for all your insights. Financial freedom starts here.",
      link: "https://github.com/Betojr04/FinanceBuddy",
      iframesrc: "https://github.com/Betojr04/FinanceBuddy",
      image: "https://i.imgur.com/4K0VX6n.png",
    },
    {
      title: "Nomad",
      description:
        "Developing a web-based platform for creating, managing, and sharing travel itineraries. Designing and implementing a RESTful API with Flask, integrating secure JWT authentication and SQLAlchemy for database management. Crafting a responsive front-end using React and Redux, offering features like itinerary planning, social sharing, and real-time updates.",
      link: "https://github.com/Betojr04/nomad",
      iframesrc: "https://github.com/Betojr04/nomad",
      image: "https://i.imgur.com/4K0VX6n.png",
    },
    {
      title: "Personal Finance Tracker",
      description:
        "Tracker for your personal finances, creat accounts, update balances, and view transaction. Generate reports on your spending habits, and view your net worth. Save your data between sessions and include authentication for security. Devling into this project to learn the ins and outs of Java before converting it into a full stack spingboot project",
      iframesrc: "https://github.com/Betojr04/personalFinanceTracker",
      image: "https://i.imgur.com/4K0VX6n.png",
    },
  ];
  return (
    <section className="projects-section" id="projects">
      {projectData.map((project, index) => (
        <div className="project-card" key={index}>
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
          />
          <iframe
            src={project.iframeSrc}
            className="project-iframe"
            title={project.title}
          ></iframe>
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

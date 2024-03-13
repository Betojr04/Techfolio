import React from "react";
import "../styles/About.css";
import photo from "../assets/photo.jpeg";

export const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-image">
        <img src={photo} alt="aboutMe" />
      </div>

      <div className="about-content">
        <h2>Spotlight</h2>
        <p>
          Hi, I'm Beto, a Software Engineer based in Phoenix. My technical
          toolkit includes Python, React, Node.js, and I'm diving into Java
          through a Spring Boot project.
          <br></br>
          <br></br>
          I'm adept at managing databases with MySQL and PostgreSQL, bringing a
          balance of analytical skills and creative energy to each project.
          <br></br>
          <br></br>
          Whether I'm developing freelance projects or collaborating within a
          team, I integrate my coding expertise with a dynamic personality to
          create impactful solutions and compelling user experiences.
        </p>
      </div>
    </section>
  );
};

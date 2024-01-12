import React from "react";
import "../styles/About.css";
import photo from "../assets/photo.jpeg";

export const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-image">
        <img src={photo} alt="About Image" />
      </div>

      <div className="about-content">
        <h2>Spotlight</h2>
        <p>
          Hi, I'm Beto, a Full Stack Developer based in Phoenix. My expertise
          lies in Python, React, Node.js, and I'm currently expanding into Java.
          <br></br>
          <br></br>I bring data to life with Pandas, Numpy, SciPy, and
          Matplotlib, and adeptly manage databases using MySQL and PostgreSQL.
          My approach blends technical skill with a passion for life, from
          soccer fields to tech forums.
          <br></br>
          <br></br>
          Whether crafting freelance projects or contributing to a team, I merge
          coding skills with my vibrant personality to deliver innovative
          solutions and engaging user experiences.
        </p>
      </div>
    </section>
  );
};

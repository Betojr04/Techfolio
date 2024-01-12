import React from "react";
import "../styles/Tech.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNodeJs,
  faPython,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

export const Tech = () => {
  return (
    <section class="tech-section" id="tech">
      <h2>My Tech Stack</h2>
      <div class="tech-icons">
        {/* HTML Icon */}
        <div class="tech-icon">
          <FontAwesomeIcon icon={faHtml5} />
          <p>HTML5</p>
        </div>
        {/* CSS Icon */}
        <div class="tech-icon">
          <FontAwesomeIcon icon={faCss3Alt} />
          <p>CSS3</p>
        </div>
        {/* Javascrip Icon */}
        <div class="tech-icon">
          <FontAwesomeIcon icon={faJsSquare} />
          <p>JavaScript</p>
        </div>
        {/* React Icon */}
        <div class="tech-icon">
          <FontAwesomeIcon icon={faReact} />
          <p>React</p>
        </div>
        {/* Node Icon */}
        <div class="tech-icon">
          <FontAwesomeIcon icon={faNodeJs} />
          <p>Node.js</p>
        </div>
        {/* Python Icon */}
        <div className="tech-icon">
          <FontAwesomeIcon icon={faPython} />
          <p>Python</p>
        </div>

        {/* SQL/PostgreSQL Icon */}
        <div className="tech-icon">
          <FontAwesomeIcon icon={faDatabase} />
          <p>SQL/PostgreSQL</p>
        </div>

        <div className="tech-icon">
          <FontAwesomeIcon icon={faJava} />
          <p>Java (In progress)</p>
        </div>
      </div>
    </section>
  );
};

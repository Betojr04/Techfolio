import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-about">
          <h3>About Beto</h3>
          <p>
            I'm a passionate Full-Stack developer.
          </p>
        </div>
        <div class="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div class="footer-social">
          <h3>Connect with Me</h3>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/albertovaltierrajr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="fa-icon" />
            </a>
            <a
              href="https://github.com/Betojr04"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="fa-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

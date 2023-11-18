import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faConnectdevelop } from "@fortawesome/free-brands-svg-icons";

export const Navbar = () => {
  return (
    <nav class="navbar">
      <div class="navbar-brand">
        <Link to="/">
          Beto <FontAwesomeIcon icon={faConnectdevelop} />
        </Link>
      </div>
      <ul class="navbar-nav">
        <li>
          <a href="#about">Spotlight</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

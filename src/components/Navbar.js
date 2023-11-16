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
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

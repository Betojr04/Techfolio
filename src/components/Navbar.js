import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <nav class="navbar">
      <div class="navbar-brand">
        <Link to="/">
          Beto <span class="icon">🌟</span>
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
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

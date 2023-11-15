import React from "react";
import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <nav class="navbar">
      <div class="navbar-brand">
        <a href="#home">
          Beto <span class="icon">🌟</span>
        </a>
      </div>
      <ul class="navbar-nav">
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#resume">Resume</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

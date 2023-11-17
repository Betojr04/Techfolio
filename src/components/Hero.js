import React from "react";
import { Link } from "react-router-dom";
import "../styles/Hero.css";

export const Hero = () => {
  return (
    <section class="hero-section">
      <div class="hero-content">
        <h1>Hello, I'm Beto</h1>
        <p>Web Developer | Designer | Tech Enthusiast</p>
        <a href="#projects">
          <button class="cta-button">View My Work</button>
        </a>
      </div>
    </section>
  );
};

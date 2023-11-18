import React from "react";
import "../styles/Home.css";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Tech } from "../components/Tech";

export const Home = () => {
  return (
    <main>
      <div className="parallax-section parallax-1">
        <Hero />
      </div>

      <div className="parallax-section parallax-3">
        <About />
      </div>

      <div className="parallax-section parallax-5">
        <Tech />
      </div>

      <div className="parallax-section parallax-2">
        <Projects />
      </div>

      <div className="parallax-section parallax-4">
        <Contact />
      </div>
    </main>
  );
};

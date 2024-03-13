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
      <div>
        <Hero />
      </div>

      <div>
        <About />
      </div>

      <div>
        <Tech />
      </div>

      <div>
        <Projects />
      </div>

      <div>
        <Contact />
      </div>
    </main>
  );
};

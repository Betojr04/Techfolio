import React from "react";
import "../styles/Home.css";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";

export const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

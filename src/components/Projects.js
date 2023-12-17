import React from "react";
import { Link } from "react-router-dom";
import "../styles/Project.css";

export const Projects = () => {
  return (
    <section class="projects-section" id="projects">
      {/* project 1  */}
      <div class="project-card">
        <iframe
          src="https://barber-lake-nine.vercel.app/"
          class="project-iframe"
        ></iframe>
        <div class="project-info">
          <h3>Barber</h3>
          <p>Website for a local new barber in the Gilbert area.</p>
          <a
            href="https://barber-lake-nine.vercel.app/"
            target="_blank"
            class="live-link-btn"
          >
            View Live
          </a>
        </div>
      </div>

      {/* project 2 */}
      <div class="project-card">
        <iframe
          src="https://personal-training-web.vercel.app/"
          class="project-iframe"
        ></iframe>
        <div class="project-info">
          <h3>Personal Trainer</h3>
          <p>Website for a new personal trainer in the Tempe area.</p>
          <a
            href="https://personal-training-web.vercel.app/"
            target="_blank"
            class="live-link-btn"
          >
            View Live
          </a>
        </div>
      </div>

      {/* project 2 */}
      <div class="project-card">
        <iframe
          src=""
          class="project-iframe"
        ></iframe>
        <div class="project-info">
          <h3>FinanceBuddy</h3>
          <p>Full-Stack Personal finance application powered with AI implementing Plaid API (currently in sandbox development)
            <br></br>
            <br></br>
            Tech Stack: React, Python-Flask, Plaid API, SQLITE(development), Postgresql(production)
          </p>
          <a
            href="https://github.com/Betojr04/FinanceBuddy"
            target="_blank"
            class="live-link-btn"
          >
            View Github Repo
          </a>
        </div>
      </div>

    </section>
  );
};

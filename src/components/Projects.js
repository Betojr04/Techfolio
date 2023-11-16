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

      {/* project 3 */}
      <div className="more-projects">
        <p>See more projects</p>
        <Link to="/projects">
          <button>More Projects</button>
        </Link>
      </div>
    </section>
  );
};

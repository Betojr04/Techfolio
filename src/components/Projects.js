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
          <p>Website for barbers using React and EmailJS, </p>
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
          <p>Website for personal trainers using ReactJS, and EmailJS.</p>
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
      <div class="project-card">
        <iframe src="" class="project-iframe"></iframe>
        <div class="project-info">
          <h3>FinanceBuddy</h3>
          <p>
            Take control of your money with this Fulll-Stack AI-powered personal
            finance app. Connect your accounts with ease using Plaid API, and
            watch as our AI suggests smart places to put your money. It offers
            personalized financial habits, backed by data from your
            transactions, bills, and more. Our AI is your financial educator,
            simplifying complex concepts. Got questions? Ask away! Plus, enjoy
            modern financial reports and a dashboard for all your insights.
            Financial freedom starts here.
            <br></br>
            <br></br>
            Tech Stack: React, Python-Flask, Plaid API, SQLITE(development),
            Postgresql(production)
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

      {/* project 3 */}
      <div class="project-card">
        <iframe src="" class="project-iframe"></iframe>
        <div class="project-info">
          <h3>Nomad</h3>
          <p>
            Developing a web-based platform for creating, managing, and sharing
            travel itineraries. Designing and implementing a RESTful API with
            Flask, integrating secure JWT authentication and SQLAlchemy for
            database management. Crafting a responsive front-end using React and
            Redux, offering features like itinerary planning, social sharing,
            and real-time updates.
            <br></br>
            <br></br>
            Tech Stack: React, Python-Flask, Plaid API, SQLITE(development),
            Postgresql(production), Docker, Google API, thrid party apis for
            trip planning, event exploration, flight information, car rentals,
            hotels etc.
          </p>
          <a
            href="https://github.com/Betojr04/nomad"
            target="_blank"
            class="live-link-btn"
          >
            View Github Repo
          </a>
        </div>

        {/* project 3 */}
        <div class="project-card">
          <iframe src="" class="project-iframe"></iframe>
          <div class="project-info">
            <h3>Personal Finance Tracker</h3>
            <p>
              Tracker for your personal finances, creat accounts, update
              balances, and view transaction. Generate reports on your spending
              habits, and view your net worth. Save your data between sessions
              and include authentication for security. Devling into this project
              to learn the ins and outs of Java before converting it into a full
              stack spingboot project
              <br></br>
              <br></br>
              Tech Stack: Java, GUI, SQLITE(development), and CSV files.
            </p>
            <a
              href="https://github.com/Betojr04/nomad"
              target="_blank"
              class="live-link-btn"
            >
              View Github Repo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

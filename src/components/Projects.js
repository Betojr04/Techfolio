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
        <iframe
          src=""
          class="project-iframe"
        ></iframe>
        <div class="project-info">
          <h3>FinanceBuddy</h3>
          <p>Take control of your money with this Fulll-Stack AI-powered personal finance app. Connect your accounts with ease using Plaid API, and watch as our AI suggests smart places to put your money. It offers personalized financial habits, backed by data from your transactions, bills, and more. Our AI is your financial educator, simplifying complex concepts. Got questions? Ask away! Plus, enjoy modern financial reports and a dashboard for all your insights. Financial freedom starts here.
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
      
      {/* project 4 */}
      <div class="project-card">
        <iframe
          src=""
          class="project-iframe"
        ></iframe>
        <div class="project-info">
          <h3>ScheduMaster</h3>
          <p>Simplify the shift bidding process for your employees by allowing them to bid on shifts based on seniority. This system provides each employee with a number of bid options equal to their seniority level. Once the bids are submitted, an algorithm calculates and ranks the bids according to seniority. At the bid deadline (e.g., 8 AM on a specified day), the tool automatically sends out email notifications to all users with the final bid results, ensuring a transparent and efficient scheduling process. Say goodbye to manual bidding and hello to a seamless, automated solution! 
            <br></br>
            <br></br>
            Tech Stack: React, Python-Flask, Plaid API, SQLITE(development), Postgresql(production), EmailJS
          </p>
          <a
            href="https://github.com/Betojr04/ScheduMaster"
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

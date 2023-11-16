import React from "react";
import "../styles/About.css";
import photo from "../assets/photo.jpeg";

export const About = () => {
  return (
    <section class="about-section" id="about">
      {/* this is the container for the about me text */}
      <div class="about-content">
        <h2>About Me</h2>
        <p>
          Hello there! My name is Beto and I like to code. I am a full stack
          developer and because I like to be the center of attention I put this
          huge image of me here.
          <br></br>
          <br></br>
          When im not busy being the center of attention, I like to create
          websites and web apps for my self, friends and businesses.
          <br></br>
          <br></br>And When I am not coding I love to play soccer, go to the
          gym, hike mountains, read, go for a run, travel, spend time with
          family/friends, and learn new things.
        </p>
      </div>

      {/* This is the image div */}
      <div class="about-image">
        <img src={photo} alt="About Image" />
      </div>
    </section>
  );
};

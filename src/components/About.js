import React from "react";
import "../styles/About.css";
import photo from "../assets/photo.jpeg";

export const About = () => {
  return (
    <section class="about-section" id="about">
      {/* this is the container for the about me text */}
      <div class="about-content">
        <h2>Spotlight</h2>

        <p>
          <strong>Hello!</strong> I'm Beto – a full-stack developer with a flair
          for coding and, admittedly, a slight penchant for being the center of
          attention (but only in the most charming way, of course).
          <br></br>
          <br></br>
          My journey in tech is a blend of passion, creativity, and a healthy
          dose of curiosity. Away from the digital canvas, you'll find me on the
          soccer field, exploring nature, or journeying to new destinations. I'm
          an avid reader, a family guy, and a friend's best resource for tech
          support (unofficially). I believe in living a full life, where work,
          play, and learning dance together in harmony.
          <br></br>
          <br></br>
          Professionally, I'm all about teamwork and innovation. I thrive in
          environments that challenge me and allow me to contribute
          meaningfully. Whether it's crafting personal projects, assisting
          friends, or elevating businesses, I bring a mix of enthusiasm,
          commitment, and technical prowess to the table.
        </p>
        {/* <p>
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
        </p> */}
      </div>

      {/* This is the image div */}
      <div class="about-image">
        <img src={photo} alt="About Image" />
      </div>
    </section>
  );
};

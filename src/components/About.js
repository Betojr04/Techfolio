import React from "react";
import "../styles/About.css";

export const About = () => {
  return (
    <section class="about-section" id="about">
      <div class="about-image">
        <img
          src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGV2ZWxvcGVyfGVufDB8MXwwfHx8MA%3D%3D"
          alt="About Image"
        />
      </div>
      <div class="about-content">
        <h2>About Me</h2>
        <p>
          Hi, I'm Beto. I specialize in modern web development technologies...
        </p>
      </div>
    </section>
  );
};

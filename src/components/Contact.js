import React from "react";
import "../styles/Contact.css";

export const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <input type="text" id="name" name="name" placeholder="Your Name" />
        <input type="email" id="email" name="email" placeholder="Your Email" />
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
        ></textarea>
        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </section>
  );
};

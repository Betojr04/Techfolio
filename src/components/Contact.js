import React from "react";
import "../styles/Contact.css";

export const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="form-container">
        <form className="contact-form">
          <input type="text" id="name" name="name" placeholder="Your Name" />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
          />
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
      <div className="visual-effect-container">
        <h1>Reach out and let's be friends!</h1>
      </div>
    </section>
  );
};

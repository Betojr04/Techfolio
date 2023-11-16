import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

export const Contact = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const form = useRef();

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!emailPattern.test(e.target.value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jw1pt6a",
        "template_fjipilz",
        form.current,
        "h7qtBGRh6qB0fQxjF"
      )
      .then((result) => {
        console.log(result);
        setSuccessMessageVisible(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  if (successMessageVisible) {
    return (
      <div className="overlay">
        <div className="success-card">
          <h2>Thank You!</h2>
          <p>Your message has been successfully submitted.</p>
          <button
            onClick={() => {
              setName("");
              setEmail("");
              setMessage("");
              setSuccessMessageVisible(false);
            }}
          >
            Submit Another Response
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="contact-section" id="contact">
      <div className="form-container">
        <form className="contact-form" ref={form} onSubmit={submitForm}>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
          />
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Your Email"
          />
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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

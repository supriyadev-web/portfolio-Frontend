// src/components/Contact.jsx

import React from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaMapMarkerAlt
} from "react-icons/fa";
import "./Contact.css"; // Assuming you have a CSS file for styling


const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-heading">
        <h2 className="section-heading">Contact Me</h2>
        <p>Feel free to reach out to me using the form below!</p>
      </div>


      <div className="contact-container">
        {/* Left: Contact Form */}
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="contact-form"
        >
          <input
            type="hidden"
            name="access_key"
            value="fd20787b-d529-437b-86f7-10260bb1f3e3"
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="form-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-input"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="form-input textarea"
            required
          ></textarea>
          <button type="submit" className="submit-btn">
            Send
          </button>
        </form>

        {/* Right: Contact Info */}
        <div className="contact-info">
          <p>
            <FaMapMarkerAlt className="icon" /> Pandharpur, Maharashtra
          </p>
          <p>
            <FaPhoneAlt className="icon" /> +91 7821989843
          </p>
          <p>
            <FaEnvelope className="icon" /> supriyachandanshive2@gmail.com
          </p>

          <div className="social-icons">
            <a
              href="mailto:supriyachandanshive2@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://instagram.com/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/supriyadev-web"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/chandanshivesupriya-web"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

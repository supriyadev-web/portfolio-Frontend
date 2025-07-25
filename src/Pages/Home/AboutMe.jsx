import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaBus,
  FaCode,
  FaLaptopCode,
  FaBookReader,
  FaPalette,
  FaHeadphones
} from "react-icons/fa";
import "./About.css"; // Assuming you have a CSS file for styling

export default function AboutMe() {
  const [tab, setTab] = useState("about");

  return (
    <section className="about-section">
      <h2 className="intro-heading">My Intro</h2>
      <h1 className="section--heading">About Me</h1>

      <div className="about-container">
        <div className="about-content">
          <p className="about-description">
            Hi, I'm Supriya Chandanshive, a passionate Frontend Developer from
            Pandharpur, Maharashtra. I graduated from Solapur University in 2024
            with a Bachelor's degree in Computer Engineering. My journey into
            web development started with a curiosity about how websites work and
            grew into a love for creating beautiful, responsive user interfaces.
            I specialize in building modern frontend applications using HTML,
            CSS, Tailwind CSS, Bootstrap, JavaScript, and React.js.
          </p>

          <p className="about-description mt-4">
            Currently, I’m learning backend technologies, to become a full stack developer. I enjoy exploring new tools
            and frameworks, and I believe in continuous learning to stay updated
            with the latest trends and best practices in the tech world.
          </p>

          <div className="about-tabs">
            <button
              onClick={() => setTab("about")}
              className={`tab-button ${tab === "about" ? "active" : ""}`}
            >
              about-me
            </button>
            <button
              onClick={() => setTab("skills")}
              className={`tab-button ${tab === "skills" ? "active" : ""}`}
            >
              Skills
            </button>
            <button
              onClick={() => setTab("education")}
              className={`tab-button ${tab === "education" ? "active" : ""}`}
            >
              Education
            </button>
          </div>

          {/* Tab Content */}
          {tab === "about" && (
            <div className="tab-content">
              <p className="icon-line">
                <FaUser className="icon" /> <strong>Name :</strong> Supriya
                Chandanshive
              </p>
              <p className="icon-line">
                <FaEnvelope className="icon" /> <strong>Email :</strong>{" "}
                supriyachandanshive2@gmail.com
              </p>

              <h3 className="interests-title">My Interests</h3>
              <div className="interests-list">
                <span className="interest-item">
                  <FaCode className="icon" /> Coding & Building Projects
                </span>
                <span className="interest-item">
                  <FaLaptopCode className="icon" /> Exploring New Tech
                </span>
                <span className="interest-item">
                  <FaBookReader className="icon" /> Learning & Upskilling
                </span>
                <span className="interest-item">
                  <FaPalette className="icon" /> UI/UX Design & Creativity
                </span>
                <span className="interest-item">
                  <FaBus className="icon" /> Traveling & Exploring Places
                </span>
                <span className="interest-item">
                  <FaHeadphones className="icon" /> Listening to Music
                </span>
              </div>
            </div>
          )}

          {tab === "skills" && (
            <div className="tab-content">
              <div>
                <p className="skill-title">Frontend Developer</p>
                <p className="interest-item">
                  Building responsive UI using React, HTML, CSS, Tailwind, and
                  Bootstrap.
                </p>
              </div>
              {/* <div>
                <p className="skill-title">Backend Developer</p>
                <p className="interest-item">
                  Creating APIs and logic with Node.js, Express, and MongoDB.
                </p>
              </div> */}
              {/* <div>
                <p className="skill-title">MERN Stack Developer</p>
                <p className="interest-item">
                  Building full-stack applications using MongoDB, Express,
                  React, and Node.
                </p>
              </div> */}
              <div>
                <p className="skill-title">UI/UX Design</p>
                <p className="interest-item">
                  Designing intuitive interfaces using Figma and implementing
                  responsive layouts.
                </p>
              </div>
              <div>
                <p className="skill-title">Version Control</p>
                <p className="interest-item">
                  Using Git & GitHub for code collaboration and project
                  management.
                </p>
              </div>
            </div>
          )}

          {tab === "education" && (
            <div className="tab-content">
              <p className="interest-item">
                <strong>Graduation:</strong> BTech in Computer Engineering –
                Solapur University, 2024
              </p>
              <p className="interest-item">
                <strong>12th:</strong> Maharashtra Board, Completed from a
                college under Solapur University – 2020
              </p>
              <p className="interest-item">
                <strong>10th:</strong> Maharashtra Board, Completed from a
                school in Solapur – 2018
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

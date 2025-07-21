import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hi, I'm Supriya Chandanshive</p>
          <h1 className="hero-title">
            <span className="typewriter-text">
              <Typewriter
                words={[
                  // "Full Stack Developer",
                  // "MERN Developer",
                  "Frontend Engineer",
                  "Frontend Developer"
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="hero--section-description">
            I build responsive and dynamic web applications using the MERN stack
            and C#. Currently expanding my backend skills with .NET to become a
            full-stack developer. Let's collaborate and create something great!
          </p>
        </div>
        <Link to="Contact" className="btn btn-primary hero--section-btn">
          Get in Touch
        </Link>
      </div>
    </section>
  );
}

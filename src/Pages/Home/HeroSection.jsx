import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hi, I'm Supriya Chandanshive</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Web Developer
          </h1>
          <p className="hero--section-description">
            I build responsive and dynamic web applications using the MERN stack
            and C#. Currently expanding my backend skills with .NET to become a
            full-stack developer. Let's collaborate and create something great!
          </p>
        </div>
        <Link
        // onClick={closeMenu}
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact"
        className="btn btn-primary"
      >
       Get in Touch
      </Link>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}

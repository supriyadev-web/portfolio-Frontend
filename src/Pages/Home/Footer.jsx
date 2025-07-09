import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer--container">
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content">
          © {currentYear} Supriya Chandanshive. All rights reserved. | Made with
          💖
        </p>

        <ul className="footer--social--icon">
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/terms-of-service">Terms of Service</Link>
          </li>
          <li>
            <Link to="/cookies-settings">Cookies Settings</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

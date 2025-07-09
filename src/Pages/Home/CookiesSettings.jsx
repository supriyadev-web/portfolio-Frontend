import React from "react";
import "./CookiesSettings.css";
import "./BackButton.css"; // Assuming you have a CSS file for styling
import { Link } from "react-router-dom";

const CookiesSettings = () => {
  return (
    <div className="cookies-container">
      <h1 className="cookies-title">Cookies Settings</h1>
      <p className="cookies-text">
        We use cookies to improve user experience. You can control cookie
        settings in your browser preferences.
      </p>
      <p className="cookies-text">
        No personal information is stored in cookies, and you may disable them
        anytime.
      </p>
      {/* ✅ Link Button to Home */}
      <Link to="/" className="back-button">
        ⬅ Back to Home
      </Link>
    </div>
  );
};

export default CookiesSettings;

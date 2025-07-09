import React from "react";
import "./TermsOfService.css";
import "./BackButton.css"; // Assuming you have a CSS file for styling
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-title">Terms of Service</h1>
      <p className="terms-text">
        By using this portfolio, you agree to the terms and conditions set forth
        here. All content is owned by Supriya Chandanshive.
      </p>
      <p className="terms-text">
        You may not reproduce, distribute, or use content without permission.
        These terms may change anytime without notice.
      </p>

      {/* ✅ Link Button to Home */}
      <Link to="/" className="back-button">
        ⬅ Back to Home
      </Link>
    </div>
  );
};

export default TermsOfService;

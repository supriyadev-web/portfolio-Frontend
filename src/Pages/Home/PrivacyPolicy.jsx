import React from "react";
import "./PrivacyPolicy.css";
import "./BackButton.css"; // Assuming you have a CSS file for styling
import { Link } from "react-router-dom";
const PrivacyPolicy = () => {
  return (
    
    <div className="privacy-policy-container">
      <h1 className="privacy-policy-title">Privacy Policy</h1>
      <p className="privacy-policy-text">
        We respect your privacy and are committed to protecting the personal
        information you share with us.
      </p>
      <p className="privacy-policy-text">
        We do not sell, trade, or otherwise transfer your information to outside
        parties. We use your data only to improve your experience and deliver
        the best services.
      </p>
       {/* ✅ Link Button to Home */}
            <Link to="/" className="back-button">
              ⬅ Back to Home
            </Link>
    </div>
  );
};

export default PrivacyPolicy;

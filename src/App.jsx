import "./App.css";
// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
// import HeroSection from "./Pages/Home/HeroSection";
import AboutMe from "./Pages/Home/AboutMe";
import MyPortfolio from "./Pages/Home/MyPortfolio";
import ContactMe from "./Pages/Home/ContactMe";
import MySkills from "./Pages/Home/MySkills";
import PrivacyPolicy from "./Pages/Home/PrivacyPolicy";
import TermsOfService from "./Pages/Home/TermsOfService";
import CookiesSettings from "./Pages/Home/CookiesSettings";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<AboutMe />}></Route>
            <Route path="/skills" element={<MySkills />}></Route>
            <Route path="/projects" element={<MyPortfolio />}></Route>
            <Route path="/contact" element={<ContactMe />}></Route>
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookies-settings" element={<CookiesSettings />} />
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

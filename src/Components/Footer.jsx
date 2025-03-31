import { useState } from "react";
import "./../Styles/Footer.css"

const Footer = ({ onNavigate }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setEmail("");
    // Add your subscription logic here
  };

  const handleNavigate = (path) => {
    onNavigate(path);
  };

  return (
    <footer className="footer">
      {/* Newsletter Band */}
      <div className="newsletter-band">
        <div className="newsletter-text">
          <span>INVESTING AT THE FRONTIER </span>
          <span>INVESTING AT THE FRONTIER </span>
          <span>INVESTING AT THE FRONTIER </span>
        </div>
      </div>

      {/* Footer Content */}
      <div className="footer-content">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <h2>AgFunder</h2>
            <p className="small-text">
              Feel free not to subscribe and experience FOMO on steroids.
            </p>
            <p>Subscribe to our must-read weekly agrifoodtech newsletter.</p>

            <form onSubmit={handleSubmit} className="subscribe-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="subscribe-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="subscribe-button">
                SUBSCRIBE
              </button>
            </form>

            <p className="small-text">
              By clicking 'Sign Up' you agree with our Terms and Conditions.
            </p>
          </div>

          {/* Company Links */}
          <div className="footer-section">
            <h3>Company</h3>
            <ul className="footer-links">
              <li onClick={() => handleNavigate("/about")}>Team</li>
              <li onClick={() => handleNavigate("/about")}>About Us</li>
              <li onClick={() => handleNavigate("/")}>Contact Us</li>
              <li onClick={() => handleNavigate("/")}>Careers</li>
            </ul>
          </div>

          {/* Invest Links */}
          <div className="footer-section">
            <h3>Invest</h3>
            <ul className="footer-links">
              <li onClick={() => handleNavigate("/portfolio")}>Portfolio</li>
              <li onClick={() => handleNavigate("/invest")}>Invest with us</li>
            </ul>
          </div>

          {/* News Links */}
          <div className="footer-section">
            <h3>News + Research</h3>
            <ul className="footer-links">
              <li onClick={() => handleNavigate("/news")}>AgFunder News</li>
              <li onClick={() => handleNavigate("/research")}>Research</li>
              <li onClick={() => handleNavigate("/")}>Press</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© 2025 AgFunder. All rights reserved.</p>

{/*           
          <div className="footer-social-icons">
            <a href="#">📘</a>
            <a href="#">🐦</a>
            <a href="#">📸</a>
            <a href="#">📌</a>
          </div> */}

          {/* Legal Links */}
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

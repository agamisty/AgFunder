import React from "react";
import "./../Styles/InvestGridStyles.css"
import woman from "./../images/woman.png"
import woman2 from "./../images/woman2.png"
import woman3 from "./../images/woman3.png"
import man from "./../images/man.png"
import friends from "./../images/friends.png"
import couple from "./../images/couple.png"

const InvestGrid = () => {
  return (
    <div className="portfolio-container">
      {/* Top row */}
      <div className="portfolio-item">
        <img src={woman} alt="Pointing woman" />
      </div>
      <div className="portfolio-item">
        <img src={couple} alt="Smiling couple" />
      </div>

      {/* Center text */}
      <div className="portfolio-text">
        <h2>Investing in the future, backing the bold</h2>
      </div>

      {/* Bottom row */}
      <div className="portfolio-item">
        <img src={man} alt="Man in yellow jacket" />
      </div>
      <div className="portfolio-item">
        <img src={woman2} alt="Smiling woman" />
      </div>
      <div className="portfolio-item">
        <img src={friends} alt="Woman with arms crossed" />
      </div>

      {/* Right-bottom text with image */}
      <div className="portfolio-item invest-image">
        <img src={woman3} alt="Woman on phone" />
      </div>
      <div className="portfolio-text small-text">Invest with us</div>
    </div>
  );
};

export default InvestGrid;

import React from "react";
import "./../Styles/InvestCircleStyles.css"

const InvestCircle = () => {
  return (
    <div className="agfunder-invest-circle-container">
      {/* Left Section */}
      <div className="left-section">
        <h2 className="title">
          The <span className="highlight">AgFunder</span> Advantage
        </h2>
        <p className="subtitle">In an industry ripe for disruption, how we fund matters.</p>
        <div className="orbit">
          <div className="center-text">AgFunder</div>
          <div className="orbit-circle orbit-1"></div>
          <div className="orbit-circle orbit-2"></div>
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <h3 className="number">02 <span className="capital-text">CAPITAL</span></h3>
        <div className="info-box">
          <div className="info-item">100+ investments with ~$300m AUM</div>
          <div className="info-item">Top quartile performance</div>
          <div className="info-item">Portfolio companies on 4 continents</div>
        </div>
      </div>
    </div>
  );
};

export default InvestCircle;

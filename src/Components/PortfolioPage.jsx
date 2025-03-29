import React from "react";
import "./../Styles/Portfolio.css"
import "./../Components/GridLayoutPortfolio.jsx"
import { useNavigate } from "react-router-dom";
import GridLayoutPortfolio from "./../Components/GridLayoutPortfolio.jsx";
import Subscription from "./Subscription.jsx";
import PortfolioGrid from "./PortfolioGrid.jsx";



const categories = [
    ["ENERGY", "CONSUMER", "CLIMATE", "MARKETPLACE", "AI" , "BIOTECH"],
    ["ROBOTICS", "MATERIAL SCIENCE"],
  ];


const Portfolio = () => {
  const navigate = useNavigate(); 

  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <h1 className="logo" onClick={() => navigate("/")}>AgFunder</h1>
        <nav className="nav">
          <ul>
            <li onClick={() => navigate("/portfolio")}>Portfolio</li>
            <li onClick={() => navigate("/invest")}>Invest</li>
            <li onClick={() => navigate("/about")}>About Us</li>
            <li onClick={() => navigate("/research")}>Research</li>
            <li onClick={() => navigate("/news")}>AgFunderNews</li>
          </ul>
        </nav>
      </header>


      {/* Main Content */}
      <main className="content">
        {/* Left Section */}
        <div className="text-section">
          <p className="main-text">
            Our visionary founders span the globe with technologies ranging from
            robotics & AI to biotech, materials science and nanotechnology.
          </p>
          <p className="sub-text">
            Find jobs at our portfolio companies{" "}
            <span className="link">here.</span>
          </p>
        </div>

        {/* Right Section */}
        {/* <div className="portfolio">
          <h2>Our Portfolio</h2>
        </div> */}
      </main>



      <PortfolioGrid></PortfolioGrid>











{/* categories */}

      <div className="cat-container">
      <div className="categories">
        {categories.map((row, rowIndex) => (
          <div key={rowIndex} className="category-row">
            {row.map((category, index) => (
              <div key={index} className="category-box">
                {category}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" />
        <span className="search-icon">🔍</span>
      </div>
    </div>


    {/* girdlayout */}
    <GridLayoutPortfolio></GridLayoutPortfolio>


    {/* subscription */}
    <Subscription></Subscription>

      
    </div>
  );
};

export default Portfolio;

import React from 'react'
import { useNavigate } from "react-router-dom";
import fruits from "./../images/fruits.png"
import lab from "./../images/lab.png"
import "./../Styles/AboutStyles.css"
import AboutTeamCards from './AboutTeamCards';
import AboutCircle from './AboutCircle';
import Subscription from './Subscription';
import Footer from './Footer';


export default function AboutPage() {
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


      <div className="agfunder-container">
      <div className="agfunder-content">
        <h1>
          <span className="agfunder-logo">AgFunder</span> 
          <span className="bold-text"> is a global VC, with roots in agrifood, AI, biology and climate</span>
        </h1>
        <p className="about-us">About Us</p>
      </div>
      <div className="agfunder-image">
        <img src={fruits} alt="Healthy food" />
      </div>
    </div>









    <div className="agfunder-capital-container">
      <h1 className="title">Agfunder is not just capital</h1>
      <div className="content">
        <p>
          We invest at the frontier of new technology to solve the world’s biggest problems, bringing first principles investing to food, agriculture and beyond.
        </p>
        <p>
          AgFunder’s substantial media, research, and engineering arms support the firm’s unique ability to source deals, expertise, networks, investors, and intelligence for its portfolio and Limited Partners.
        </p>
        <p>
          The firm has over <strong>$300 million</strong> in assets under management and has invested in over <strong>100</strong> <a href="#" className="link">portfolio companies</a> across four continents.
        </p>
        <p>
          Since our inception, we have historically outperformed top-quartile VC benchmarks, frequently co-investing with some of the biggest names in venture capital globally.
        </p>
      </div>
    </div>







    <div className="venture-container">
      <div className="left-content">
        <p className="main-text">
          We’re rethinking venture capital for <br /> the 21st century, born online and <br /> fueled by community.
        </p>
      </div>
      <div className="right-content">
        <h2 className="title">Capital, context, code <br />and community</h2>
        <img src={lab} alt="Scientists in lab" className="lab-image" />
      </div>
      <div className="buttons">
        <button className="btn">INVESTMENT</button>
        <button className="btn">MEDIA & RESEARCH</button>
        <button className="btn">ENGINEERING</button>
      </div>
    </div>


    <AboutTeamCards></AboutTeamCards>

    <AboutCircle></AboutCircle>

    <Subscription></Subscription>

    <Footer></Footer>

      
    </div>

  )
}

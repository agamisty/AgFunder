import React from 'react'
import { useNavigate } from "react-router-dom";
import image1 from "./../images/image1.png"
import image2 from "./../images/image2.png"
import image3 from "./../images/image3.png"
import image4 from "./../images/image4.png"
import image5 from "./../images/image5.png"
import Subscription from './Subscription';
import "./../Styles/Research.css";
import Footer from "./Footer";



const ResearchPage = () => {
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
                  <li className="active">Research</li>
                  <li onClick={() => navigate("/news")}>AgFunderNews</li>
               </ul>
            </nav>
         </header>

         {/* Research Intro Section */}
         <section className="research-intro">
            <h2 className="intro-title">Our research for your knowledge.</h2>
            <h3 className="sub-heading">Research</h3>
            <p className="intro-text">
               As part of AgFunder’s role in funding startups in food and agriculture, we have become a leading intelligence source for the sector.
               <br />
               As well as providing daily news coverage through <a href="#">AgFunderNews</a>, we publish periodic research on trends shaping the future of food and agriculture. 
               Our widely-cited research includes investment reports on venture capital funding to foodtech and agtech startups, emerging market agrifoodtech and climate trends, 
               country deep-dives, and resource guides for startups.
               <br />
               Want to learn more or commission a report? Email <a href="mailto:louisa@agfunder.com">louisa@agfunder.com</a>
            </p>
         </section>

      
      {/* Featured Report */}
      <section className="featured-report">
        <h3>FEATURED REPORT</h3>
        <div className="featured-content">
          <img src={image1} alt="Featured Report" className="featured-img" />
          <div className="featured-text">
            <h2>AgFunder Global AgriFoodTech Investment Report 2025</h2>
            <p>Global agrifoodtech showed some signs of recovery in 2024, reaching $16 billion in funding, just a 4% drop from 2023.
               Increased investment in developed markets such as the US and the Netherlands,
               and developing nations like India, hint at better days to come.
               But no one’s out of the woods yet.</p>
          </div>
        </div>
      </section>

       {/* Reports Grid */}
       <section className="reports-grid">
        <div className="report-card">
          <img src={image2} alt="Asia-Pacific Report" className="report-img" />
          <h5>Agfunder Funding Report</h5>
          <h4>Asia-Pacific AgriFood Investment<br/>
          Report 2024</h4>
          <p>Agrifoodtech funding in Asia-Pacific (APAC) has 
            demonstrated a remarkable recovery in 2024 from the lows of the 
            last couple of years. As of the end of October 
            2024, APAC agrifoodtech startups have raised $4.2 billion 
            in funding, a 38% increase on the $3.1 billion raised over
            the same period in 2023</p>
        </div>
       

        <div className="report-card">
          <img src={image3} alt="Africa Report" className="report-img" />
          <h5>Agfunder Funding Report</h5>
          <h4>Asia-Pacific AgriFood Investment<br/>
          Report 2024</h4>
          <p>Agrifoodtech funding in Asia-Pacific (APAC) has 
            demonstrated a remarkable recovery in 2024 from the lows of the 
            last couple of years. As of the end of October 
            2024, APAC agrifoodtech startups have raised $4.2 billion 
            in funding, a 38% increase on the $3.1 billion raised over
            the same period in 2023</p>
        </div>

        <div className="report-card">
          <img src={image4} alt="10 Years of AgriFoodTech" className="report-img" />
          <h5>Agfunder Funding Report</h5>
          <h4>10 Years of AgriFoodTech (and AgFunder!)
             – a Celebration and Potted History</h4>
            <p>Ten years ago, Michael Dean and Rob Leclerc 
              incorporated AgFunder with the mission to bring more
              investment and innovation to the agriculture and food sectors.
            This was the same year Monsanto acquired Climate 
            Corporation in what remains the most pivotal deal of agrifoodtech history</p>
        </div>

        <div className="report-card">
          <img src={image5} alt="Latin America Report" className="report-img" />
          <h5>Agfunder Funding Report</h5>
          <h4>Latin America AgriFoodTech Investment
          Report 2023</h4>
          <p>The inaugural Latin American AgriFoodTech Investment Report released by <a href="#">AgFunder</a>
            , in collaboration with <a href="#">SP Ventures</a>,<a href="#">Alianza Team</a>, <a href="#">BASF</a>and <a href="#">Cibersons</a>, details $7.3 billion 
            of investment in the sector since 2018.
            In 2022, agrifoodtech startups, innovating from farm to fork, raised $1.7 billion in funding,
           an increase from under $1 billion in 2018 but a 39% decline on record-breaking 2021 investment
            levels, in line with the global venture capital pullback.</p>
        </div>
      </section>

        <Subscription></Subscription>
        <Footer></Footer>

    </div>

  )
};

export default ResearchPage;

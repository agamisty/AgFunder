import React from "react";
import { useNavigate } from "react-router-dom";

import { NavLink } from "react-router-dom";

import './../Styles/HomeStyles.css';
import anand from  './../images/anand.png';
import jen from './../images/jen.png';
import sofia from './../images/sofia.png';
import kenny from './../images/kenny.png';
import yubi from './../images/yubi.png';
import climate from './../images/climate.png';
import global from './../images/global.png';
import Footer from "./Footer";

const AgFunder = () => {

    const navigate = useNavigate();

  return (
    <div className="container">
      <header className="header">
        <h1 className="logo">AgFunder</h1>
        <nav className="nav">
          <ul>
          <li onClick={() => navigate("/portfolio")}>Portfolio</li>
            <li onClick={() => navigate("/invest")}>Invest</li>
            <li onClick={() => navigate("/about")}>About Us</li>
            <li onClick={() => navigate("/research")}>Research</li>
            <li onClick={() => navigate("/news")}>AgFunderNews</li>
            <li onClick={() => navigate("/chatbox")}>Chatbox</li>


          
          </ul>
        </nav>
      </header>
      
      <section className="hero">
        <h2>Funding the frontier</h2>
      </section>


      <div className="invest-container">
      <div className="invest">
        <h2>Invest with Us</h2>
        <p>
          We bring first principles thinking to food, agriculture, human and planetary health,
          investing at the core of the world's biggest problems.
        </p>
        <button>INVEST IN OUR FUNDS</button>
      </div>
      </div>
      
      <section className="founders">
        <div className="founder">
          <img src={jen} alt="Jen Keane" />
          <p className="highlight">JEN KEANE CO-FOUNDER, MODERN SYNTHESIS</p>
          <p>Modern Synthesis is developing a new class of natural materials from cellulose</p>
        </div>


        <div className="founder sophia">
          <img src={sofia} alt="Sophia Wang" />
          <p className="highlight">SOPHIA WANG CO-FOUNDER, MYCOWORKS</p>
          <p>MycoWorks creates leather from mycelium</p>
        </div>
        

        
        <div className="founder">
          <img src={anand} alt="Anand Parikh" />
          <p className="highlight">ANAND PARIKH FOUNDER, FAETH</p>
          <p>Faeth develops clinical-grade foods to starve tumors, making diet the fifth pillar of cancer treatment</p>
        </div>


        
      
        
        
        
      </section>

      <div className="startups">
        <h2>For startups</h2>
        <p>
          We fund frontier technologies solving core problems in the world’s biggest industries.
          We are not intimidated by threats to the status quo or conventional wisdom.
          See if you can challenge us.
        </p>
      </div>


      
      <section className="founders">
      <div className="founder">
          <img src={kenny} alt="Anand Parikh" />
          <p className="highlight">ANAND PARIKH FOUNDER, FAETH</p>
          <p>Faeth develops clinical-grade foods to starve tumors, making diet the fifth pillar of cancer treatment</p>
        </div>



        {/* <div className="ai-container"> */}
      <div className="ai">
        <h2>AI</h2>
        <p>
            AI is our fabric. We hired an engineering team long before most VCs to help us identify the most promising entrepreneurs and technologies. It now supports more than the investment team giving our LPs exceptional access to the latest in agrifood and deeptech.
        </p>
        
      </div>
      {/* </div> */}


       

      <div className="founder">
          <img src={yubi} alt="Anand Parikh" />
          <p className="highlight">ANAND PARIKH FOUNDER, FAETH</p>
          <p>Faeth develops clinical-grade foods to starve tumors, making diet the fifth pillar of cancer treatment</p>
        </div>


      </section>




    <div className="research-container">
      <div className="research-header">
        <h2>Redefining industries through <br /> disciplined investing.</h2>
        <p>
          Artificial intelligence, machine learning, robotics, biotechnology, and
          other forms of deep tech no longer operate in silos – they enhance each
          other’s capabilities. Based in Silicon Valley and rooted in AI, agrifood,
          biology and climate, we invest where technologies converge to solve the
          world’s greatest challenges.
        </p>
      </div>

      <div className="research-content">
        <div className="report-card">
          <img src={global} alt="Global AgriFoodTech Investment Report 2024" />
          <button className="download-btn">DOWNLOAD</button>
          <h3>AgFunder Global AgriFoodTech Investment Report 2024</h3>
          <p>
            The food and agriculture technology market was badly hit by the venture
            capital downturn in 2023, raising $15.6 billion in funding, a 49% year-over-year decline. That drop was more than the broader venture capital, which fell 38% in 2023.
          </p>
        </div>

        <div className="report-card">
          <img src={climate} alt="Climate Capital Report" />
          <button className="download-btn">DOWNLOAD Executive Summary</button>
          <h3>Climate Capital; Financing Adaptation Pathways For Smallholder Farmers</h3>
          <p>
            A first-of-its-kind report by AgFunder and ISF Advisors, with support from
            the Bill & Melinda Gates Foundation, sheds light on the pressing need and opportunities for private investment in climate adaptation within the agriculture sectors of emerging markets, focusing on the pivotal role of smallholder farmers.
          </p>
        </div>
      </div>

      <button className="more-research-btn">MORE RESEARCH</button>
    </div>







    <div className="subscription-container">
      {/* First Subscription Box */}
      <div className="subscription-box">
        <div className="left-text">
          <h3>Feel free not to subscribe and experience <br /> FOMO on steroids.</h3>
        </div>
        <div className="right-content">
          <p>
            Subscribe to our must-read agrifoodtech newsletter. Get free access
            to our research. Be prepared to be provoked. Sign up for our
            newsletters and alerts.
          </p>
          <div className="input-group">
            <input type="email" placeholder="Enter your Email" />
            <button>SIGNUP</button>
          </div>
        </div>
      </div>

   

      
    </div>

  
        <Footer></Footer>
              
      
    </div>
  );
};

export default AgFunder;

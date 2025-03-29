import React from "react";
import "./../Styles/GridLayoutStyles.css"
import profile1 from "./../images/profile1.png"
import profile2 from "./../images/profile2.png"
import profile3 from "./../images/profile3.png"
import profile4 from "./../images/profile4.png"
import profile5 from "./../images/profile5.png"

import azaneo from "../images/azaneo.png";
import bluemethane from "../images/bluemethane.png";
import carbonfarm from "../images/carbonfarm.png";
import nium from "../images/nium.png";
import tablepointer from "../images/tablepointer.png";
import nobell from "../images/nobell.png";

const startups = [
  {
    name: "AZANEO",
    description: "Azaneo is developing a chemical-free non-thermal weeding solution",
    image: azaneo,
    founders: [profile1],
  },
  {
    name: "BLUEMETHANE",
    description: "Bluemethane captures methane from water and converts it to bioenergy, reducing greenhouse emission",
    image: bluemethane,
    founders: [profile2],
  },
  {
    name: "CARBONFARM",
    description: "CarbonFarm decarbonises rice farming through satellite-verified carbon credits.",
    image: carbonfarm,
    founders: [profile3],
  },
  {
    name: "NIUM",
    description: "Nium makes ammonia cheaper and cleaner than the Haber Bosch process.",
    image: nium,
    founders: [profile4],
  },
  {
    name: "TABLEPOINTER",
    description: "TablePointer is an AI-driven energy management platform.",
    image: tablepointer,
    founders: [profile5],
  },
  {
    name: "ALPIN BIO",
    description: "Nobell makes real cheese from plant",
    image: nobell,
    founders: [profile1],
  },
];

const GridLayoutPortfolio = () => {
  return (
    <div className="grid-container">
      {startups.map((startup, index) => (
        <div className="grid-item" key={index}>
          <div className="startup-header">
            <span className="startup-name">{startup.name}</span>
            <div className="founders">
              {startup.founders.map((founder, idx) => (
                <img key={idx} src={founder} alt="Founder" className="founder-img" />
              ))}
            </div>
          </div>
          <p className="description">{startup.description}</p>
          <img src={startup.image} alt={startup.name} className="startup-image" />
        </div>
      ))}
    </div>
  );
};

export default GridLayoutPortfolio;

import React from "react";
import "./../Styles/AboutTeamCardsStyles.css"
import micheal from "./../images/micheal.png"
import manuel from "./../images/manuel.png"
import rob from "./../images/rob.png"

const teamMembers = [
  {
    name: "MICHAEL DEAN, LLN",
    role: "Partner",
    description:
      "Michael is the co-founder of AgFunder. He holds an LL.B and an LL.M degree in International Environmental Law from the University of Sydney and has over 25 years experience in food and agriculture, venture capital, environmental sustainability, carbon markets, social impact and law.",
    image: micheal,
  },
  {
    name: "Manuel Gonzalez, MBA",
    role: "Partner",
    description:
      "Manuel is the former Global Head of F&A Startup Innovation at Rabobank and Founder of FoodBytes! and TERRA, which he created as a platform for startups at the bank. He was also General Manager of Rabobank West Coast in the United States and General Manager of Rabobank in Mexico.",
    image: manuel,
  },
  {
    name: "Rob Leclerc, PhD",
    role: "Partner",
    description:
      "Rob is the co-founder of AgFunder with over 15 years of qualitative and quantitative experience as a scientist and engineer. He has five degrees, spanning Philosophy, Computer Science (Artificial Intelligence & Virtual Robotics), and Computational Biology, including a PhD from Yale University.",
    image: rob,
  },
];

const AboutTeamCards = () => {
  return (
    <div className="team-container">
      {teamMembers.map((member, index) => (
        <div className="team-card" key={index}>
          <div className="name-highlight">{member.name}</div>
          <img src={member.image} alt={member.name} className="team-image" />
          <h3 className="role">{member.role}</h3>
          <p className="description">{member.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutTeamCards;

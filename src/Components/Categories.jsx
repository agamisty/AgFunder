import React from "react";


const categories = [
  ["ENERGY", "CONSUMER", "CLIMATE", "MARKETPLACE"],
  ["AI", "BIOTECH", "ROBOTICS", "MATERIAL SCIENCE"],
];

const Categories = () => {
  return (
    <div className="container">
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
      <br />
    </div>
  );
};

export default Categories;

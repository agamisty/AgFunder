import React from 'react'
import { useNavigate } from "react-router-dom";


export default function ResearchPage() {
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

      
    </div>

  )
}

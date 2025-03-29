import React from "react";
import "./../Styles/InvestorFormStyles.css"

const InvestorForm = () => {
  return (
    <div className="form-container">
      <form className="investor-form">
        <label>Full Name</label>
        <input type="text" placeholder="Enter your full name" />

        <label>Email Address</label>
        <input type="email" placeholder="Enter your email address" />

        <label>Investor Type</label>
        <div className="investor-type">
          <button type="button">CORPORATION/STRATEGIC</button>
          <button type="button">FAMILY OFFICE</button>
          <button type="button">INSTITUTIONAL INVESTOR</button>
          <button type="button">WEALTH MANAGER</button>
        </div>

        <label>Are you a Qualified Purchaser or Accredited Investor?</label>
        <select>
          <option>Select an option</option>
        </select>

        <label>What is your expected investment size?</label>
        <select>
          <option>Select an option</option>
        </select>

        <label>About you</label>
        <textarea placeholder="To help qualify you as an investor tell us about yourself in 1-2 sentences"></textarea>

        <label>Questions?</label>
        <textarea></textarea>

        <label>How did you hear about our fund?</label>
        <select>
          <option>Select an option</option>
        </select>

        <button type="submit" className="submit-btn">SUBMIT</button>
      </form>
    </div>
  );
};

export default InvestorForm;

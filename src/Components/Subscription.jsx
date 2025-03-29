import React from 'react'
import "././../Styles/SubscriptionStyles.css"

export default function Subscription() {
  return (
    <>
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
    </>
  )
}

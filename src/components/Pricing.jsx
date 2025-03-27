import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div>
      <h3 className="text-center my-3 my-lg-4">Pricing</h3>
      <div className="card-container">
        <div className="cards">
          <h2>1 Month Plan - Basic</h2>
          <p>Best for 1 or more openings</p>
          <div className="price">Only ₹2200</div>
          <p>Valid for 30 days</p>
          <div className="benefits">
            <ul>
              <li>Unlimited Candidate Responses</li>
              <li>Keep 1 job active</li>
              <li>Unlock 100 candidates from our database</li>
              <li>Boost jobs up to 3 times</li>
            </ul>
          </div>
          <button className="btn">Buy Policy</button>
        </div>

        <div className="cards">
          <h2>3 Months Plan - Basic</h2>
          <p>Best for 5 or more openings</p>
          <div className="price">Only ₹4200</div>
          <p>Valid for 90 days</p>
          <div className="benefits">
            <ul>
              <li>Unlimited Candidate Responses</li>
              <li>Keep 1 job active</li>
              <li>Unlock 200 candidates from our database</li>
              <li>Boost jobs up to 9 times</li>
            </ul>
          </div>
          <button className="btn">Buy Policy</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

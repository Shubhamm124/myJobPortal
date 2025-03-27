import React from "react";
import "./Remarks.css"; // Import the CSS file for styling

const Remarks = () => {
  return (
    <div className="remarks-container">
      <div className="remarks-card">
        <h2 className="remarks-title">Remarks of Interview</h2>
        <h3 className="remarks-subtitle">
          We conducted <span className="highlight">8 interviews</span> on{" "}
          <span className="highlight">10 February 2025</span> for the position
          of <span className="highlight">Front-end Developer</span>.
        </h3>
        <h4 className="remarks-status">
          🚫 Unfortunately, no one was selected.
        </h4>
        <h4 className="remarks-info">
          Please apply only if you have the following skills:
        </h4>

        <ul className="skills-list">
          <li>✅ HTML</li>
          <li>✅ CSS</li>
          <li>✅ JavaScript</li>
          <li>✅ Bootstrap</li>
          <li>✅ React</li>
        </ul>

        <p className="remarks-note">
          📢 Keep improving your skills and best of luck for the next interview!
          🚀
        </p>
      </div>
    </div>
  );
};

export default Remarks;

import React, { useState, useEffect } from "react";
import "./ApplicantsList.css";

const ApplicantsList = () => {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const processedApplicants = data.users.slice(0, 5).map((applicant) => ({
          ...applicant,
          status: "Pending", // Default status
          jobApplied: "Software Developer",
          experience: Math.floor(Math.random() * 10) + 1,
          skills: ["React", "Node.js", "JavaScript"],
        }));

        setApplicants(processedApplicants);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching applicants:", err);
        setError(err.message || "Failed to load applicants.");
        setLoading(false);
      });
  }, []);

  const handleStatusChange = (id, newStatus) => {
    setApplicants((prevApplicants) =>
      prevApplicants.map((applicant) =>
        applicant.id === id ? { ...applicant, status: newStatus } : applicant
      )
    );
  };

  if (loading) return <div className="loading">Loading applicants...</div>;
  if (error) return <div className="error-msg">Error: {error}</div>;

  return (
    <div className="applicants-container">
      <h2
        className="pt-3 text-center"
        style={{
          color: "blue",
        }}
      >
        Job Applicants
      </h2>
      {applicants.map((applicant) => (
        <div key={applicant.id} className="applicant-card">
          <img
            src={applicant.image}
            alt={applicant.firstName}
            className="profile-pic"
          />
          <div className="applicant-info">
            <h3>
              {applicant.firstName} {applicant.lastName}
            </h3>
            <p>
              <strong>Email:</strong> {applicant.email}
            </p>
            <p>
              <strong>Job Applied:</strong> {applicant.jobApplied}
            </p>
            <p>
              <strong>Experience:</strong> {applicant.experience} years
            </p>
            <p>
              <strong>Skills:</strong> {applicant.skills.join(", ")}
            </p>
            <p>
              <strong>Current Status:</strong>{" "}
              <span className={`status ${applicant.status.toLowerCase()}`}>
                {applicant.status}
              </span>
            </p>
            <div className="action-buttons">
              <button
                className="accept-btn"
                onClick={() => handleStatusChange(applicant.id, "Accepted")}
              >
                Accept
              </button>
              <button
                className="reject-btn"
                onClick={() => handleStatusChange(applicant.id, "Rejected")}
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApplicantsList;

import React from "react";
import "./Jobposting.css";

const Jobposting = () => {
  const jobs = [
    {
      title: "Frontend Developer",
      company: "Tech Solutions Ltd.",
      location: "Remote",
      description: "Looking for a skilled React developer to join our team.",
      salary: "20,000 - 25,000 / month",
    },
    {
      title: "Backend Developer",
      company: "Code Innovators Inc.",
      location: "New York, USA",
      description: "Hiring Node.js developer with experience in REST APIs.",
      salary: "15,000 - 20,000 / month",
    },
  ];
  return (
    <div className="job-cards-container">
      {jobs.map((job, index) => (
        <div key={index} className="job-card">
          <h2>{job.title}</h2>
          <h4>{job.company}</h4>
          <p>
            <strong>Location:</strong> {job.location}
          </p>
          <p>{job.description}</p>
          <p>
            <strong>Salary:</strong> {job.salary}
          </p>
          <button className="apply-btn">Apply Now</button>
        </div>
      ))}
    </div>
  );
};

export default Jobposting;

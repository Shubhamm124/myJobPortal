import React from "react";
import { useNavigate } from "react-router-dom";
import "./JobDesc.css";

const jobData = [
  {
    id: 1,
    title: "IT Support Executive",
    company: "SRB Computers",
    location: "Vasai East, Vasai",
    salary: "₹15000 - ₹20000 monthly",
  },
  {
    id: 2,
    title: "Software Developer",
    company: "TechCorp",
    location: "Bangalore",
    salary: "₹50000 - ₹70000 monthly",
  },
  {
    id: 3,
    title: "Frontend Engineer",
    company: "InnovateHub",
    location: "Hyderabad",
    salary: "₹40000 - ₹60000 monthly",
  },
  // Add more job data here...
];

const JobDesc = () => {
  const navigate = useNavigate();

  const handleApplyClick = (job) => {
    // Pass the job data as a state to the Apply component
    navigate("/apply", { state: { job } });
  };

  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-around" id="desccard">
        {jobData.map((job) => (
          <div
            key={job.id}
            className="col-lg-6 col-sm-8 col-11 p-2 p-lg-3 m-lg-4 my-3 bg-white shadow-box"
            id="wrapper"
          >
            <h5>{job.title}</h5>
            <p>{job.company}</p>
            <i className="bi bi-geo-alt-fill"></i>
            <span>{job.location}</span>
            <br />
            <i className="bi bi-cash-stack"></i>
            <span>{job.salary}</span>
            <br />
            <div className="jobrule">
              <b>Work from Office</b>
              <b>Freshers only</b>
              <b>Full Time</b>
            </div>
            <div className="d-grid gap-2 col-3 p-2 mx-auto">
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() => handleApplyClick(job)}
              >
                Apply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobDesc;

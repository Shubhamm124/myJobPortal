import React from "react";
import { useLocation } from "react-router-dom";
import "./Apply.css";

const Apply = () => {
  const location = useLocation();
  const { job } = location.state || {}; // Retrieve job data passed from JobDesc

  if (!job) {
    return <div>No job data available!</div>;
  }

  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-evenly my-lg-5 my-4">
        <div className="col-sm-8 col-10" id="applypage">
          <h3 className="py-2">{job.title}</h3>
          <i className="bi bi-geo-alt-fill"></i>
          <span>{job.location}</span>
          <br />
          <i className="bi bi-cash-stack"></i>
          <span>{job.salary}</span>
          <br />
          <br />
          <div className="btnbundle">
            <button>Apply for job</button>
            <button>
              <i className="bi bi-share-fill"></i>
              Share
            </button>
          </div>
          <br />
          <br />

          <h5>Job Description</h5>
          <p>
            1. Provide first-level technical support to customers via phone
            calls, effectively resolving issues related to software, hardware,
            and networking.
          </p>
          <p>
            2. Troubleshoot and diagnose technical issues efficiently, guiding
            users through step-by-step solutions.
          </p>
          <p>
            3. Technical support interactions For Turnout App for tracking and
            reporting purposes.
          </p>

          <h5>**Qualifications:**</h5>
          <p>
            - Bachelor of Science in Information Technology (BSc IT) or a
            related field.
          </p>
          <p>
            - Basic understanding of computer systems, operating systems
            (Windows/Linux), and common software applications.
          </p>
          <p>
            - Strong verbal communication skills and a professional demeanor
            while speaking with customers.
          </p>

          <hr />
          <h5>Job Role</h5>
          <div className="row jobrole">
            <div className="col-md-6">
              <i className="bi bi-building"></i>
              <span>Work location</span>
              <p>{job.location}</p>
              <i className="bi bi-person-rolodex"></i>
              <span>Role / Category</span>
              <p>IT Support</p>
              <i className="bi bi-sun-fill"></i>
              <span>Shift</span>
              <p>Night Shift</p>
            </div>
            <div className="col-md-6">
              <i className="bi bi-border-width"></i>
              <span>Department</span>
              <p>IT & Information Security</p>
              <i className="bi bi-clock"></i>
              <span>Employment type</span>
              <p>Full Time</p>
            </div>
          </div>
          <hr />
          <h5>About company</h5>
          <span>Name :</span>
          <br />
          <span>Integrated Personnel Services (IPS)</span>
          <br />
          <br />
          <span>Address :</span>
          <br />
          <span>Wadala, Mumbai, Maharashtra, India</span>
          <hr />
          <p>Job posted by <b>Integrated Personnel Services (IPS)</b></p>
        </div>
      </div>

      <div className="row d-flex justify-content-center my-lg-5 my-4">
      <div className="col-sm-8 col-10">
        <div className="row" id="faqrow">
          <div className="col-lg-6 col-12">
        <h2>FAQ Questions</h2>
          </div>
          <div className="col-lg-6 col-12">
        <h5><a href="">Show All</a></h5>
          </div>
        </div>
      </div>
      </div>

    </div>
  );
};

export default Apply;

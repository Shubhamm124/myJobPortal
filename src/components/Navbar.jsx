import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light navbar-default px-5">
        <div className="container-fluid">
          <img
            id="logoimg"
            className="img-fluid"
            src={props.image}
            alt="Logo"
          />

          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav me-auto ms-auto">
              <li className="nav-item">
                <Link className="nav-link links" to="/">
                  Home&nbsp;
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  style={{
                    fontSize: "1.35rem",
                    color: "black",
                  }}
                >
                  Candidate
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/candidate">
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/login">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/verifydoc">
                      Verify Documents
                    </Link>
                  </li>
                </ul>
              </li>
              <button
                className="nav-link links"
                onClick={() => setShowSidebar(!showSidebar)}
              >
                Employer
              </button>
              <li className="nav-item">
                <Link className="nav-link links" to="/services">
                  Services&nbsp;
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link links" to="/about">
                  AboutUs
                </Link>
              </li>
            </ul>
            <div className="button-container btn-bundle">
              <button className="btn bg-success text-white">
                <Link to="/logged" className="text-white text-decoration-none">
                  Login
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className={`sidebar ${showSidebar ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setShowSidebar(false)}>
          ×
        </button>
        <ul>
          <li>
            <Link to="/employer" onClick={() => setShowSidebar(false)}>
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/employer-hiring" onClick={() => setShowSidebar(false)}>
              Post a Job
            </Link>
          </li>
          <li>
            <Link to="/interview" onClick={() => setShowSidebar(false)}>
              Live Interview (Paid)
            </Link>
          </li>
          <li>
            <Link to="/jobposts" onClick={() => setShowSidebar(false)}>
              My Job Postings
            </Link>
          </li>
          <li>
            <Link to="/view" onClick={() => setShowSidebar(false)}>
              View Applicants
            </Link>
          </li>
          <li>
            <Link to="/remarks" onClick={() => setShowSidebar(false)}>
              Feedback
            </Link>
          </li>
          <li>
            <Link to="/support" onClick={() => setShowSidebar(false)}>
              Support & Help
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

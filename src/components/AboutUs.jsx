import React from "react";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-container">
        <h2 className="about-us-heading">About Us</h2>
        <p className="about-us-text">
          Welcome to <span className="font-semibold">JobFinder</span>, your
          trusted job portal connecting talent with top companies. Our mission
          is to empower job seekers and recruiters by providing a seamless and
          efficient hiring experience.
        </p>
        <div className="about-us-grid">
          <div className="about-us-card">
            <h3>For Job Seekers</h3>
            <p>
              Explore thousands of job listings, create a professional profile,
              and connect with employers who value your skills.
            </p>
          </div>
          <div className="about-us-card">
            <h3>For Employers</h3>
            <p>
              Find the best talent for your company with our advanced search and
              recruitment tools tailored to your hiring needs.
            </p>
          </div>
          <div className="about-us-card">
            <h3>Our Vision</h3>
            <p>
              To revolutionize the job market by fostering meaningful
              connections and making job hunting and hiring effortless.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

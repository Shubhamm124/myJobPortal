import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Emplsignup.css";

const Emplsignup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    jobRole: "",
    experience: "",
    password: "",
    showPassword: false
  });

  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Toggle password visibility
  const togglePassword = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    alert("Signup successful!");
    navigate("/employer-login");
  };

  return (
    <div className="emplsignup-container">
      <h1 className="text-center text-secondary">New Employer? Sign Up Here!</h1>

      <div className="signup-box">
        <h2>Employer Sign-Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              required
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter your phone number"
              required
              pattern="[0-9]{10}"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Enter company name"
              required
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="jobRole">Job Role</label>
            <input
              type="text"
              id="jobRole"
              name="jobRole"
              placeholder="Enter job role"
              required
              value={formData.jobRole}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="experience">Experience (Years)</label>
            <select
              id="experience"
              name="experience"
              required
              value={formData.experience}
              onChange={handleChange}
            >
              <option value="" disabled>Select experience</option>
              <option value="0-1">0-1 Years</option>
              <option value="1-3">1-3 Years</option>
              <option value="3-5">3-5 Years</option>
              <option value="5+">5+ Years</option>
            </select>
          </div>

          <div className="form-group password-container">
            <label htmlFor="password">Password</label>
            <input
              type={formData.showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter password"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <span className="toggle-password" onClick={togglePassword}>
              {formData.showPassword ? "👁️" : "🙈"}
            </span>
          </div>

          <button type="submit" className="btn btn-success">Sign Up</button>
        </form>

        <p className="text-center">
          Already a User? <Link to="/employer-login" className="text-primary">Login Here</Link>
        </p>
      </div>
    </div>
  );
};

export default Emplsignup;

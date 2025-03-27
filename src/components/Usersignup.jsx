import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Usersignup.css";

const Usersignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    dob: "",
    mobile: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Simple Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.mobile
    ) {
      alert("Please fill in all required fields!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (formData.mobile.length !== 10) {
      alert("Mobile number must be 10 digits.");
      return;
    }

    // ✅ Save user to local storage
    localStorage.setItem("user", JSON.stringify(formData));

    alert("Signup Successful! Redirecting to Login...");
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="container-fluid">
      <h1 className="my-4 text-secondary">New User? Sign Up Here!</h1>
      <div className="row d-flex justify-content-center">
        <div className="col-lg-4 col-sm-7 col-10 my-4">
          <div className="form-parent">
            <h2 className="text-center">Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="gender-options">
                <label>Gender:</label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handleChange}
                  />{" "}
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                  />{" "}
                  Female
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="dob">Date of Birth:</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="mobile">Mobile Number:</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  placeholder="Enter your mobile number"
                  pattern="[0-9]{10}"
                  onChange={handleChange}
                  required
                />
              </div>

              <button id="btn1" type="submit" className="btn btn-success">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
      <h5 className="my-4 text-center">
        Already a User?{" "}
        <Link to="/login" className="text-primary">
          Please Login
        </Link>
      </h5>
    </div>
  );
};

export default Usersignup;

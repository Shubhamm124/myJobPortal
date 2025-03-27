import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Empllogin.css";

const Empllogin = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  // Handle login submission
  const handleLogin = (e) => {
    e.preventDefault();
    if (
      loginData.email === "test@company.com" &&
      loginData.password === "123456"
    ) {
      alert("Login Successful!");
      navigate("/employer-hiring");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Employer Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              value={loginData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              value={loginData.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Empllogin;

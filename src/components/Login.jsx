import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Userlogin = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No account found. Please sign up first.");
      return;
    }

    if (
      credentials.email === storedUser.email &&
      credentials.password === storedUser.password
    ) {
      alert("Login Successful!");
      sessionStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid email or password. Try again.");
    }
  };

  return (
    <div id="loginmain">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
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

          <button type="submit" id="loginbtn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Userlogin;

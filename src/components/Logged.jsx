import React, { useState } from "react";
import "./Logged.css";

const Logged = () => {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [step, setStep] = useState(1);

  const sendOtp = () => {
    if (mobile.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    const dummyOtp = Math.floor(1000 + Math.random() * 9000);
    setGeneratedOtp(dummyOtp);
    console.log("OTP Sent (for demo):", dummyOtp);
    setStep(2);
  };

  const verifyOtp = () => {
    if (otp === generatedOtp.toString()) {
      alert("OTP Verified! Login Successful.");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="global">
      <div className="login-container">
      <h2>Login with Mobile</h2>

      {step === 1 && (
        <div className="form-group">
          <label className="text-center">Mobile Number:</label>
          <input
            type="tel"
            maxLength="10"
            placeholder="Enter your mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <button className="btn btn-danger my-3" onClick={sendOtp}>
            Get OTP
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="form-group">
          <label>Enter OTP:</label>
          <input
            type="text"
            maxLength="4"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button className="btn btn-danger my-3" onClick={verifyOtp}>
            Verify OTP
          </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Logged;

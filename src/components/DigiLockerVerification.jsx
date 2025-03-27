import React from "react";

const DigiLockerVerification = () => {
  const handleLogin = () => {
    alert("DigiLocker Integration Coming Soon!"); // For now, just a placeholder
    // Later, replace with OAuth flow or DigiLocker login redirect
  };

  return (
    <div className="container">
      <h2>Verify Your Documents with DigiLocker</h2>
      <p>
        Click the button below to begin document verification using DigiLocker.
      </p>
      <button className="btn btn-primary" onClick={handleLogin}>
        Login with DigiLocker
      </button>
    </div>
  );
};

export default DigiLockerVerification;

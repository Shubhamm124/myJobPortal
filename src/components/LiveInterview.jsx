import React from "react";

const LiveInterview = ({ roomName }) => {
  return (
    <div style={{ height: "600px", width: "95%", margin: "0 auto" }}>
      <iframe
        title="Live Interview"
        src={`https://meet.jit.si/${roomName}`}
        allow="camera; microphone; fullscreen; display-capture"
        style={{ width: "100%", height: "100%", border: "0" }}
      />
    </div>
  );
};

export default LiveInterview;

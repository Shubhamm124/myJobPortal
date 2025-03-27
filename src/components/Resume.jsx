import React, { useRef, useState } from "react";
import html2pdf from "html2pdf.js";
import "./Resume.css";

const Resume = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [degree, setDegree] = useState("");
  const [year, setYear] = useState("");
  const [school, setSchool] = useState("");
  const [hobby, setHobby] = useState("");
  const [project, setProject] = useState("");

  const resumeRef = useRef();

  const handleDownload = () => {
    const element = resumeRef.current;
    const opt = {
      margin: 0,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };
    html2pdf().from(element).set(opt).save();
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Create Your Resume</h2>
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Contact Number</label>
        <input
          type="text"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label>Skills (comma separated)</label>
        <textarea
          placeholder="Enter your skills"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />

        <h3>Education</h3>
        <label>Degree</label>
        <input
          type="text"
          placeholder="Enter Degree"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
        />

        <label>Year of Completion</label>
        <input
          type="text"
          placeholder="Enter Year of Completion"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />

        <label>School/College Name</label>
        <input
          type="text"
          placeholder="Enter School/College Name"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        />

        <label>Work Experience (Company name/Role and desc)</label>
        <textarea
          placeholder="Enter your experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />

        <label>Personal Projects</label>
        <textarea
          placeholder="Mentioned projects & write detail description"
          value={project}
          onChange={(e) => setProject(e.target.value)}
        />

        <label>Hobbies</label>
        <input
          placeholder="Enter your hobbies"
          value={hobby}
          onChange={(e) => setHobby(e.target.value)}
        />

        <button onClick={handleDownload}>Download Resume</button>
      </div>

      <hr />
      <div className="resume-container" ref={resumeRef}>
        <div className="header">
          <h2>{name || "Your Name"}</h2>
          <p>
            <strong>Email:</strong> {email || "your.email@example.com"}
          </p>
          <p>
            <strong>Phone:</strong> {phone || "Phone Number"}
          </p>
        </div>

        <div className="section">
          <h2>Skills</h2>
          <ul>
            {skills
              .split(",")
              .map(
                (skill, index) =>
                  skill.trim() && <li key={index}>{skill.trim()}</li>
              )}
          </ul>
        </div>

        <div className="section">
          <h2>Education</h2>
          <p>
            <strong>Degree:</strong>{" "}
            {degree || "Bachelor of Science in Computer Science"}
          </p>
          <p>
            <strong>Year of Completion:</strong> {year || "2024"}
          </p>
          <p>
            <strong>School/College:</strong> {school || "ABC University"}
          </p>
        </div>

        <br />

        <div className="section">
          <h2>Work Experience</h2>
          <p>{experience || "Frontend Developer at XYZ Company"}</p>
        </div>

        <br />

        <div className="section">
          <h2>Personal Projects</h2>
          <p>{project || "Todo List"}</p>
        </div>
        <br />

        <div className="section">
          <h2>Hobbies</h2>
          <p>{hobby || "Reading"}</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;

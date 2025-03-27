import React from "react";
import "./EmplHiring.css";
const EmplHiring = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row mx-auto d-flex justify-content-around hireone my-4 my-lg-5">
          <div className="col-md-5 col-10 text-md-start text-center">
            <h3>Post your job in minutes!</h3>
            <p className="text-white">
              1) Get calls directly from the candidates.
            </p>
            <p className="text-white">
              2) Get access to the database of over 1.5 Crore candidates.
            </p>
          </div>
          <div className="col-md-5 col-10 text-md-end text-center imgsec">
            <img
              className="hireimg"
              src="https://resources.workindia.in/employer/assets/icon/ic_free_trial_banner_v2_97_46.svg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="row mx-auto d-flex justify-content-around my-lg-5 my-4 text-lg-start">
        <h5 className="text-center">Basic Job Details</h5>
        <div className="col-lg-4 col-sm-7 col-10">
          <form action="">
            <label for="job_title">Job Title:</label>
            <input
              type="text"
              id="job_title"
              name="job_title"
              required
              placeholder="Enter job title"
            />

            <label for="job_location">Job Location:</label>
            <select id="job_location" name="job_location" required>
              <option value="" disabled selected>
                Pick your city
              </option>
              <option value="New York">Mumbai</option>
              <option value="Los Angeles">Pune</option>
              <option value="Chicago">Banglore</option>
              <option value="Houston">Chennai</option>
              <option value="San Francisco">Kolkata</option>
            </select>
            <br />
            <label for="no_of_openings">No Of Openings:</label>
            <input
              type="number"
              id="no_of_openings"
              name="no_of_openings"
              required
              placeholder="Eg. 3"
            />
          </form>
        </div>
      </div>

      <div className="row mx-auto d-flex justify-content-around my-lg-5 my-4 text-lg-start">
        <h5 className="text-center">Candidate Requirement</h5>
        <div className="col-lg-4 col-sm-7 col-10">
          <form action="">
            <label for="experience">Total Experience:</label>
            <select id="experience" name="experience" required>
              <option value="" disabled selected>
                Select experience (years)
              </option>
              <option value="0">0 Years (Fresher)</option>
              <option value="1">1 Year</option>
              <option value="2">2 Years</option>
              <option value="3">3 Years</option>
              <option value="4">4 Years</option>
              <option value="5+">5+ Years</option>
            </select>

            <label for="salary">Monthly In-hand Salary:</label>
            <input
              type="number"
              id="salary"
              name="salary"
              placeholder="Enter salary in INR"
              required
            />

            <label for="job_info">Job Info / Job Description:</label>
            <textarea
              id="job_info"
              name="job_info"
              placeholder="Enter job details here..."
              required
            ></textarea>
            <label>Skills:</label>
            <div class="skills-container">
              <label>
                <input type="checkbox" name="skills" value="JavaScript" />{" "}
                JavaScript
              </label>
              <label>
                <input type="checkbox" name="skills" value="Python" /> Python
              </label>
              <label>
                <input type="checkbox" name="skills" value="Java" /> Java
              </label>
              <label>
                <input type="checkbox" name="skills" value="C++" /> C++
              </label>
              <label>
                <input type="checkbox" name="skills" value="SQL" /> SQL
              </label>
              <label>
                <input type="checkbox" name="skills" value="React" /> React
              </label>
              <label>
                <input type="checkbox" name="skills" value="Node.js" /> Node.js
              </label>
            </div>
          </form>
        </div>
      </div>

      <div className="row mx-auto d-flex justify-content-around my-lg-5 my-4 text-lg-start">
        <h5 className="text-center">About Your Company</h5>
        <div className="col-lg-4 col-sm-7 col-10">
          <form action="">
            <label for="company_name">Company Name:</label>
            <input type="text" id="company_name" name="company_name" required />

            <label for="contact_person">Contact Person Name:</label>
            <input
              type="text"
              id="contact_person"
              name="contact_person"
              required
            />

            <label for="phone_number">Phone Number:</label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              pattern="[0-9]{10}"
              placeholder="Enter 10-digit phone number"
              required
            />

            <label for="email">Email ID:</label>
            <input type="email" id="email" name="email" required />

            <label for="contact_profile">Contact Person Profile:</label>
            <select id="contact_profile" name="contact_profile" required>
              <option value="" disabled selected>
                Select Profile
              </option>
              <option value="HR Manager">HR Manager</option>
              <option value="Recruiter">Recruiter</option>
              <option value="Founder">Owner</option>
              <option value="Other">Other</option>
            </select>

            <label for="organization_size">Size of Organization:</label>
            <select id="organization_size" name="organization_size" required>
              <option value="" disabled selected>
                Select Size
              </option>
              <option value="1-10">1-10 Employees</option>
              <option value="11-50">11-50 Employees</option>
              <option value="51-200">51-200 Employees</option>
              <option value="201-500">201-500 Employees</option>
              <option value="500+">500+ Employees</option>
            </select>

            <label for="office_address">Office Address:</label>
            <textarea
              id="office_address"
              name="office_address"
              placeholder="Shoppers stop, Andheri East"
              required
            ></textarea>
            <button className="button1" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmplHiring;

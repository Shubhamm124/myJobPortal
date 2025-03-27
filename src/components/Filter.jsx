import React from "react";
import "./Filter.css";

const Filter = () => {
  return (
    <div>
      <div class="container-fluid mt-lg-5 mt-4 ">
        <div class="card p-lg-4 mb-5 p-3">
          <h5>Filter Jobs</h5>
          <div class="row">
            <div class="col-md-4 my-lg-2 my-2">
              <input
                type="text"
                id="searchTitle"
                class="form-control"
                placeholder="Search Job By Title"
              />
            </div>

            <div class="col-md-4 my-lg-2 my-2">
              <select id="filterType" class="form-select">
                <option value="">All Job Types</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
              </select>
            </div>

            <div class="col-md-4 my-lg-2 my-2">
              <select id="filterSalary" class="form-select">
                <option value="">All Salaries in ₹</option>
                <option value="20000">Above 20,000 ₹</option>
                <option value="50000">Above 50,000 ₹</option>
                <option value="70000">Above 70,000 ₹</option>
                <option value="100000">Above 100,000 ₹</option>
              </select>
            </div>
          </div>
          <div className="row mt-lg-2 searchbtn">
            <div className="col-12 text-center">
              <button className="py-1 py-lg-2 my-2 my-lg-0">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;

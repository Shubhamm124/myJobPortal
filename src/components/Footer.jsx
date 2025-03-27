import React from "react";
import "./Footer.css";

const Footer = (props) => {
  return (
    <div className="container-fluid">
      <div
        className="row text-center text-lg-start d-flex justify-content-evenly bg-secondary text-white py-4 px-2"
        id="wrap"
      >
        <div className="col-lg-6 col-sm-8 col-10" id="leftsec">
          <img src={props.image} alt="" />
          <h4>Follow us on social media</h4>
          <i className="bi bi-facebook"></i>
          <i className="bi bi-linkedin"></i>
          <i className="bi bi-twitter"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-youtube"></i>
          <hr />
          <div className="row">
            <span>© 2025 JobFinder | All rights reserved</span>
            <span>
              <a href="#">Privacy Policy</a>
            </span>
            <span>
              <a href="#">Terms & Conditions</a>
            </span>
          </div>
        </div>

        <div className="col-lg-5 col-sm-8 col-9 p-lg-4 p-3 d-none d-sm-block">
          <div className="row p-lg-3 p-2" id="rightsec">
            <div className="col-7">
              <h5>Apply on the go</h5>
              <p>Get real time job updates on our App</p>
              <img className="img-fluid" src={props.pic} alt="" />
              <br />
              <h5>
                Rating :<i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
              </h5>
            </div>
            <div className="col-5">
              <img className="img-fluid" src={props.photo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import "./Home.css";
// import { useState } from "react";
import Filter from "./Filter";
import JobDesc from "./JobDesc";
import TawkMessenger from "./TawkMessenger";

const Home = () => {
  return (
    <div>

      <Filter></Filter>


      <JobDesc></JobDesc>
      <JobDesc></JobDesc>

      <TawkMessenger />
    </div>
  );
};

export default Home;

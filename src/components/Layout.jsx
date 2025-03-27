import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import logo from "../assets/find-job-logo.avif";
import googleplay from "../assets/google play.png";
import qr from "../assets/app-qr.png";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar  image={logo}/>
      <main>{children}</main>
      <Footer image={logo} pic={googleplay} photo={qr}/>
    </div>
  );
};

export default Layout;

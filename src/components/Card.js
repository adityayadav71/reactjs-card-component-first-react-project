import React from "react";
import Footer from "./Footer";
import About from "./About";
import Info from "./Info";
import Interests from "./Interests";
import Email from "./Email";
import LinkedIn from "./LinkedIn";

export default function Card() {
  return (
    <div className="card-container">
      <img
        className="profilePic"
        src="../images/profilePic.jpg"
        alt="profile"
      />
      <div className="card">
        <Info />
        <div className="flexbox">
          <Email />
          <LinkedIn />
        </div>
        <About />
        <Interests />
      </div>
      <Footer />
    </div>
  );
}

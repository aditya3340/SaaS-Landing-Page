import React from "react";
import Navbar from "./Navbar";
import tick from "../Assests/tick.png";
import heroImg from "../Assests/heroImg.png";
import comp from "../Assests/comp.png"

const Hero = () => {
  return (
    <div className="hero-el">
      <Navbar />
      <h1 className="hero-text">
        A UI/UX Design Subscription So <span>Good</span> It Should Come With A{" "}
        <span>Warning</span> Label
      </h1>

      {/* hero features */}
      <div className="hero-features-div">
        <p className="hero-features">
          <img src={tick} alt="tick" width={26} />
          No hiring headaches
        </p>
        <p className="hero-features">
          <img src={tick} alt="tick" width={26} />
          Weekly turnaround times
        </p>
        <p className="hero-features">
          <img src={tick} alt="tick" width={26} />
          One flat monthly rate
        </p>
      </div>

      <div style={{ textAlign: "center" }}>
        <button className="hero-btn">START YOUR RISK FREE TRAIL</button>
      </div>

      <center>
        <img src={heroImg} alt="heroImg" className="hero-img" />
      </center>

      {/* companies DIV */}
      <div className="flex companies">
        <h1 className="comp-text">We helped our customers raise <span>$1B+</span></h1>
        <img src= {comp}  alt = "companies" style={{maxWidth : "80%", padding: "40px"}}/>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import stoks from "../Assests/stoks.png";
import circle from '../Assests/circle.png'
import square from "../Assests/square.png"

const Page2 = () => {
  return (
    <div>
      <h1 className="head">
        A Diverse Team Of <span>Passionate</span> UX Nerds Who Are Here To Help
        Your <span>Startup Succeed</span>
      </h1>
      <p className="quote">
        From ideation to expansion, TDP understands the unique demands of your
        startup—providing you with optimized design strategies and fast
        turnarounds for an affordable monthly subscription.
      </p>

      <div className="card-container">
        <div className="card">
          <img src={stoks} alt="stoks" />
          <h4>Costs 70% less</h4>
          <p>
            We developed highly-optimized design processes to let us work fast
            and deliver incredible results—and we pass those savings on to you
          </p>
        </div>
        

        <div className="card">
          <img src={square} alt="stoks" />
          <h4>Adaptable and scalable</h4>
          <p>
            High-velocity is crucial to a startup’s success, and that’s why TDP
            delivers new designs every week so your momentum never falters
          </p>
        </div>
        <div className="card">
          <img src={circle} alt="stoks" />
          <h4>Fast turnaround times</h4>
          <p>
            TDP was built for flexibility—we quickly adapt and grow as you grow
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page2;

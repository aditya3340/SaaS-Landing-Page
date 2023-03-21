import React from "react";
import stoks from "../Assests/stoks.png";
import circle from "../Assests/circle.png";
import square from "../Assests/square.png";
import dudeWithPhone from "../Assests/dudeWithPhone.png";
import capGirl from "../Assests/capGirl.png";
import laptopGirl from "../Assests/laptopGirl.png";

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

      <h1 className="head">
        How <span>Signing Up</span> With The Design Project <span>Works</span>!?
      </h1>
      <p className="quote">
        Take a minute to imagine how you’d feel watching your user count grow,
        and retention rates stay consistently high. When you prioritize
        effective UX, better retention and growth are natural consequences.
        Backed by countless hours of research and testing, TDP blends UX, UI,
        and Product design into a deliciously smooth process that fuels
        productivity and success.
      </p>

      <div className="card-container">
        <div className="card">
          <div className="circle">01</div>
          <p className="signup_tut">Sign up for one of our services</p>
          <img
            src={dudeWithPhone}
            alt="phone boy"
            
          />
          <p>
            Sign up for one of our affordable subscription play which offer a
            variety of options to fit your unique needs.
          </p>
        </div>
        <div className="card">
          <div className="circle">02</div>
          <p className="signup_tut">Meet your perfect match</p>
          <img
            src={laptopGirl}
            alt="phone boy"
            
          />
          <p>
            We match you with the best TDP design expert for your needs. Then we
            schedule a call to learn about your startup.
          </p>
        </div>
        <div className="card">
          <div className="circle">03</div>
          <p className="signup_tut">The first sprint begins (hold on tight)</p>
          <img src={capGirl} alt="phone boy" />
          <p>
            TDP manages the project, learns the intimate details of what your
            users want, and delivers impactful design iterations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page2;

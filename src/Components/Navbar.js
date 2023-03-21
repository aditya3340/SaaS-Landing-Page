import React, { useState } from "react";
import vector from "../Assests/Vector.png";
import Hamburger from "./Hamburger";

const Navbar = () => {
  
  const [flag, setFlag] = useState(false)

  return (
    <div>
      <header>
        <nav className="navbar">
          <a href="/#" className="nav-branding">
            <img src={vector} alt="brand" />
          </a>
          
          <div className="hamburger" onClick={() => setFlag(!flag)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="/#" className="nav-link">
                HOW IT WORKS
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link">
                WORK
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link">
                PRICING
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link">
                BLOG
              </a>
            </li>
            <li className="nav-item">
              <button className="navbar-btn">GET STARTED</button>
            </li>
          </ul> 
        </nav>

        {flag && <Hamburger/>}
        
      </header>
    </div>
  );
};

export default Navbar;

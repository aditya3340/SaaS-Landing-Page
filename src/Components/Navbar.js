import React from "react";
import vector from "../Assests/Vector.png";

const Navbar = () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  function toggle() {
    console.log('toggle')
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active")
    }) )
  }

  return (
    <div>
      <header>
        <nav className="navbar">
          <a href="/#" className="nav-branding">
            <img src={vector} alt="brand" />
          </a>
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
          <div className="hamburger" onClick={toggle}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

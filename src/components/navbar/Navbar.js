import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../App.css";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <div id="branding">
          <Link to="/">
            <h1>
              <span className="highlight">Clarusway </span> Web Design
            </h1>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

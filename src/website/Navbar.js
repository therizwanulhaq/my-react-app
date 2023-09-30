import "./Navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";
import ToggleButton from "./ToggleButton";

function Navbar({ toggleTheme, theme }) {
  return (
    <nav>
      <ul>
        <ToggleButton toggleTheme={toggleTheme} theme={theme} />
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about-us">About Us</NavLink>
        <NavLink to="/contact-us">Contact Us</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/login">Login</NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;

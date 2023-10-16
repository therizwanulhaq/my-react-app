import "./styles/Navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";
import ToggleButton from "./ToggleButton";
import { useAuth } from "./contextAPI/AuthContext";

function Navbar() {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <ul>
        <ToggleButton />
        <NavLink to="/">Home</NavLink>
        {isLoggedIn && <NavLink to="/about-us">About Us</NavLink>}
        <NavLink to="/contact-us">Contact Us</NavLink>
        {isLoggedIn ? (
          <NavLink to="/profile">Profile</NavLink>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;

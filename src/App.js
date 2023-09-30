import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./website/Navbar";
import HomePage from "./website/Homepage";
import AboutUs from "./website/AboutUs";
import ContactUs from "./website/ContactUs";
import Profile from "./website/Profile";
import Login from "./website/Login";
import "./App.css";

const data = {
  heading: "+954323444",
  callTOAction: "Reach us at",
};

function App() {
  const [theme, setTheme] = useState("light"); // Default theme is "light"

  // Function to toggle between light and dark modes
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route
          path="/contact-us"
          element={
            <ContactUs
              heading={data.heading}
              callTOAction={data.callTOAction}
            />
          }
        />
        <Route path="/profile" element={<Profile name="raven" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

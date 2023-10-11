// About.js
import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  //   const navigateToHome = () => {
  //     // Programmatically navigate to the About Us page
  //     navigate("/");
  //   };
  const navigateToContact = () => {
    navigate("/contact");
  };
  return (
    <div>
      <h2>About Us</h2>
      <button onDoubleClick={navigateToContact}>Go to Homepage</button>
    </div>
  );
}

export default About;

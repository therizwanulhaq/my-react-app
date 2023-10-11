// Home.js
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const navigateToAbout = () => {
    // Programmatically navigate to the About Us page
    navigate("/about");
  };

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={navigateToAbout}>Go to About Us</button>
    </div>
  );
}

export default Home;

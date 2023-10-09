// ToggleButton.js

import React, { useState } from "react";

import styles from "./component.module.css";

const ToggleButton = () => {
  const [theme, setTheme] = useState("light"); // Default theme is "light"

  // Function to toggle between light and dark modes
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Determine the text for the button based on the theme
  const buttonText = theme === "light" ? "Dark Mode" : "Light Mode";

  return (
    <>
      <button className={styles.toggleButton} onClick={toggleTheme}>
        {buttonText}
      </button>
      <style>
        {`
          body {
            background-color: ${theme === "light" ? "white" : "#1C1B22"};
            color: ${theme === "light" ? "black" : "white"};
          }
          nav ul a.active {
            color: ${theme === "light" ? "#6266ec" : "#00DDFF"};
            }
        `}
      </style>
    </>
  );
};

export default ToggleButton;

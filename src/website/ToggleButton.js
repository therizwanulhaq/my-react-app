// ToggleButton.js

import React from "react";

const ToggleButton = ({ toggleTheme, theme }) => {
  // Determine the text for the button based on the theme
  const buttonText = theme === "light" ? "Dark Mode" : "Light Mode";

  return (
    <>
      <button onClick={toggleTheme}>{buttonText}</button>
      <style>
        {`
          body {
            background-color: ${theme === "light" ? "white" : "black"};
            color: ${theme === "light" ? "black" : "white"};
          }
        `}
      </style>
    </>
  );
};

export default ToggleButton;

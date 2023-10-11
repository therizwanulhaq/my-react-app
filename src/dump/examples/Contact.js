import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <div>
      <h3> Contact us!</h3>
      <button onClick={navigateToHome}>Home</button>
    </div>
  );
}
export default Contact;

// Profile.js
import React from "react";
import { useMyContext } from "./contextAPI/Context";

function Profile() {
  // Use the custom hook to access the shared data
  const products = useMyContext();
  return (
    <div>
      {products.map((product) => (
        <li>{product.title}</li>
      ))}
    </div>
  );
}

export default Profile;

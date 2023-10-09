import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./Homepage";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Profile from "./Profile";
import Login from "./Login";

const data = {
  heading: "+954323444",
  callTOAction: "Reach us at",
};

const Urls = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API only if it's not already cached
    if (products.length === 0) {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error("Error:", error));
    }
  }, [products]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage products={products} />} />
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
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Urls;

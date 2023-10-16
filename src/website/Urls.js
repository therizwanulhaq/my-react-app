// Urls.js
import { Route, Routes } from "react-router-dom";

import HomePage from "./Homepage";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Profile from "./Profile";
import Login from "./Login";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";

import { MyProvider } from "./contextAPI/Context";

import { useAuth } from "./contextAPI/AuthContext";

const data = {
  heading: "Reach us at",
  subHeading: "+954323444",
};

const Urls = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <MyProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {isLoggedIn && <Route path="/about-us" element={<AboutUs />} />}
          <Route path="/contact-us" element={<ContactUs data={data} />} />
          {isLoggedIn ? (
            // Render Profile component when the user is logged in
            <Route path="/profile" element={<Profile />} />
          ) : (
            // Render Login component when the user is not logged in
            <Route path="/login" element={<Login />} />
          )}
          <Route path="/products" element={<ProductList />} />
          <Route path="products/:id" element={<ProductDetails />} />
        </Routes>
      </MyProvider>
    </div>
  );
};

export default Urls;

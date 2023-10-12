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
  heading: "+954323444",
  callTOAction: "Reach us at",
};

const Urls = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <MyProvider>
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

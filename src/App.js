import React from "react";

import Navbar from "./website/Navbar";
import Footer from "./website/Footer";

import "./App.css";
import Urls from "./website/Urls";

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <Urls />
      </div>
      <Footer />
    </div>
  );
}

export default App;

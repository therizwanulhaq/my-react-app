// Home.js
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/dashboard">Go to Dashboard</Link>
      <br></br>
      <Link to="/admin-dashboard">Go to Admin Dashboard</Link>
    </div>
  );
}

export default Home;

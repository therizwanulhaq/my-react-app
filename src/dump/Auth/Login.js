// Login.js
import React from "react";
import { login, logout } from "./authService";

function Login() {
  const handleLogin = () => {
    // console.log("Login button clicked");
    login();
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Login;

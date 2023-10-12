import React, { useState } from "react";
import { useAuth } from "./contextAPI/AuthContext";
import { useNavigate } from "react-router-dom";

import styles from "./styles/Login.module.css";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [username, setUsername] = useState("");

  const handleLogin = (e) => {
    if (username.trim() !== "") {
      e.preventDefault();
      login(username);
      // Redirect to the profile page
      navigate("/profile");
    } else {
      alert("Please enter a username.");
    }
  };

  return (
    <div className={styles.center}>
      <form className={styles.form} onSubmit={handleLogin}>
        <h4 className={styles.h4}>Login</h4>
        <input
          className={styles.input}
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className={styles.input}
          type="password"
          placeholder="password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import { useAuth } from "./contextAPI/AuthContext";
import { useNavigate } from "react-router-dom";

import styles from "./styles/Login.module.css";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Reset previous error messages
    setUsernameError("");
    setPasswordError("");

    if (username.trim() === "") {
      setUsernameError("Please enter a username.");
    } else if (password === "xd3") {
      login(username);
      // Redirect to the profile page
      navigate("/profile");
    } else {
      setPasswordError("Incorrect password. Please try again.");
    }
  };

  return (
    <div className={styles.center}>
      <form className={styles.form} onSubmit={handleLogin}>
        <h4 className={styles.h4}>Login</h4>
        <div className={styles.inputAndError}>
          <input
            className={styles.input}
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p className={styles.error}>{usernameError}</p>
        </div>
        <div className={styles.inputAndError}>
          <input
            className={styles.input}
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className={styles.error}>{passwordError}</p>
        </div>
        <button className={styles.button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (user) => {
    setIsLoggedIn(true);
    setUsername(user);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername("");
    // Redirect to the login page
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ username, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };

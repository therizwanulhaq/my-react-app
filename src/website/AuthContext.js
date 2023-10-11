import React, { createContext, useState } from "react";

// Step 1: Create a context
const AuthContext = createContext();

// Step 2: Create a provider component
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Function to simulate login
  const login = (username, password) => {
    // In a real app, you would validate the username and password here
    // For simplicity, let's assume any non-empty input is a successful login
    if (username && password) {
      setUser({ username });
    }
  };

  // Function to simulate logout
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };

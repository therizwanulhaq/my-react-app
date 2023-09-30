// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./UserList";
import UserProfile from "./UserProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;

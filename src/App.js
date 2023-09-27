// App.js

import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Parent from "./components/Parent";

function App() {
  return (
    <Router>
      <div>
        <h1>Nested Routes Example</h1>
        {/* Define the parent route */}
        <Routes>
          <Route path="/parent/*" element={<Parent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

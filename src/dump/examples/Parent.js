// Parent.js

import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Child1 from "./Child1";
import Child2 from "./Child2";

function Parent() {
  return (
    <div>
      <h2>Parent Component</h2>
      <nav>
        <ul>
          <li>
            <Link to="child1">Child 1</Link>
          </li>
          <li>
            <Link to="child2">Child 2</Link>
          </li>
        </ul>
      </nav>

      {/* Define nested child routes */}
      <Routes>
        <Route path="child1" element={<Child1 />} />
        <Route path="child2" element={<Child2 />} />
      </Routes>
    </div>
  );
}

export default Parent;

// UserList.js
import React from "react";
import { Link } from "react-router-dom";

const users = [
  { id: "1", name: "Alice" },
  { id: "2", name: "Bob" },
  { id: "3", name: "rave" },
  { id: "4", name: "kok" },
  { id: "5", name: "Quack" },
  // Add more users as needed
];

function UserList() {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.name}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;

// UserProfile.js
import React from "react";
import { useParams, Link } from "react-router-dom";

function UserProfile() {
  const { name } = useParams();

  // In a real application, you might fetch user data from an API or database
  // For this example, we'll use static data
  const users = [
    { id: "1", name: "Alice", bio: "A software engineer" },
    { id: "2", name: "Bob", bio: "A designer" },
    { id: "3", name: "rave", bio: "A dev" },
    { id: "4", name: "kok", bio: "A cock" },
    { id: "5", name: "Quack", bio: "A duck" },
    // Add more user data as needed
  ];

  const user = users.find((user) => user.name === name);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Bio: {user.bio}</p>
      <Link to="/users">Back to user list</Link>
    </div>
  );
}

export default UserProfile;

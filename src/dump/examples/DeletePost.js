// DeletePost.js

import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function DeletePost({ posts, setPosts }) {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);
  const navigate = useNavigate();

  const handleDelete = () => {
    const updatedPosts = posts.filter((p) => p.id !== id);
    setPosts(updatedPosts);
    navigate("/blog");
  };

  return (
    <div>
      <h2>Delete Post</h2>
      <p>Are you sure you want to delete the post: "{post.title}"?</p>
      <button onClick={handleDelete}>Delete</button>
      <Link to={`/blog/${id}`}>Cancel</Link>
    </div>
  );
}

export default DeletePost;

// EditPost.js

import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function EditPost({ posts, setPosts }) {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const navigate = useNavigate();

  useEffect(() => {
    setTitle(post.title);
    setContent(post.content);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPosts = posts.map((p) =>
      p.id === id ? { ...p, title, content } : p
    );
    setPosts(updatedPosts);
    navigate(`/blog/${id}`);
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">Save Changes</button>
        <Link to={`/blog/${id}`}>Cancel</Link>
      </form>
    </div>
  );
}

export default EditPost;

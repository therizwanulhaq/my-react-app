import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CreatePost({ posts, setPosts }) {
  const [formData, setFormData] = useState({ title: "", content: "" });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form data (e.g., check if title and content are not empty)
    if (!formData.title.trim() || !formData.content.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    // Create a new post object with a unique ID
    const newPost = {
      id: String(Date.now()),
      title: formData.title,
      content: formData.content,
    };

    // Update the posts state with the new post
    setPosts([...posts, newPost]);

    // Navigate back to the blog post list
    navigate("/blog");
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
          />
        </div>
        <div>
          <button type="submit">Create Post</button>
        </div>
      </form>
      <Link to="/blog">Back to Blog</Link>
    </div>
  );
}

export default CreatePost;

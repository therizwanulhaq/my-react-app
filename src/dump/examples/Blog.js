import React from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import SinglePost from "./SinglePost";
import CreatePost from "./CreatePost";
import EditPost from "./EditPost";
import DeletePost from "./DeletePost";

function Blog({ posts, setPosts }) {
  return (
    <div>
      <h2>Blog Posts</h2>
      <nav>
        <ul>
          <li>
            <Link to="/blog/create">Create Post</Link>
          </li>
        </ul>
      </nav>

      {/* Outlet for nested routes */}
      <Outlet />

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>

      {/* Define nested routes for individual posts */}
      <Routes>
        <Route path="/:id" element={<SinglePost />} />
        <Route
          path="create"
          element={<CreatePost posts={posts} setPosts={setPosts} />}
        />
        <Route
          path=":id/edit"
          element={<EditPost posts={posts} setPosts={setPosts} />}
        />
        <Route
          path=":id/delete"
          element={<DeletePost posts={posts} setPosts={setPosts} />}
        />
      </Routes>
    </div>
  );
}

export default Blog;

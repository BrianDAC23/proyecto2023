import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PostList from "./PostList.jsx";
import PostForm from "./PostForm.jsx";
import "../../CSS/styles.css";

function PostH() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  function handleSubmit(post) {
    const newPost = {
      id: Date.now(),
      title: post.title,
      content: post.content,
      timestamp: new Date().toISOString() // Cambia a ISOString para ordenar correctamente
    };
    setPosts([...posts, newPost]);
  }

  function handleEdit(id) {
    const postToEdit = posts.find((post) => post.id === id);
    setEditingPost(postToEdit);
  }

  function handleUpdate(post) {
    const updatedPost = {
      id: editingPost.id,
      title: post.title,
      content: post.content,
      timestamp: new Date().toISOString() // Cambia a ISOString para ordenar correctamente
    };
    const updatedPosts = posts.map((post) =>
      post.id === editingPost.id ? updatedPost : post
    );
    setPosts(updatedPosts);
    setEditingPost(null);
  }

  function handleDelete(id) {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  }

  return (
    
    <div className="cont-principal">
      <h2>Crear una nueva publicación</h2>
      {editingPost ? (
        <PostForm post={editingPost} onSubmit={handleUpdate} />
      ) : (
        <PostForm onSubmit={handleSubmit} />
      )}
      <h2>Servicios</h2>
      <PostList posts={posts} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
    
  );
}

export default PostH;

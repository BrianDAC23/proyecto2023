import React, { useEffect, useState } from "react";
import { collection, onSnapshot, deleteDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import "../../CSS/styles.css";

function PostList({ onEdit }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "posts"), (snapshot) => {
      const newPosts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setPosts(newPosts);
    });

    return () => unsubscribe();
  }, []);

  async function deletePostFromFirestore(postId) {
    try {
      const postRef = doc(db, "posts", postId);
      await deleteDoc(postRef);
      console.log("Post deleted: ", postId);
    } catch (error) {
      console.error("Error deleting post: ", error);
    }
  }
  

  async function updatePostInFirestore(postId, updatedData) {
    try {
      await updateDoc(collection(db, "posts", postId), updatedData);
      console.log("Post updated: ", postId);
    } catch (error) {
      console.error("Error updating post: ", error);
    }
  }

  function handleDelete(postId) {
    deletePostFromFirestore(postId);
  }

  function handleUpdate(postId, updatedData) {
    updatePostInFirestore(postId, updatedData);
  }

  return (
    <div className="post-list">
      <div className="card"></div>
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <div className="title-cont">
            <h2>{post.title}</h2>
          </div>
          <p>{post.content}</p>
          <div className="justify-content-end">
            <button className="btnAction" onClick={() => onEdit(post.id)}>
              Editar
            </button>
            <button className="btnAction" onClick={() => handleDelete(post.id)}>
              Borrar
            </button>
            <button className="btnAction">Comentar</button>
          </div>
          <span className="post-date">
            Fecha de publicación: {new Date(post.timestamp).toLocaleString('es-ES')}
          </span>
        </div>
      ))}
    </div>
  );
}

export default PostList;

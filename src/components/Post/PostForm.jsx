import React, { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import "../../CSS/styles.css";

function PostForm({ onSubmit, post }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
      if (post.hasOwnProperty("location")) {
        setLocation(post.location);
      }
    }
  }, [post]);

  function handleSubmit(event) {
    event.preventDefault();
    const postObject = { title, content, location };
    savePostToFirestore(postObject);
    onSubmit(postObject);
    setTitle("");
    setContent("");
    setLocation({ lat: 0, lng: 0 });
  }

  async function savePostToFirestore(postObject) {
    try {
      const docRef = await addDoc(collection(db, "posts"), postObject);
      console.log("Post saved with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding post: ", error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Agregue un título a su publicación:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <br />
      <label>
        Agregue una descripción a su publicación:
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Publicar</button>
    </form>
  );
}

export default PostForm;

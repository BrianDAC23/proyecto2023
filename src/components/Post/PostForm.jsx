import React, { useState, useEffect } from "react";
import "../../CSS/styles.css";

function PostForm({ onSubmit, post }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
      setLocation(post.location);
    }
  }, [post]);

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ title, content, location });
    setTitle("");
    setContent("");
    setLocation({ lat: 0, lng: 0 });
  }

 

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Agregue un titulo a su publicación:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Agregue una descripción a su publicacion:
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      </label>
      <br />
      <button type="submit">Publicar</button>
    </form>
  );
}

export default PostForm;








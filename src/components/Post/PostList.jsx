import React from "react";
import "../../CSS/styles.css";



  function PostList({ posts, onEdit, onDelete }) {
    return (
      <div className="post-list">
        <div className="card"></div>
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <div className="title-cont"><h2>{post.title}</h2></div>
            <p>{post.content}</p>
            <div className="justify-content-end">
              <button className="btnAction" onClick={() => onEdit(post.id)}>Editar</button>
              <button className="btnAction" onClick={() => onDelete(post.id)}>Borrar</button>
              <button className="btnAction">Comentar</button>
            </div>
            <span className="post-date">
              Fecha de publicación: {new Date(post.timestamp).toLocaleString()}
            </span>
          </div>
         
        ))}
      </div>
    );
  }
  

export default PostList;

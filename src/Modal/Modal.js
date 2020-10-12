import React from "react";

import "./Modal.css";

function Modal(props) {
  return (
    <div className="modal">
      <span className="modal-close" onClick={props.modalHandler}>
        X
      </span>
      <div className="modal-image">
        <img
          src={props.selected.thumbnail.path + "/landscape_incredible.jpg"}
          alt={props.selected.id}
        />
      </div>
      <div className="modal-content">
        <h2>{props.selected.name}</h2>
        <p>{props.selected.description || "No description"}</p>
        {props.selected.urls.map((a) => (
          <a
            href={a.url}
            target="_blank"
            rel="noopener noreferrer"
            key={props.id}
          >
            {a.type}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Modal;

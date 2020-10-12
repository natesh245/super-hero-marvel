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
    </div>
  );
}

export default Modal;

import React from "react";

import "./Modal.css";

function Modal(props) {
  return (
    <div className="modal">
      <span className="modal-close" onClick={props.modalHandler}>
        X
      </span>
    </div>
  );
}

export default Modal;

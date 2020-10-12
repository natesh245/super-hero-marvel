import React from "react";
import "./CharacterCard.css";
function CharacterCard(props) {
  return (
    <div className="char-card" onClick={props.clickHandler}>
      <div className="char-card-image">
        <img src={props.thumbnail} alt="" />
      </div>
      <h3>{props.name}</h3>
    </div>
  );
}

export default CharacterCard;

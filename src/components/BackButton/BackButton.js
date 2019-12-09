import React from "react";
import "./BackButton.css";

const BackButton = props => (
  <div className="stickToBottom">
    <button type="button" className="button-back" onClick={props.onClick}>
      <p className="button-back-text"> &lt; </p>
    </button>
  </div>
);

export default BackButton;

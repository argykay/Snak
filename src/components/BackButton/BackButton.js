import React from "react";
import "./BackButton.css";

const BackButton = props => (
  <button type="button" className="button-back" onClick={props.onClick}>
    <p className="button-back-text"> &lt; </p>
  </button>
);

export default BackButton;

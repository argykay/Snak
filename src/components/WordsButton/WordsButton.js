import React, { Component } from "react";
import "./WordsButton.css";

const WordsButton = props => (
  <button type="button" className="pencil-wrapper" onClick={props.onClick}>
    <div className="pencil">&#x270F; </div>
  </button>
);
export default WordsButton;

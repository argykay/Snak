import React from "react";
import "./BackButton.css";


/**
 * It waits for an onclick within the other screen-components. 
 * The specific screen-component will handle the click, which will have a 
 * conditional rendering deciding which screen it should go back to. 
 */
const BackButton = props => (
  <div className="stickToBottom">
    <button type="button" className="button-back" onClick={props.onClick}>
      <p className="button-back-text"> &lt; </p>
    </button>
  </div>
);

export default BackButton;

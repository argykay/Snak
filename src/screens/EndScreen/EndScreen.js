import React, { Component } from "react";
import "./EndScreen.css";

class EndScreen extends Component {
  render() {
    return (
      <div>
        <div className="background">
          <div className="mobile-container">
            <div className="screen-title">Good job!</div>
            <div className="normal-text">
              You’ve earned a star. The danes are proud of you!
            </div>
            <div className="normal-text">Total Stars:</div>
            <button className="main-button">continue</button>
          </div>
        </div>
      </div>
    );
  }
}

export default EndScreen;

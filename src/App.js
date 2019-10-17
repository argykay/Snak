import React, { Component } from "react";
import "./App.css";
import "./DailyHint.js/index.js";

class App extends Component {
  render() {
    return (
      <div className="background">
        <div className="mobile-container">
          <div className="DailyHint"></div>
        </div>
      </div>
    );
  }
}

export default App;

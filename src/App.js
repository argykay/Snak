import React, { Component } from "react";
import "./App.css";
import DailyHint from "./DailyHint.js";

class App extends Component {
  render() {
    return (
      <div className="background">
        <div className="mobile-container">
          <DailyHint />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./HintScreen.css";

import dataArray from "../../data/dataArray";

class HintScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: dataArray,
      hint: null
    };
  }

  getHint() {
    if (this.state.hint === null) {
      return <img width="200" src={dataArray[0].svg}></img>;
    }
  }

  getWordDanish() {
    return <div>{this.state.dataArray[0].wordDanish} </div>;
  }

  render() {
    return (
      <div className="background">
        <div className="mobile-container">
          <div className="page-title">Daily Hint</div>
          <div className="dh-image-bg">
            <div className="dh-image"></div>
            <div>{this.getHint()}</div>
            <div className="daily-word">{this.getWordDanish()}</div>
          </div>
          <button className="main-button">start</button>
        </div>
      </div>
    );
  }
}

export default HintScreen;

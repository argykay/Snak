import React, { Component } from "react";
import "./HintScreen.css";

import dataArray from "../../data/dataArray";
import GameScreen from "../GameScreen/GameScreen";

class HintScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: dataArray,
      hint: 0,
      startGame: false
    };
  }

  getHint() {
    return <img width="200" src={dataArray[this.state.hint].svg}></img>;
  }

  getWordDanish() {
    return <div>{this.state.dataArray[this.state.hint].wordDanish} </div>;
  }

  setHint() {
    if (this.state.hint < this.state.dataArray.length) {
      this.setState({ hint: this.state.hint + 1 });
    } else {
      return <div>Congratulations! You completed Level 1</div>;
    }
  }

  setIsUsed() {
    this.state.dataArray[this.state.hint].isUsed = true;
  }

  handleStartGameClick = () => {
    this.setState({ startGame: true });
    this.setHint();
    this.setIsUsed();
  };

  render() {
    if (this.state.startGame === true) {
      return <GameScreen hint={this.state.hint - 1} />;
    }
    return (
      <div className="background">
        <div className="mobile-container">
          <div className="page-title">Daily Hint</div>
          <div className="dh-image-bg">
            <div className="dh-image"></div>
            <div>{this.getHint()}</div>
            <div className="daily-word">{this.getWordDanish()}</div>
          </div>
          <button className="main-button" onClick={this.handleStartGameClick}>
            start
          </button>
        </div>
      </div>
    );
  }
}

export default HintScreen;

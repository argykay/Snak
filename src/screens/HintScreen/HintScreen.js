import React, { Component } from "react";
import "./HintScreen.css";

import dataArray from "../../data/dataArray";
import GameScreen from "../GameScreen/GameScreen";

class HintScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: dataArray,
      hint: null,
      startGame: false
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

  setHint() {
    if (this.state.hint === null) {
      this.setState({ hint: 0 });
    }
    if (
      this.state.hint !== null &&
      this.state.hint < this.state.dataArray.length
    ) {
      this.setState({ hint: this.state.hint + 1 });
    } else {
      return <div>Congratulations! You completed Level 1</div>;
    }
  }

  handleStartGameClick = () => {
    this.setHint();
    this.setState({ startGame: true });
  };

  render() {
    if (this.state.startGame === true) {
      return <GameScreen hint={this.state.hint} />;
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

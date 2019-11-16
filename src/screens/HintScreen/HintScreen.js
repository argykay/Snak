import React, { Component } from "react";
import "../../styling/generic.css";
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

  getHintImg() {
    return <img width="200" src={dataArray[this.state.hint].svg}></img>;
  }

  getWordDanish() {
    return <div>{this.state.dataArray[this.state.hint].wordDanish} </div>;
  }

  handleStartGameClick = () => {
    this.setState({ startGame: true });
  };

  hasReceivedNext() {
    if (this.state.nextHint !== null) {
      return true;
    } else return false;
  }

  render() {
    if (this.state.startGame === true) {
      return <GameScreen hint={this.state.hint} />;
    }
    return (
      <div className="background">
        <div className="mobile-container">
          <div className="dh-p">
            <p className="normal-text">Daily Hint</p>
          </div>
          <div className="dh-image-bg">
            <div className="dh-image">
              <div>{this.getHintImg()}</div>
              <h1 className="screen-title">{this.getWordDanish()}</h1>
            </div>
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

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

  render() {
    if (this.state.startGame === true) {
      return <GameScreen hint={this.props.hint ? this.props.hint : 0} />;
    }
    return (
      <div className="background">
        <div className="mobile-container">
          <div className="dh-p">
            <p className="normal-text">Daily Hint</p>
          </div>
          <div className="dh-image-bg">

            <div className="dh-image"></div>
            <div>
              {this.props.hint ? (
                <img width="200" src={dataArray[this.props.hint].svg}></img>
              ) : (
                <img width="200" src={dataArray[0].svg}></img>
              )}
            </div>
            <h1 className="screen-title">
              {this.props.hint ? (
                <div>{this.state.dataArray[this.props.hint].wordDanish} </div>
              ) : (
                <div>{this.state.dataArray[0].wordDanish} </div>
              )}
            </h1>

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

import React, { Component } from "react";

import dataArray from "../../data/dataArray";
import GameScreen from "../GameScreen/GameScreen";
import Star from "../../components/Star/Star";
import Sound from "../../components/Sound/Sound";
import "../../styling/generic.css";
import "./HintScreen.css";


class HintScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: dataArray,
      startGame: false
    };
  }

  handleStartGameClick = () => {
    this.setState({ startGame: true });
  };

  play = () => {
    {
      this.props.hint
        ? this.state.dataArray[this.props.hint].pronounciation.play()
        : this.state.dataArray[0].pronounciation.play();
    }
  };

  render() {
    if (this.state.startGame === true) {
      return <GameScreen hint={this.props.hint ? this.props.hint : 0} />;
    }
    if (this.props.hint === 13) {
      return (
        <div>
          <p>Level 1 Completed</p>
        </div>
      );
    }
    return (
      <div className="background">
        <div className="mobile-container">
          <div>
            <Star />
          </div>
            <p className="normal-text">Daily Hint</p>
          <div className="dh-image-container">
              {this.props.hint ? (
                <img className="dh-image"  src={dataArray[this.props.hint].svg}></img>
              ) : (
                <img className="dh-image"  src={dataArray[0].svg}></img>
              )}
          </div>
          <div className="wrapper">
            <div className="wrapper-word">
              <h1 className="screen-title">
                {this.props.hint ? (
                  <div>{this.state.dataArray[this.props.hint].wordDanish} </div>
                ) : (
                  <div>{this.state.dataArray[0].wordDanish} </div>
                )}
              </h1>
            </div>
            <Sound hint={this.props.hint} />
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

import React, { Component } from "react";
import dataArray from "../../data/dataArray";
import GameScreen from "../GameScreen/GameScreen";
import EndOfLevelScreen from "../EndOfLevelScreen/EndOfLevelScreen";
import Star from "../../components/Star/Star";
import WordsButton from "../../components/WordsButton/WordsButton";
import Sound from "../../components/Sound/Sound";
import "../../styling/generic.css";
import "./HintScreen.css";
import ListScreen from "../ListScreen/ListScreen";


class HintScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: dataArray,
      startGame: false,
      startList: false
    };
  }

  handleStartGameClick = () => {
    this.setState({ startGame: true });
  };

  handleListClick = () => {
    this.setState({ startList: true });
  };

  render() {
    if (this.state.startGame === true) {
      return (
        <GameScreen
          hint={this.props.hint ? this.props.hint : 0}
          trial={this.props.trial}
        />
      );
    }

    if (this.state.startList === true) {
      return <ListScreen hint={this.props.hint} />;
    }
    if (this.props.hint === 13) {
      return <EndOfLevelScreen />;
    }
    return (
      <div className="background">
        <div className="mobile-container">
          <div>
            <WordsButton onClick={this.handleListClick} />
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

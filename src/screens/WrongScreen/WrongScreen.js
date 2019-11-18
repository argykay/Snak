import React, { Component } from "react";
import "../../styling/generic.css";
import "./WrongScreen.css";
import "../HintScreen/HintScreen.css";
import GameScreen from "../GameScreen/GameScreen";
import Star from "../../components/Star/Star";

class WrongScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BackToHint: false,
      hint: this.props.hint
    };
  }

  handleBackToHintClick = () => {
    this.setState({ BackToHint: true });
  };

  render() {
    if (this.state.BackToHint === true) {
      return <GameScreen hint={this.state.hint} />;
    }
    return (
      <div>
        <div className="background">
          <div className="mobile-container">
            <Star />
            <div className="center-content">
              <div className="space">
                <h1 className="screen-title">Opps, wrong answer.</h1>
              </div>
              <div className="space">
                <p className="normal-text">
                  Hmm...Give it another go to earn a star!
                </p>
              </div>
              <div className="space">
                <button
                  className="main-button"
                  onClick={this.handleBackToHintClick}
                >
                  try again
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WrongScreen;

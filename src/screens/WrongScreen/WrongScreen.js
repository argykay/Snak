import React, { Component } from "react";
import "./WrongScreen.css";
import "../HintScreen/HintScreen.css";
import HintScreen from "../HintScreen/HintScreen";
import GameScreen from "../GameScreen/GameScreen";

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
            <div className="center-content">
              <div className="screen-title">Opps, wrong answer.</div>
              <div className="normal-text">
                Hmm...Give it another go to earn a star!
              </div>
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
    );
  }
}

export default WrongScreen;

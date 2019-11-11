import React, { Component } from "react";
import "./WrongScreen.css";
import HintScreen from "../HintScreen/HintScreen";

class WrongScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BackToHint: false
    };
  }

  handleBackToHintClick = () => {
    this.setState({ BackToHint: true });
  };

  render() {
    if (this.state.BackToHint === true) {
      return <HintScreen />;
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

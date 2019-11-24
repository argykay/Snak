import React, { Component } from "react";

import EndScreen from "../EndScreen/EndScreen";
import Star from "../../components/Star/Star";
import getStars from "../../utils/getStars";
import "../../styling/generic.css";
import "./CorrectScreen.css";
import TrialScreen from "../TrialScreen/TrialScreen";

class CorrectScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endGame: false,
      hint: this.props.hint
    };
  }

  handleEnd = () => {
    this.setState({ endGame: true });
  };

  render() {
    if (this.state.endGame === true) {
      return <EndScreen hint={this.state.hint} />;
    }
    if (this.props.trial === true) {
      return <TrialScreen />;
    }
    return (
      <div>
        <div className="background">
          <div className="mobile-container">
            <Star />
            <h1 className="screen-title">Good job!</h1>
            <p className="normal-text">
              You’ve earned a star. The danes are proud of you!
            </p>
            <p className="normal-text">Total Stars: {getStars()}</p>
            <div>
              <img className="star-image star" src="./../images/star.svg" />
            </div>
            <button className="main-button" onClick={this.handleEnd}>
              continue
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CorrectScreen;

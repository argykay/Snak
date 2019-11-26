import React, { Component } from "react";

import StartScreen from "../StartScreen";
import BackButton from "../../components/BackButton/BackButton";
import Star from "../../components/Star/Star";
import "../../styling/generic.css";
import "./EndOfLevelScreen.css";

class EndOfLevelScreen extends Component {
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
      return <StartScreen />;
    }
    return (
      <div>
        <div className="background">
          <div className="mobile-container">
            <Star />
            <h1 className="screen-title">Congrats</h1>
            <p className="normal-text">you completed Level 1!</p>
            <div className="wheel">
              <img src="./../images/cog.svg" />
            </div>
            <p className="normal-text">More levels are in development.</p>
            <p className="normal-text">Stay tuned!</p>
            <BackButton onClick={this.handleBackToHintClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default EndOfLevelScreen;

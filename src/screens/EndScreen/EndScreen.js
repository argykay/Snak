import React, { Component } from "react";

import HintScreen from "../HintScreen/HintScreen";
import ListScreen from "../ListScreen/ListScreen";
import BackButton from "../../components/BackButton/BackButton";
import WordsButton from "../../components/WordsButton/WordsButton";
import Star from "../../components/Star/Star";
import "../../styling/generic.css";
import "./EndScreen.css";

class EndScreen extends Component {
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

  handleListClick = () => {
    this.setState({ startList: true });
  };

  render() {
    if (this.state.BackToHint === true) {
      return <HintScreen hint={this.state.hint + 1} />;
    }

    if (this.state.startList === true) {
      return <ListScreen hint={this.state.hint + 1} />;
    }

    return (
      <div>
        <div className="background">
          <div className="mobile-container">
            <div>
              <WordsButton onClick={this.handleListClick} />
              <Star />
            </div>

            <h1 className="screen-title">“Godt gået!”</h1>
            <p className="normal-text">as the Danes would say it.</p>
            <div className="ES-image">
              <img className="overlay" src="./../images/endGame.png" />
            </div>
            <p className="normal-text">
              Your daily lesson is completed. See you again tomorrow.
            </p>
            <p className="normal-text">Ses! (See you)</p>
            <BackButton onClick={this.handleBackToHintClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default EndScreen;

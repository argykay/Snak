import React, { Component } from "react";
import "./EndScreen.css";
import HintScreen from "../HintScreen/HintScreen";
import BackButton from "../../components/BackButton/BackButton";

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

  render() {
    if (this.state.BackToHint === true) {
      return <HintScreen />;
    }
    return (
      <div>
        <div className="background">
          <div className="mobile-container">
            <div className="screen-title">“Godt gået!”</div>
            <div className="normal-text">as the Danes would say it.</div>
            <div className="dh-image">
              <img className="overlay" src="./../images/endGame.png" />
            </div>
            <div className="normal-text">
              Your daily lesson is completed. See you again tomorrow.
            </div>
            <div className="normal-text">Ses! (See you)</div>
            <BackButton onClick={this.handleBackToHintClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default EndScreen;

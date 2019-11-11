import React, { Component } from "react";
import "./WrongScreen.css";
import GameScreen from "../GameScreen/GameScreen";

class WrongScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backToGame: false
    };
  }

  handleBackToGameClick = () => {
    this.setState({ BackToGame: true });
  };

  render() {
    if (this.state.BackToGame === true) {
      return <GameScreen />; //change to Gamescreen
    }
    return (
      <div>
        <div className="background">
          <div className="mobile-container">
            <div className="screen-title">Opps, wrong answer.</div>
            <div className="normal-text">
              Hmm...Give it another go to earn a star!
            </div>
            <button className="main-button">try again</button>
          </div>
        </div>
      </div>
    );
  }
}

export default WrongScreen;

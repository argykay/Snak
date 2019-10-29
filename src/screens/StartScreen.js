import React, { Component } from "react";

import LogInScreen from "./LogInScreen";
import SignUpScreen from "./SignUpScreen";

class StartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logIn: false,
      signUp: false,
      startGame: false
    };
  }

  handleLogInClick = () => {
    this.setState({ logIn: true });
  };

  handleSignUpClick = () => {
    this.setState({ signUp: true });
  };

  handleStartGameClick = () => {
    this.setState({ startGame: true });
  };

  render() {
    if (this.state.logIn === true) {
      return <LogInScreen />;
    }
    if (this.state.signUp === true) {
      return <SignUpScreen />;
    }
    return (
      <div className="main-container">
        <div className="form-container">
          <button className="button-one" onClick={this.handleLogInClick}>
            LOGIN
          </button>
          <button className="button-one" onClick={this.handleSignUpClick}>
            SIGN UP
          </button>
          <button className="button-two" onClick={this.handleStartGameClick}>
            START GAME
          </button>
        </div>
      </div>
    );
  }
}

export default StartScreen;

import React, { Component } from "react";

import LogInScreen from "./LogInScreen";
import SignUpScreen from "./SignUpScreen";
import HintScreen from "../screens/HintScreen/HintScreen";


class StartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logIn: false,
      signUp: false,
      trial: false
    };
  }

  handleLogInClick = () => {
    this.setState({ logIn: true });
  };

  handleSignUpClick = () => {
    this.setState({ signUp: true });
  };

  handleStartGameClick = () => {
    this.setState({ trial: true });
  };

  render() {
    /*
    * Conditional rendering. 
    */
    if (this.state.logIn === true) {
      return <LogInScreen />;
    }
    if (this.state.signUp === true) {
      return <SignUpScreen />;
    }
    /**
     * In the trial game, we make sure that it always shows the coffee-game, which is hint number 12. 
     * We pass this 12 to hint-screen to make sure it retrieves the coffee-game. 
     */
    if (this.state.trial === true) {
      return <HintScreen hint={12} trial={this.state.trial} />;
    }
    return (
      <div className="main-container">
        <div className="form-container">
          <div className="snak-title">Snak</div>
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

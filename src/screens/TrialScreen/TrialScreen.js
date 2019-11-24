import React, { Component } from "react";

import Star from "../../components/Star/Star";
import "../../styling/generic.css";
import "./TrialScreen.css";
import SignUpScreen from "../SignUpScreen";

class TrialScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUp: false
    };
  }

  handleClick = () => {
    this.setState({ signUp: true });
  };

  render() {
    if (this.state.signUp === true) {
      return <SignUpScreen />;
    }
    return (
      <div>
        <div className="background">
          <div className="mobile-container">
            <Star />
            <h1 className="screen-title">That's correct!</h1>
            <p className="normal-text">Sign Up to keep playing!</p>
            <div>
              <img className="star-image star" src="./../images/star.svg" />
            </div>
            <div>
              <button className="main-button" onClick={this.handleClick}>
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrialScreen;

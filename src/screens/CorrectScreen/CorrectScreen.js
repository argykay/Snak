import React, { Component } from "react";
import "../../styling/generic.css";
import "./CorrectScreen.css";
import EndScreen from "../EndScreen/EndScreen";

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
    return (
      <div>
        <div className="background">
          <div className="mobile-container">
            <h1 className="screen-title">Good job!</h1>
            <p className="normal-text">
              You’ve earned a star. The danes are proud of you!
            </p>
            <p className="normal-text">Total Stars:</p>
            <div>
              <img className="star-image" src="./../images/star.svg" />
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

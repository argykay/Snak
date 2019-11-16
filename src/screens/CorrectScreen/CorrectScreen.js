import React, { Component } from "react";
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
            <div className="screen-title">Good job!</div>
            <div className="normal-text">
              You’ve earned a star. The danes are proud of you!
            </div>
            <div className="normal-text">Total Stars:</div>
            <div>
              <img className="dh-image" src="./../images/star.svg" />
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

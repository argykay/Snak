import React, { Component } from "react";
import MainButton from "../components/MainButton/MainButton";
import ScreenTitle from "../components/ScreenTitle/ScreenTitle";
import StartScreen from "./StartScreen";
import BodyText from "../components/BodyText/BodyText";
//import GameScreen from "./GameScreen";

class WrongAnswer extends Component {
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
      return <StartScreen />; //change to Gamescreen
    }

    return (
      <div className="main-container">
        <div className="form-container"></div>
        <MainButton buttontext="try again" />
        <ScreenTitle titletext="Opps, wrong answer" />
        <BodyText bodytext="Hmm...Give it another go to earn a star!" />
      </div>
    );
  }
}
export default WrongAnswer;

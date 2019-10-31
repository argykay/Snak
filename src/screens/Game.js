import React, { Component } from "react";

import LogInScreen from "./LogInScreen";
import SignUpScreen from "./SignUpScreen";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageArray: [
        {
          id: "1",
          svg: "./images/coffee.svg",
          wordDanish: "Kaffe",
          wordEnglish: "Coffee",
          isUsed: false
        },
        {
          id: "2",
          svg: "./images/teacher.svg",
          wordDanish: "Lærer",
          wordEnglish: "Teacher",
          isUsed: false
        }
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.imageArray.map(item => {
          return <img width="300" src={item.svg}></img>;
        })}
      </div>
    );
  }
}

export default Game;

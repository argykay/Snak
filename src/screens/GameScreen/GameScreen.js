import React, { Component } from "react";
import "./GameScreen.css";
import dataArray from "../../data/dataArray";

class GameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: dataArray,
      hint: this.props.hint
    };
  }

  getHintImage() {
    return (
      <div className="game-button">
        <img className="gm-img" src={dataArray[this.state.hint].svg}></img>{" "}
      </div>
    );
  }

  getHintWord() {
    return <div>{this.state.dataArray[this.state.hint].wordDanish} </div>;
  }

  getRandomImages() {
    let image1 =
      dataArray[Math.floor(Math.random() * this.state.dataArray.length)].id;
    let image2 =
      dataArray[Math.floor(Math.random() * this.state.dataArray.length)].id;
    if (
      this.state.dataArray[this.state.hint].id !== image1 &&
      this.state.dataArray[this.state.hint].id !== image2 &&
      image1 !== image2
    ) {
      return (
        <div>
          <div className="game-button">
            <img className="gm-img" src={dataArray[image1].svg}></img>
          </div>
          <div className="game-button" onClick={this.handleStartGameClick}>
            {" "}
            <img className="gm-img" src={dataArray[image2].svg}></img>
          </div>
        </div>
      );
    } else {
      return this.getRandomImages();
    }
  }

  render() {
    return (
      <div className="background">
        <div className="mobile-container">
          <div className="daily-word">{this.getHintWord()}</div>
          <div className="gm">
            <div>{this.getHintImage()}</div>
            <div>{this.getRandomImages()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default GameScreen;

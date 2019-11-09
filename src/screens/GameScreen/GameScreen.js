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

  getHintWord() {
    return <div>{this.state.dataArray[this.state.hint].wordDanish} </div>;
  }

  getRandomImages() {
    let image1 = this.state.dataArray[this.getRandomId()].id;
    let image2 = this.state.dataArray[this.getRandomId()].id;
    let hintId = this.state.dataArray[this.state.hint].id;
    if (hintId !== image1 && hintId !== image2 && image1 !== image2) {
      let tempArray = [];
      tempArray.push(
        this.state.dataArray[image1],
        this.state.dataArray[image2],
        this.state.dataArray[hintId]
      );
      return this.shuffle(tempArray);
    } else {
      return this.getRandomImages();
    }
  }

  getRandomId() {
    return Math.floor(Math.random() * this.state.dataArray.length);
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  render() {
    let array = this.getRandomImages();
    return (
      <div>
        <div className="background">
          <div className="mobile-container">
            <div className="daily-word">{this.getHintWord()}</div>
            <div className="gm">
              <div className="game-button">
                <img className="gm-img" src={array[0].svg}></img>
              </div>
              <div className="game-button">
                <img className="gm-img" src={array[1].svg}></img>
              </div>
              <div className="game-button">
                <img className="gm-img" src={array[2].svg}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GameScreen;

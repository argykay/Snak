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
    return <img width="150" src={dataArray[this.state.hint].svg}></img>;
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
      this.state.dataArray[this.state.hint].id !== image2
    ){
      return (
        <div>
          <img width="150" src={dataArray[image1].svg}></img>
          <img width="150" src={dataArray[image2].svg}></img>
        </div>
      );}
  }

  render() {
    return (
      <div>
        <div>{this.getHintImage()}</div>
        <div>{this.getRandomImages()}</div>
      </div>
    );
  }
}

export default GameScreen;
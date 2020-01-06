import React, { Component } from "react";
import "./Sound.css";
import dataArray from "../../data/dataArray";

class Sound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: dataArray
    };
  }
  play = () => {
    {
      //Receives the sound file, and then call the play() HTML-dom element.
      // if it receives a prop it will play the prop sound 
      //otherwise, it will play the first element in the array. 
      this.props.hint
        ? this.state.dataArray[this.props.hint].pronounciation.play() //this play() is an HTML-dom audio-play method
        : this.state.dataArray[0].pronounciation.play();
    }
  };

  render() {
    return (
      <div className="button-wrapper">
        <div className="button-sound" onClick={this.play}>
          <img className="sound-word" src="./../images/play.svg"/>
        </div>
      </div>
    );
  }
}
export default Sound;

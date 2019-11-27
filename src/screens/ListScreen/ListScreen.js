import React, { Component } from "react";
import dataArray from "../../data/dataArray";
import "./ListScreen.css";
import "../../styling/generic.css";

class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: dataArray
    };
  }
  getWords() {
    return this.state.dataArray.filter(item => item.isUsed == true);
  }

  render() {
    console.log(this.getWords());
    return (
      <div>
        <div className="background">
          <div className="mobile-container">
            <h1 className="title">Learnt words</h1>
            {this.getWords().map((word, index) => (
              <ul key={index}>
                {word.wordDanish} = {word.wordEnglish}
              </ul>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ListScreen;

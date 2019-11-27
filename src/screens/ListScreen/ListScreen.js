import React, { Component } from "react";
import dataArray from "../../data/dataArray";
import Star from "../../components/Star/Star";
import BackButton from "../../components/BackButton/BackButton";
import HintScreen from "../HintScreen/HintScreen";
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

  handleBackToHintClick = () => {
    this.setState({ BackToHint: true });
  };

  render() {
    console.log(this.getWords());
    if (this.state.BackToHint === true) {
      return <HintScreen hint={this.props.hint} />;
    }
    return (
      <div>
        <div className="background">
          <div className="mobile-container">
            <Star />
            <h1 className="title"> &#x270F; Learnt words</h1>
            <table>
              <thead>
                <tr>
                  <th>Danish</th>
                  <th>English</th>
                </tr>
              </thead>
              <tbody>
                {this.getWords().map((word, index) => (
                  <tr key={index}>
                    <td> {word.wordDanish}</td>
                    <td>{word.wordEnglish}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="stickToBottom">
              <BackButton onClick={this.handleBackToHintClick} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListScreen;

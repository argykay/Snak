import React, { Component } from "react";

import dataArray from "../data/dataArray";

class HintScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: dataArray,
      hint: null
    };
  }

  getHint() {
    if (this.state.hint === null) {
      return <img width="300" src={dataArray[0].svg}></img>;
    }
  }

  render() {
    return <div>{this.getHint()}</div>;
  }
}

export default HintScreen;

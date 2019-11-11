import React, { Component } from "react";
import "./ScreenTitle.css";

class ScreenTitle extends Component {
  render() {
    const { titletext } = this.props;

    return <div className="screentitle-text">{titletext}</div>;
  }
}
export default ScreenTitle;

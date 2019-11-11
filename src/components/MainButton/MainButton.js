import React, { Component } from "react";
import "./MainButton.css";

class MainButton extends Component {
  render() {
    const { buttontext } = this.props;

    return <button className="button-main">{buttontext}</button>;
  }
}

export default MainButton;

import React, { Component } from "react";
import "./BodyText.css";

class BodyText extends Component {
  render() {
    const { bodytext } = this.props;

    return <div className="body-text">{bodytext}</div>;
  }
}
export default BodyText;

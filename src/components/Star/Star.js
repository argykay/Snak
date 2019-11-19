import React, { Component } from "react";
import getStars from "../../utils/getStars";
import "./Star.css";

class Star extends Component {
  render() {
    return (
      <div className="star">
        <div className="littleStar">
          <img src="./../images/star_icon.svg" />
        </div>
        <div className="starCount">{getStars()}</div>
      </div>
    );
  }
}
export default Star;

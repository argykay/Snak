import React, { Component } from "react";
import getStars from "../../utils/getStars";

class Star extends Component {
  render() {
    return <div>{getStars()}</div>;
  }
}
export default Star;

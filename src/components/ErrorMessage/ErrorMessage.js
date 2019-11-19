import React, { Component } from "react";
import "./ErrorMessage.css"; 

class ErrorMessage extends Component {
  render() {
    const { message } = this.props;

    return <div className="alert">{message}</div>;
  }
}
export default ErrorMessage;

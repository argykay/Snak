import React, { Component } from "react";

class SignUpForm extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="form-container">
        <form>
          <input type="text" name="fullname" placeholder="fullname"></input>
          <input type="text" name="dateofbirth" placeholder="date-of-birth"></input>
          <input type="text" name="email" placeholder="email"></input>
          <input type="text" name="password" placeholder="password"></input>
          <input type="text" name="repeat-password" placeholder="repeat-password"></input>
          <button value="button">go!</button>
        </form>
      </div>
      </div>
    );
  }
}

export default SignUpForm;

import React, { Component } from "react";

import firebase from "../Firebase";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import BackButton from "../components/BackButton/BackButton";
import StartScreen from "./StartScreen";
import HintScreen from "./HintScreen/HintScreen";

class LogInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: null,
      userLoggedIn: false,
      goBack: false
    };

    // Binding functions
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.firebaseLoginUser = this.firebaseLoginUser.bind(this);
  }

  handleChange(e) {
    const itemName = e.target.name;
    const itemValue = e.target.value;
    this.setState({ [itemName]: itemValue });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.firebaseLoginUser();
    //  this.setState({ userLoggedIn: true });
  }

  firebaseLoginUser() {
    let logInCredentials = {
      email: this.state.email,
      password: this.state.password
    };
    firebase
      .auth()
      .signInWithEmailAndPassword(
        logInCredentials.email,
        logInCredentials.password
      )
      .then(() => {
        this.setState({ userLoggedIn: true });
      }) //The catch will stay, but then take the content of the catch out in a "helper" function and then call that
      .catch(error => {
        this.checkError(error);
      });
  }

  checkError = error => {
    if (error.message !== null) {
      this.setState({ errorMessage: error.message });
    } else {
      this.setState({ errorMessage: null });
    }
  };

  handleBackClick = () => {
    this.setState({ goBack: true });
  };

  render() {
    if (this.state.userLoggedIn === true) {
      return <HintScreen />;
    }
    if (this.state.goBack === true) {
      return <StartScreen />;
    }
    return (
      <div className="main-container">
        <div className="form-container">
          <div className="snak-title">Snak</div>
          <form onSubmit={this.handleSubmit}>
            {this.state.errorMessage !== null ? (
              <ErrorMessage message={this.state.errorMessage} />
            ) : null}
            <input
              type="text"
              name="email"
              required
              placeholder="email"
              value={this.state.email}
              onChange={this.handleChange}
            ></input>
            <input
              type="password"
              name="password"
              required
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
            ></input>
            <button className="go" value="button">
              go!
            </button>
          </form>
        </div>
        <BackButton onClick={this.handleBackClick} />
      </div>
    );
  }
}

export default LogInScreen;

import React, { Component } from "react";
import firebase from "./Firebase";

import "./App.css";

import StartScreen from "./screens/StartScreen";
import Game from "./screens/Game";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      fullname: null,
      userID: null
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(FBUser => {
      if (FBUser) {
        this.setState({
          user: FBUser,
          fullname: FBUser.fullname,
          userID: FBUser.uid
        });
      }
    });
  }

  registerUser = fullName => {
    firebase.auth().onAuthStateChanged(FBUser => {
      FBUser.updateProfile({
        fullname: fullName
      }).then(() => {
        this.setState({
          user: FBUser,
          fullname: FBUser.fullname,
          userID: FBUser.uid
        });
      });
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="main-container">
        <Game />
      </div>
    );
  }
}

export default App;

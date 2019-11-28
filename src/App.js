import React, { Component } from "react";
import firebase from "./Firebase";

import "./App.css";

import StartScreen from "./screens/StartScreen";
import HintScreen from "./screens/HintScreen/HintScreen";
import ListScreen from "./screens/ListScreen/ListScreen";

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

  /*
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
  };*/

  render() {
    return (
      <div className="main-container">
        <HintScreen />
      </div>
    );
  }
}

export default App;

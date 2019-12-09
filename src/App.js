import React, { Component } from "react";
import "./App.css";

import firebase from "./Firebase";
import StartScreen from "./screens/StartScreen";
import "./styling/generic.css";

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

  render() {
    return (
      <div className="main-container">
        <StartScreen />
      </div>
    );
  }
}

export default App;

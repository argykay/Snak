import React, { Component } from "react";
import firebase from "./Firebase";

import "./App.css";
import StartScreen from "./screens/StartScreen";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      fullname: null,
      userID: null,

      imageArray: [
        {
          id: "1",
          svg: "./images/coffe.svg",
          wordDanish: "Kaffe",
          wordEnglish: "Coffee",
          isUsed: false
        },
        {
          id: "2",
          svg: "./images/teacher.svg",
          wordDanish: "Lærer",
          wordEnglish: "Teacher",
          isUsed: false
        }
      ]
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
    return <StartScreen />;
  }
}

export default App;

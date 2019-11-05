import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

import { API_KEY, APP_ID } from "./data/FileConstants";

// Firebase Configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "react-snak.firebaseapp.com",
  databaseURL: "https://react-snak.firebaseio.com",
  projectId: "react-snak",
  storageBucket: "react-snak.appspot.com",
  messagingSenderId: "521135006636",
  appId: APP_ID,
  measurementId: "G-2L4ERBTD1K"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Provider
export const provider = new firebase.auth.GoogleAuthProvider();

// Authentication
export const auth = firebase.auth();

// Function to logIn
export const loginToFirebase = (email, password, onError) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(error => {
      onError(error);
    });
};

// Function to signUp
export const signUpToFirebase = (email, password, fullname, onError) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      this.props.registerUser(fullname);
    })
    .catch(error => {
      onError(error);
    });
};

export default firebase;

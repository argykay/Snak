import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";


/*
Retrieves the api-key from fileconstant.
Note! The api-key should not be pushed to github  
*/
import { API_KEY, APP_ID } from "./data/FileConstants";

// Firebase Configuration
/**
 * Necessary configuration information to use our Firebase database within our system. 
 */
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


export default firebase;

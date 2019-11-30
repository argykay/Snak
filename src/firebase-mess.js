import { API_KEY, APP_ID } from "./data/FileConstants";
importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-messaging.js");

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

const mess = firebase.messaging();

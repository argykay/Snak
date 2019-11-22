import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "@firebase/messaging";

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

const config = {
  messagingSenderId: "521135006636"
};

let messaging;

//we need to check if messaging is supported by the browser
if (firebase.messaging.isSupported()) {
  messaging = firebase.messaging();
}

//register service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    const registration = await navigator.serviceWorker.register(
      "/firebase-messaging-sw.js",
      {
        updateViaCache: "none"
      }
    );
    messaging.useServiceWorker(registration);
    messaging.onMessage(payload => {
      const title = payload.notification.title;
      const options = {
        body: payload.notification.body,
        icon: payload.notification.icon,
        actions: [
          {
            action: payload.fcmOptions.link,
            title: "Book Appointment"
          }
        ]
      };
      registration.showNotification(title, options);
    });
  });
}

export { messaging };

export default firebase;

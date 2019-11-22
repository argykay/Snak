import { ClientHttp2Session } from "http2";

// import firebase scripts inside service worker js script
importScripts("https://www.gstatic.com/firebasejs/5.7.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.7.2/firebase-messaging.js");

firebase.initializeApp({
  messagingSenderId: "521135006636"
});

const messaging = firebase.messaging();

self.addEventListener("notificationsclick", event => {
  if (event.action) {
    clients.openWindow(event.action);
  }
  event.notification.close();
});

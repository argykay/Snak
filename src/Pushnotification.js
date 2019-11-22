import firebase from "firebase";

export function initializePush() {
  const messaging = firebase.messaging();
  messaging
    .requestPermission()
    .then(() => {
      console.log("Have Permission");
      return messaging.getToken();
    })
    //send you're new found FCM token to th e
    //application server so that they can send any push
    .then(token => {
      console.log("FCM Token:", token);
    })
    .catch(error => {
      if (error.code === "messaging/permission-blocked") {
        console.log("Please Unblock Notification Request Manually");
      } else {
        console.log("Error Occured", error);
      }
    });

  /*
    This is the function that gets triggered when you recieve
    a push notification while you're on the page. 
    So you can create a corresponding UI for you to have 
    the push notification handled 
    */

  messaging.onMessage(payload => {
    console.log("Notification Recieved", payload);
  });
}

import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { messaging } from "/firebase";
import axios from "axios";

const ROOT_URL = "http://localhost:3000/"; //This might work.!! CHECK LATER

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = { gnibApptSubscriptionToggleSwitch: false }; // we set the toggle switch to false on component load
    this.gnibApptSubscriptionToggle = this.gnibApptSubscriptionToggle.bind(
      this
    );
    this.subscribeGnibApptNotifications = this.subscribeGnibApptNotifications.bind(
      this
    );
    this.unsubscribeGnibApptNotifications = this.unsubscribeGnibApptNotifications.bind(
      this
    );
    this.notificationPermission = this.notificationPermission.bind(this);
  }

  /**
   * Check if user has already given permission for sending notifications
   * If not, request permission from user, generate instance token and store it in firestore
   */
  async notificationPermission() {
    let permissionGranted = false;
    try {
      /* request permission if not granted */
      if (Notification.permission !== "granted") {
        await messaging.requestPermission();
      }
      /* get instance token if not available */
      if (localStorage.getItem(INSTANCE_TOKEN) !== null) {
        permissionGranted = true;
      } else {
        const token = await messaging.getToken(); // returns the same token on every invocation until refreshed by browser
        await this.sendTokenToDb(token);
        localStorage.setItem(INSTANCE_TOKEN, token);
        permissionGranted = true;
      }
    } catch (err) {
      console.log(err);
      if (
        err.hasOwnProperty("code") &&
        err.code === "messaging/permission-default"
      )
        console.log("You need to allow the site to send notifications");
      else if (
        err.hasOwnProperty("code") &&
        err.code === "messaging/permission-blocked"
      )
        console.log(
          "Currently, the site is blocked from sending notifications. Please unblock the same in your browser settings"
        );
      else console.log("Unable to subscribe you to notifications");
    } finally {
      return permissionGranted;
    }
  }

  /**
   * If registration token is available in localStorage we enable the subscription option to indicate that the user has
   * already subscribed
   */
  componentDidMount() {
    localStorage.getItem(GNIB_APPT_NOTIFICATION_SUBSCRIBED) === "TRUE"
      ? this.setState({ gnibApptSubscriptionToggleSwitch: true })
      : this.setState({ gnibApptSubscriptionToggleSwitch: false });
  }

  /**
   * Send the subscription details (token and topic) to the server endpoint
   */
  async subscriptionActions(mode, token, topic) {
    try {
      return await axios.post(`${ROOT_URL}/${mode}`, { token, topic });
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error: ", error.message);
      }
      return null;
    }
  }

  /**
   * Subscribe app instance to notification topic if user permissions given
   */
  async subscribeGnibApptNotifications() {
    const notificationPermission = await this.notificationPermission();
    if (notificationPermission) {
      const isSubscribed = await this.subscriptionActions(
        SUBSCRIBE,
        localStorage.getItem(INSTANCE_TOKEN),
        GNIB_APPT_NOTIFICATIONS_TOPIC
      );
      if (isSubscribed) {
        localStorage.setItem(GNIB_APPT_NOTIFICATION_SUBSCRIBED, "TRUE");
        this.setState({ gnibApptSubscriptionToggleSwitch: true });
        this.displayMessage(
          <span>
            GNIB(IRP) appointment notifications have been enabled for your
            device
          </span>
        );
      } else {
        this.displayMessage(
          <span>Unable to subscribe you to notifications</span>
        );
      }
    }
  }

  /**
   * Unsubscribe app instance from notification topic
   */
  async unsubscribeGnibApptNotifications() {
    const isUnSubscribed = await this.subscriptionActions(
      UNSUBSCRIBE,
      localStorage.getItem(INSTANCE_TOKEN),
      GNIB_APPT_NOTIFICATIONS_TOPIC
    );
    if (isUnSubscribed) {
      localStorage.removeItem(GNIB_APPT_NOTIFICATION_SUBSCRIBED);
      await this.deleteTokenFromDb();
      this.setState({ gnibApptSubscriptionToggleSwitch: false });
      this.displayMessage(
        <span>You have been unsubscribed from notifications</span>
      );
    } else {
      this.displayMessage(<span>Unsubscribe failed</span>);
    }
  }

  /**
   * Subscribe/UnSubscribe appointment notifications
   */
  gnibApptSubscriptionToggle(event, checked) {
    if (checked) this.subscribeGnibApptNotifications();
    else this.unsubscribeGnibApptNotifications();
  }

  //Check if the browser supports service worker and Push API
  renderSubscriptionOptions(classes) {
    if (!("serviceworker" in navigator) && !("PushManger" in window)) {
      return (
        <Typography className={classes.noteText}>
          Notification feuture is supported only in: <br />
          Chrome Desktop and Mobile (version 50+)
          <br />
          Firefox Desktop and Mobile (version 44+)
          <br />
        </Typography>
      );
    } else {
      return (
        <Fragment>
          <FormControlLabel
            control={<Switch />}
            label="Enable/Disable GNIB(IRP) appointment Notifications"
            onChange={this.gnibApptSubscriptionToggle}
            checked={this.state.gnibApptSubscriptionToggleSwitch}
          />
        </Fragment>
      );
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Card classname={classes.card}>
          <CardContent>{this.renderSubscriptionOptions(classes)}</CardContent>
        </Card>
      </Fragment>
    );
  }
}

Notifications.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Notifications;

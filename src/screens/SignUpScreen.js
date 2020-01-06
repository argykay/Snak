import React, { Component } from "react";

import firebase from "../Firebase";
import BackButton from "../components/BackButton/BackButton";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import StartScreen from "./StartScreen";
import HintScreen from "../screens/HintScreen/HintScreen";

class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      password: "",
      repeatpassword: "",
      errorMessage: null,
      userSignedUp: false,
      goBack: false
    };

    // Binding functions
    /**
     * The two first "this" refers to the actual function handlechange, the third
     * ‘this’ is the context we are passing to .bind() and it is referring to the App context.
     */
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.firebaseCreateUser = this.firebaseCreateUser.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    /**
     * Calling checkPasswords so it will check when writing the password input field 
     * it will automatically give notice that the passwords don't match until the 
     * two input fields are completely the same. 
     */
    this.checkPasswords(name, value);
  }


  checkPasswords(itemName, itemValue) {
    this.setState({ [itemName]: itemValue }, () => {
      if (this.state.password !== this.state.repeatpassword) {
        this.setState({ errorMessage: "Passwords do not match" });
      } else {
        this.setState({ errorMessage: null });
      }
    });
  }

  /**
   * 
   */
  handleSubmit(e) {
    /**
     * preventDefault stops the default action of the element from happening
     * In this case when clicking "sign-up" it will not refresh the page, which is 
     * the default of form-submit-buttons, but it will call our methods instead of doing the 
     * default. 
     */
    e.preventDefault();
    this.firebaseCreateUser();
    //this.setState({ userSignedUp: true });
  }

  firebaseCreateUser() {
    // e.preventDefault();
    let signUpCredentials = {
      fullname: this.state.fullname,
      email: this.state.email,
      password: this.state.password
    };
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        signUpCredentials.email,
        signUpCredentials.password
      )
      .then(() => {
        // this.props.registerUser(signUpCredentials.fullname);
        this.setState({ userSignedUp: true });
      })
      .catch(error => {
        this.checkError(error);
      });
  }

  checkError = error => {
    if (error.message !== null) {
      this.setState({ errorMessage: error.message });
    } else {
      this.setState({ errorMessage: null });
    }
  };
  

  handleBackClick = () => {
    this.setState({ goBack: true });
  };

  render() {
    if (this.state.userSignedUp === true) {
      return <HintScreen />;
    }
    if (this.state.goBack === true) {
      return <StartScreen />;
    }
    return (
      <div className="main-container">
        <div className="form-container">
          <div className="snak-title">Snak</div>
          {this.state.errorMessage !== null ? (
            <ErrorMessage message={this.state.errorMessage} />
          ) : null}
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="fullname"
              required
              placeholder="fullname"
              value={this.state.fullname}
              onChange={this.handleChange}
            ></input>
            <input
              type="text"
              name="email"
              required
              placeholder="email"
              value={this.state.email}
              onChange={this.handleChange}
            ></input>
            <input
              type="password"
              name="password"
              required
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
            ></input>
            <input
              type="password"
              name="repeatpassword"
              required
              placeholder="repeat-password"
              value={this.state.repeatpassword}
              onChange={this.handleChange}
            ></input>
            <button className="go" value="button">
              go!
            </button>
          </form>
        </div>
        <BackButton onClick={this.handleBackClick} />
      </div>
    );
  }
}

export default SignUpScreen;

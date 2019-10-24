import React, { Component } from "react";
import SignUpError from './SignUpError'; 
import firebase from './Firebase';

class SignUpForm extends Component {

  constructor(props){
    super(props);
    this.state={
      fullname: '',
      email:'',
      password:'',
      repeatpassword:'',
      errorMessage:null
    };

    //binding function
    this.handleSignUp = this.handleSignUp.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  handleSignUp(e) {
     const itemName = e.target.name;
     const itemValue = e.target.value; 

     this.setState({[itemName]: itemValue}, () => {
        if (this.state.password !== this.state.repeatpassword){
          this.setState({errorMessage: 'Passwords do not match'});
        }else{
          this.setState({errorMessage: null});
        }
     });
  }

  handleSubmit(e){
    let signUpCredentials = {
      fullname: this.state.fullname, 
      email: this.state.email,
      password: this.state.password
    }
    e.preventDefault(); 
    firebase.auth().createUserWithEmailAndPassword(
      signUpCredentials.email,
      signUpCredentials.password
    ).then(() => {
      this.props.registerUser(signUpCredentials.fullname);
    })
    .catch(error => {
      if(error.message !== null) {
        this.setState({errorMessage: error.message});
      } else {
        this.setState({errorMessage: null});
      }
    });
  }

  render() {
    return (
      <div className="main-container">
        <div className="form-container">
        <form onSubmit={this.handleSubmit}>
            {this.state.errorMessage !== null ? (
              <SignUpError message={this.state.errorMessage}/>
            ) : null}
          <input type="text" name="fullname"  required placeholder="fullname" value={this.state.fullname} onChange={this.handleSignUp}></input>
          <input type="text" name="email" required placeholder="email" value={this.state.email} onChange={this.handleSignUp}></input>
          <input type="password" name="password" required  placeholder="password" value={this.state.password} onChange={this.handleSignUp}></input>
          <input type="password" name="repeatpassword" required placeholder="repeat-password" value={this.state.repeatpassword} onChange={this.handleSignUp}></input>
          <button value="button">go!</button>
        </form>
      </div>
      </div>
    );
  }
}

export default SignUpForm;

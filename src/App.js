import React, {Component} from "react";
import firebase from './Firebase'; 

import "./App.css";
import SignUpForm from "./SignUpForm";




class App extends Component {

  constructor(){  
    super();
    this.state ={
    user: null,
    fullname: null,
    userID: null
  };
}
  
  componentDidMount(){
    const reference = firebase.database().ref('user'); 
    
    reference.on('value', snapshot => {
      let FBUser = snapshot.val(); 
      this.setState({user: FBUser}); 
    })
  }

  registerUser = fullName => {
    firebase.auth().onAuthStateChanged(FBUser => {
      FBUser.updateProfile({
        fullname: fullName
      }).then(()=>{
        this.setState({
          user: FBUser,
          fullname: FBUser.fullname,
          userID: FBUser.uid

        })
      })
    })

  }

  render(){
  return (
    <div className="App">
      <SignUpForm registerUser={this.registerUser}/>
      <p> {this.state.fullname}</p>
    </div>
  );
}
}

export default App;

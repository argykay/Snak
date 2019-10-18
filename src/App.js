import React, {Component} from "react";
import firebase from './Firebase'; 

import "./App.css";
import SignUpForm from "./SignUpForm";




class App extends Component {

  constructor(){  
    super();
    this.state ={
    user: null
  };
}
  
  componentDidMount(){
    const reference = firebase.database().ref('user'); 
    
    reference.on('value', snapshot => {
      let FBUser = snapshot.val(); 
      this.setState({user: FBUser}); 
    })
  }

  render(){
  return (
    <div className="App">
      <SignUpForm />
      <p> {this.state.user}</p>
    </div>
  );
}
}

export default App;

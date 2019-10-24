import React, {Component} from 'react'; 

class SignUpError extends Component{
    render(){
        const {message} = this.props; 

        return(
            <div className="alert">
                {message}
            </div>
        )
    }
}
export default SignUpError; 
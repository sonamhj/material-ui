import React, {Component} from  'react';
// material ui 
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Login extends Component{
	render(){
		return(
				<div>
				<TextField
      					hintText="Email"
      					floatingLabelText="Enter Email"
      					multiLine={true}
      						rows={1}
    					/><br />					 
      					   <TextField
      						hintText="Password"
      						floatingLabelText="Enter Password"
      						multiLine={true}
      						rows={1}
    							/> <br /> 	
    											
					<RaisedButton label= "Submit" primary={true} />

				</div>
				
			)
	}

}
export default Login;
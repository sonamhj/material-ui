import React, {Component} from  'react';
// material ui 
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Login extends Component{
	constructor(props){
		super(props)
		this.state= {
			email: '', 
			apikey: ''
		}
	}
	render(){
		return(
				<div>
				<TextField
                type= "email"
      					hintText="Email"
      					floatingLabelText="Enter Email"
      					value= {this.state.email}
      					onChange={ (e) => this.onChangeEmail(e) }
      					
    					/><br />					 
      					   <TextField
                   type= "Password"
      						hintText="Password"
      						floatingLabelText="Enter Password"
      						value={this.state.apikey}
              				onChange={ (e) => this.onChangePassword(e) }
      							/> <br /> 	
    											
					<RaisedButton label= "Submit" primary={true} onClick={ () => this.submitForm()}/>

				</div>
				
			)
	}
	 onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      apikey: e.target.value
    })
  }
   submitForm() {
    this.validateApiKey(this.state.apikey)
    .then((response)=> {
      if(response.ok){
          return response.json()
          .then((data)=>{
            if(data.email === this.state.email){
              sessionStorage.setItem("apikey", this.state.apikey)
              this.props.history.push("/dashboard")
            }
            else{
              alert("User can't be validated")
            }
          })
      }
      else{
        alert(response.statusText)
      }
    })

  }

  componentWillMount(){
    const savedApikey= sessionStorage.getItem("apikey")
    if(savedApikey){
      this.validateApiKey(savedApikey)
      .then((response)=>{
        if(response.ok){
          this.props.history.push("/dashboard")
        }
      }

        )
    }
  }

  validateApiKey(apikey){
    return fetch('https://api.rebrandly.com/v1/account', 
      {
        headers: {
                    apikey: apikey
                }

      })
  }
}
export default Login;
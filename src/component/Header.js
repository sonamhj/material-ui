import React,  {Component} from 'react';
import {Link }from 'react-router-dom'
//material ui component
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
//component
import Account from './Account';

class Header extends Component{
	appStyle = {
       backgroundColor: '#512DA8'
  } 
  line ={
	textDecoration: 'none',
}
 
	constructor(props){
		super(props)
		this.state={
			sidebarOpen: false,
			email:''
			
		}
	}
	render(){
		return(
			<div>
			
			<AppBar style={this.appStyle}
				title= "Welcome to Dashboard"
				 iconElementRight={ <Account email={this.state.email}/>}
				onLeftIconButtonClick={() => this.toggleSidebar()}
				/>
				
				<Drawer open={this.state.sidebarOpen}
					docked= {false}
					onRequestChange={() => this.toggleSidebar()} >
					<MenuItem><Link style={this.line} to='/dashboard'> Home</Link> </MenuItem>
					<MenuItem><Link  style={this.line} to='/links'> Links</Link> </MenuItem>
					<MenuItem><Link  style={this.line} to='/link/new'>Create link</Link></MenuItem> 
					<MenuItem> Things to do </MenuItem>
				</Drawer>
								 
			</div>
			)
	}
	toggleSidebar(){
		this.setState({sidebarOpen: !this.state.sidebarOpen})
	}
	 componentWillMount() {
    this.setState({
      email: sessionStorage.getItem('email')
    })
  }
	
}
export default Header; 
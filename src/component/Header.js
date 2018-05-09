import React,  {Component} from 'react';
//material ui component

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Account from './Account';
class Header extends Component{
	constructor(props){
		super(props)
		this.state={
			sidebarOpen: false,
			
		}
	}
	render(){
		return(
			<div>
			
			<AppBar
				title= "Sagarmatha"
				 iconElementRight={ <Account/>}
				onLeftIconButtonClick={() => this.toggleSidebar()}
				/>
				
				<Drawer open={this.state.sidebarOpen}
					docked= {false}
					onRequestChange={() => this.toggleSidebar()} >
					<MenuItem> Home </MenuItem>
					<MenuItem> History </MenuItem>
					<MenuItem> Things to do </MenuItem>
				</Drawer>
								 
			</div>
			)
	}
	toggleSidebar(){
		this.setState({sidebarOpen: !this.state.sidebarOpen})
	}
	
}
export default Header; 
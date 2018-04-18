import React,  {Component} from 'react';
//material ui component

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
class Header extends Component{
	constructor(props){
		super(props)
		this.state={
			sidebarOpen: false
		}
	}
	render(){
		return(
			<div>
			
			<AppBar
				title= "Sagarmatha"
				onLeftIconButtonClick={() => this.toggleSidebar()}
				/>
				<Drawer open={this.state.sidebarOpen}
					docked= {false}
					onRequestChange={() => this.toggleSidebar()} >
					<MenuItem> Home </MenuItem>
					<MenuItem> About </MenuItem>
					<MenuItem> Contact </MenuItem>
				</Drawer>				 
			</div>
			)
	}
	toggleSidebar(){
		this.setState({sidebarOpen: !this.state.sidebarOpen})
	}
}
export default Header; 
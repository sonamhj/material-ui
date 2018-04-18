import React,  {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
class Body extends Component{
render(){
	return(
			<div>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHeaderColumn> S.N </TableHeaderColumn>
							<TableHeaderColumn> Name </TableHeaderColumn>
							<TableHeaderColumn> Surname </TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow> 
							<TableRowColumn> 1</TableRowColumn>
							<TableRowColumn> Aditi</TableRowColumn>
							<TableRowColumn> Acharya</TableRowColumn>
						</TableRow>
						<TableRow> 
							<TableRowColumn> 2</TableRowColumn>
							<TableRowColumn> Adity</TableRowColumn>
							<TableRowColumn> Shrestha</TableRowColumn>
						</TableRow>
						<TableRow> 
							<TableRowColumn> 3</TableRowColumn>
							<TableRowColumn> Ayushma</TableRowColumn>
							<TableRowColumn> Bhetuwal</TableRowColumn>
						</TableRow> 
					</TableBody>
				</Table>
			</div>
		)
	}
}

export default Body;
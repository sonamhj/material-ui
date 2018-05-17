import React,{Component} from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
  //component
  import Header from '../Header';

class RebrandlyLinks extends Component{
    constructor(props) {
        super(props)
        this.state = {
            links: []
        }
    }

    
    render(){
        return(
            <div>
            <Header>
            <Table>
                <TableHeader>
                <TableRow>
                     <TableHeaderColumn>Title</TableHeaderColumn>
                    <TableHeaderColumn>Destination</TableHeaderColumn>
                    <TableHeaderColumn>StatusURL</TableHeaderColumn>
                 </TableRow>
                </TableHeader>
                <TableBody>
                            <TableRow>
                                    <TableRowColumn>title</TableRowColumn>
                                    <TableRowColumn>destination</TableRowColumn>
                                    <TableRowColumn>shortURL</TableRowColumn>
                                </TableRow>
                   
                </TableBody>
         </Table>
         </Header>
            </div>
        )}

        // componentWillMount(){
        //         fetch('https://api.rebrandly.com/v1/links',{
        //             headers:{
        //                 apikey: sessionStorage.getItem('apikey')
        //             }
        //         })
        //         .then(res=>{
        //             if(res.ok){
        //                 res.json().then(data=>{
        //                     this.setState({
        //                         links: data
        //                     })
        //                 })
        //             }
        //             else{
        //                 alert(res.statusText)
        //             }
        //         })
            
        // }
    }
export default RebrandlyLinks;
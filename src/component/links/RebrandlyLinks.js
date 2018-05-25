import React,{Component} from 'react';
//import EditLinks from './component/links/EditLinks';

//material-ui component
import RaisedButton from 'material-ui/RaisedButton';
//redux
import {connect} from 'react-redux';

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
    alignCenter = {
        justifyContent: "center",
        alignItems: "center"
    }
    constructor(props) {
        super(props)
        this.state = {
            links: []
        }
    }

     render(){
        return(
            <div>
            <Header />
            <Table>
                <TableHeader displaySelectAll={false}>
                <TableRow>
                    <TableHeaderColumn>Title</TableHeaderColumn>
                    <TableHeaderColumn>Destination</TableHeaderColumn>
                    <TableHeaderColumn>StatusURL</TableHeaderColumn>
                 </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {
                        this.state.links.map(link =>{ //state bata props ma change gareko as connect use garyo vane properties available garauxa and links ko satta lists rakhne as we hav changed nam below
                            return(
                                <TableRow key={link.id}>
                                    <TableRowColumn>{link.title}</TableRowColumn>
                                    <TableRowColumn>{link.destination}</TableRowColumn>
                                    <TableRowColumn>{link.shortURL}</TableRowColumn>
                                    <TableRowColumn>
                                        <RaisedButton style={this.alignCenter} label="Edit" onClick={() => this.props.history.push(`/link/${link.id}/edit`)}/>
                                        <RaisedButton style={this.alignCenter} label="Remove" onClick={ ()=>{this.onDeleteClick(link.id)}}/>
                                    </TableRowColumn>

                                </TableRow>
                            )
                        })
                    }
                </TableBody>
         </Table>
        
        </div>
        )}

        componentWillMount(){
          this.listlink();
        }

        listlink(){
            fetch('https://api.rebrandly.com/v1/links',{
                    headers:{
                        apikey: sessionStorage.getItem('apikey')
                    }
                })
                .then(response => {
                    if (response.ok) {
                        response.json()
                        .then(data => {
                            this.setState({
                                links: data
                            })
                        })
                    }
                    else {
                        alert(response.statusText)
                    }
                })      
        }

        onDeleteClick(link){
            const url = `https://api.rebrandly.com/v1/links/${link}`;
            const apikey=sessionStorage.getItem('apikey')
           
            fetch(url, {
              method: 'delete', 
              headers: {
                  apikey:  apikey,
                'Content-Type': 'application/json'
              }
            })
            .then(res=>{
                if(res.ok){
                    res.json()
                        .then(res=>{
                           
                        this.listlink()
                    })
                }
                
                else{
                    alert(res.statusText)
                }
            })
                   
            }
    }
    //function mapStateToProps(state) {
      //  return({
        //    lists:state.links
        //})
    //}
export default RebrandlyLinks;// first ma connect the export .it will connect our coponent and store from which data can be extracted
//now conect will make lists as properties in rebrandlyLinks, yo garyo vane sate ma kam garnu pardaina
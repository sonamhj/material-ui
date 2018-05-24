import React,{Component} from 'react';
import EditLinks from '../EditLinks';

//material-ui component
import RaisedButton from 'material-ui/RaisedButton';

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
                        this.state.links.map(link =>{
                            return(
                                <TableRow key={link.id}>
                                    <TableRowColumn>{link.title}</TableRowColumn>
                                    <TableRowColumn>{link.destination}</TableRowColumn>
                                    <TableRowColumn>{link.shortURL}</TableRowColumn>
                                    <TableRowColumn>
                                        <RaisedButton style={this.alignCenter} label="Edit" onclick={this.props.history.push(`/editlink/${link.id}/edit`)}/>
                                         <RaisedButton style={this.alignCenter} label="Remove" onClick={ ()=>{this.onButtonClick()}}/>
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
                const apikeysession=sessionStorage.getItem('apikey')
                    debugger
                    if(apikeysession)
                    {
                        this.validateapikey(apikeysession)
                        .then(res=>{
                            if(res.ok){
                                res.json().then(data=>{
                                    this.setState({
                                        links: data
                                    })
                             })
                         }
                    })
                }
            }
        onButtonClick(){
            var url = 'https://api.rebrandly.com/v1/links';
            const apikey=sessionStorage.getItem('apikey')
           
            fetch(url, {
              method: 'delete', // or 'PUT'
              headers: {
                  apikey:  apikey,
                'Content-Type': 'application/json'
              }
            })
            .then(res=>{
                if(res.ok){
                    res.json()
                        .then(data=>{
                           
                        this.props.history.push('/links')
                    })
                }
                
                else{
                    alert(res.statusText)
                }
            })
                   
            }
    
    }
export default RebrandlyLinks;
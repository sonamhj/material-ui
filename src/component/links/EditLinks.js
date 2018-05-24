import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
//component
import Header from './Header';

class CreateLink extends Component{
    alignCenter = {
        height: "100vh",              
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            title:'',
            destination:'',

        }
    }
   
    render(){
        return(
            <div>
            <Header/>
            <div style={this.alignCenter}>
            <Card>
                <CardText title="Edit link" >
                
            	<TextField 
                    hintText="Title"
                    floatingLabelText="Title"
                    value={this.state.title}
                    onChange={(e)=> {this.setState({title:e.target.value})}}
                /><br />
                 <TextField
                     hintText="Destination"
                    floatingLabelText="Destination"
                    value={this.state.destination}
                    onChange={(e)=>{this,this.setState({destination:e.target.value})}}
                 /><br />
                
            	<RaisedButton label= "Submit" primary={true} onClick={this.onLinkSubmit}/>

                </CardText>
            </Card>
            </div>
        </div>
        )
    }
    onLinkSubmit=() => {
        
        var url = `https://api.rebrandly.com/v1/links/${this.state.id}`;
        const apikey=sessionStorage.getItem('apikey')
        const data = {
            title: this.state.title,
           destination:this.state.destination
        };
        
        fetch(url, {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(data), // data can be `string` or {object}!
          headers: {
              apikey:  apikey,
            'Content-Type': 'application/json'
          }
        })
        .then(res=>{
            if(res.ok){
                res.json()
                    .then(link=>{
                       
                    this.props.history.push('/links')
                })
            }
            
            else{
                alert(res.statusText)
            }
        })
               
        }
        componentWillMount(){
            const apikey=sessionStorage.getItem('apikey')
            fetch(`https://api.rebrandly.com/v1/links/${this.state.id}`,{
                headers:{
                        apikey:apikey
                }
            })
            .then(res=>{
                if(res.ok){
                    res.json()
                        .then(links=>{
                            this.setState({
                                title: links.title,
                                destination: links.destination
                            })
                    })
                }
                
                else{
                    alert(res.statusText)
                }
            })
        }
    
}
export default EditLinks;

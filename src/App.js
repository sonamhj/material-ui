import React, { Component } from 'react';
// material ui component
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Login from './component/Login'
import Dashboard from './component/Dashboard';
import RebrandlyLinks from './component/links/RebrandlyLinks';
import CreateLink from './component/CreateLink';
import EditLink from '../links/EditLinks';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter> 
          <Switch> 
              <Route path= "/login" component={Login}/>
              <Route exact path="/" render={() => (<Redirect to="/login"/>)} />
              <Route path= "/dashboard" component={Dashboard}/>
              <Route path="/links" component={RebrandlyLinks}/>
              <Route path="/createlink" component={CreateLink}/>
              <Route path="/editlink/:id/edit" component={EditLink}/>
          </Switch>
        </BrowserRouter>
        
      </MuiThemeProvider>

    );
  }
}

export default App;


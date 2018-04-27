import React, { Component } from 'react';
// material ui component
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// components
import Header from './component/Header';
import Body from './component/Body';
import Login from './component/Login';
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
             <Login />
      </MuiThemeProvider>

    );
  }
}

export default App;

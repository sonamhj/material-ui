import React, { Component } from 'react';
// material ui component
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// components
import Header from './component/Header';
import Body from './component/Body';
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
             <Header />
             <Body /> 
      </MuiThemeProvider>

    );
  }
}

export default App;

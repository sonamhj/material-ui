import React, { Component } from 'react';

import Header from './Header';
import Body from './Body';


class Dashboard extends Component {
  render() {
    return (
      <div>
      
        <Header />
          <p>this is dashboard</p>
        <Body/>
        
      </div>
    )
  }
}

export default Dashboard;
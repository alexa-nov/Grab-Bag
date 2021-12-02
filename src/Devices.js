import React from 'react';
import './App.css';
import Bag from './Bag';
import Devices from './Devices.js'
import { useState } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loaded: false,
      offset: 0
    };
  }
 
  componentDidMount() {
    this.getDevices();
  }


  getDevices() {
    const baseUrl = 'https://www.ifixit.com/api/2.0/wikis/CATEGORY';
    const url = baseUrl + '?offset=' + this.state.offset + '&limit=12';
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({items: data, loaded: true}));
  }

  nextPage(){
    this.setState({ offset: this.state.offset + 12 });
    console.log(updatedOffset);
    console.log(this.state.offset);
    this.getDevices();
  }

  prevPage(){
    let updatedOffset = this.state.offset - 12
    if (updatedOffset < 0){
      updatedOffset = 0;
    }
    this.setState({
      offset: updatedOffset
    });
    console.log(this.state.offset);
    this.getDevices();
  }
  
  render() {
  return (
    <div>

    <Devices
      stateVars={this.state}
      prev={() => this.prevPage()}
      next={() => this.nextPage()}
      />
    <Bag
      
    />
    </div>
  )
}
}
export default App;

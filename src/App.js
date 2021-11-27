import React from 'react';
import './App.css';
import Devices from './Devices.js'

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
    const url = baseUrl + '?offset=' + this.state.offset + '&limit=13';
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({items: data, loaded: true}));
  }
  
  render() {
  return (
    <div>
    <Devices
      stateVars={this.state}
    />
    </div>
  )
}
}
export default App;

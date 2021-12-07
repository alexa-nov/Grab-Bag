import React from 'react';
import './App.css';
import Bag from './Bag';
import DeviceContainer from './DeviceContainer'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      bagImages: [],
      bagText: [],
      loaded: false,
      offset: 0,
      image: 0
    };
  }
 
  componentDidMount() {
    this.getDevices();
    let bagImages = JSON.parse(localStorage.getItem('bagImages'));
    let bagText = JSON.parse(localStorage.getItem('bagText'));
    if (bagImages == null) {
      bagImages = [];
    }
    if (bagText == null) {
      bagText = [];
    }
    this.setState({ bagImages:bagImages });
    this.setState({ bagText:bagText });
    //this.clearBag();
  }

  clearBag() {
    this.setState({ bag:[] });
    localStorage.clear();
  }

  getDevices() {
    const baseurl = 'https://www.ifixit.com/api/2.0/wikis/CATEGORY';
    const url = baseurl + '?offset=' + this.state.offset + '&limit=12';
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({items: data, loaded: true}));
    //this.setState({numItems: this.state.items.length})
   // console.log(this.state.numItems);
  }

  nextPage(){
    this.setState({ 
      offset: this.state.offset + 12 
    }, () =>{
      this.getDevices();
    });
  }

  prevPage(){
    let updatedOffset = this.state.offset - 12
    if (updatedOffset < 0){
      updatedOffset = 0;
    }
    this.setState({
      offset: updatedOffset
    }, () =>{
      this.getDevices();
    });
  }
  
  render() {
  return (

    <div className = "topBar"> 
    <div className = "mainBlock">
    <DeviceContainer
      stateVars={this.state}
      prev={() => this.prevPage()}
      next={() => this.nextPage()}
      />
    <Bag
      stateVars={this.state}
    />
    </div>
    </div>
    
  )
}
}
export default App;

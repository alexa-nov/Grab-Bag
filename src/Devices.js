import React from 'react';
import './Devices.css';

class Devices extends React.Component {
  
  render() {
    if (!this.props.stateVars.loaded) return <div>
      <h1> Items loading... </h1> 
    </div> ;
    return(
    <div className='Device-panel'>
    <div className='Device-grid'>
    
      {this.props.stateVars.items.map((item, index) => (
        <div key = { index }>
        <div className='Device-container'>
        <img className='Device-image'
          src ={item.image.standard} 
          alt=""
        />
        </div>
        <div className='Device-text'>
          {item.display_title}
        </div>
        </div>
      ))}
    </div>
      <button 
      onClick = {this.props.prev}
      disabled = {this.props.stateVars.offset === 0}> 
      prev
      </button>
      <button 
      onClick = {this.props.next}> 
      next 
      </button>
    </div>
  );
}
}
export default Devices;



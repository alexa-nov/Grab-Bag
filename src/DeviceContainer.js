import React from 'react';
import './Devices.css';
import Devices from './Devices'

class DeviceContainer extends React.Component {
  render() {
  //  if (!this.props.stateVars.loaded) return <div>
   //   <h1> Items loading... </h1> 
   // </div> ;
    return(
      <div>
        <button 
        onClick = {this.props.prev}
        disabled = {this.props.stateVars.offset === 0}> 
        prev
      </button>
      <button 
        onClick = {this.props.next}> 
        next 
      </button>
    <div className='Device-panel'>
    <div className='Device-grid'>
      {this.props.stateVars.items.map((item, index) => {
        return(
          <div key = { index }>
            <Devices
              image = {item.image.standard} 
              deviceText = {item.display_title}
            />
          </div>
        );
      })}
    </div>
    </div>
    </div>
  );
}
}
export default DeviceContainer;


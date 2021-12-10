import React from 'react';
import './Devices.css';
import Devices from './Devices'

class DeviceContainer extends React.Component {
  render() {
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
    <div className='device-panel'>
    <div className='header-text'>All Devices</div>
    <div className='device-grid'>
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


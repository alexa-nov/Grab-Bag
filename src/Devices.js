import React from 'react';
import './Devices.css';

class Devices extends React.Component {
  constructor(props) {
    super(props);
    this.onDragStart=this.onDragStart.bind(this)
  }

  onDragStart(e) {
    e.dataTransfer.setData("image", this.props.image);
    e.dataTransfer.setData("text", this.props.deviceText);
  }

  render() {
    return(
      <div>
      <div className = 'Device-container'>
      <img className='Device-image'
          src ={this.props.image} 
          alt=""
          onDragStart={this.onDragStart}
      />
      </div>
      <div className='Device-text'>
          {this.props.deviceText}
      </div>
      </div>
    )
  }
}
export default Devices;

import React from 'react';
import './Bag.css';

class Bag extends React.Component {
  constructor(props) {
    super(props);
    this.text = "";
    this.onDrop=this.onDrop.bind(this)
  }

  addDeviceToBag(image, text) {
    this.props.stateVars.bagImages.push(image);
    this.props.stateVars.bagText.push(text);
    this.forceUpdate();
    localStorage.setItem('bagImages', JSON.stringify(this.props.stateVars.bagImages));
    localStorage.setItem('bagText', JSON.stringify(this.props.stateVars.bagText));
  }


  onDrop(e) {
    e.preventDefault();
    const img = e.dataTransfer.getData("image");
    const txt = e.dataTransfer.getData("text");
    this.addDeviceToBag(img, txt);
  }

  onDragOver(e) {
    e.preventDefault();
  }

  render() {
    return(
      <div className = "bag" onDrop={this.onDrop} onDragOver={this.onDragOver}>
      <button
        onClick = {this.props.clear}>
        clear
      </button>
        {this.props.stateVars.bagImages.map((item, index) => {
        return (
        <div>
          <div key={index}>
            <img
              className='image-bag'
              alt=""
              src ={item} 
            />
            </div>
            </div>
        )})
        }
        {this.props.stateVars.bagText.map((item, index) => {
        return(
        <div className = 'bag-text-container'>
          <div className='bag-text'>
            {item}
          </div>
        </div>
        )})
        }
      </div>
)}};

export default Bag;



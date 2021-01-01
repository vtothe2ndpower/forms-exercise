import React, { Component } from 'react';

class Box extends Component {
  render() {
    const { width, height, color, handleClick } = this.props;
    return (
      <div className="Box">
        <div style={{ 
          width: `${width}em`, height: `${height}em`, backgroundColor: color
        }}>
        </div>
        <button onClick={handleClick}>Remove Box!</button>
        <br/>
        <br/>
      </div>
    )
  }
}

export default Box;
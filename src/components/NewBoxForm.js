import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      width: '',
      height: '',
      color: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const newBox = {...this.state, id: uuid()};
    this.props.addItem(newBox);
    this.setState({ width: '', height: '', color: '' });
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="height">Height: </label>
          <input 
            type="text"
            id="height"
            name="height"
            value={this.state.height}
            onChange={this.handleChange}
          />
        </div>
        <br/>
        <div>
          <label htmlFor="width">Width: </label>
          <input
            type="text"
            id="width"
            name="width"
            value={this.state.width}
            onChange={this.handleChange}
          />
        </div>
        <br/>
        <div>
          <label htmlFor="color">Background Color: </label>
          <input
            type="text"
            id="color"
            name="color"
            value={this.state.color}
            onChange={this.handleChange}
          />
        </div>
        <br/>
        <button type="submit">Add New Box!</button>
      </form>
    )
  }
}

export default NewBoxForm;
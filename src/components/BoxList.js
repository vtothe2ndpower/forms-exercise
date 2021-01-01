import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import { v4 as uuid } from 'uuid';

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [
        { width: 10, height: 20, color: 'red', id: uuid() },
        { width: 20, height: 15, color: 'green', id: uuid() }
      ]
    };
    this.addItem = this.addItem.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  addItem(item) {
    this.setState(curState => ({
      entries: [...curState.entries, item]
    }));
  }

  handleClick(id) {
    // Remove clicked box from state
    this.setState({
      entries: this.state.entries.filter(item => item.id !== id)
    });
  }


  render() {
    const { entries } = this.state;    
    return (
      <div>
        <NewBoxForm addItem={this.addItem} />
        <br/>
        {entries.slice().reverse().map(item => (
          <Box 
            key={item.id} 
            id={item.id} 
            width = {item.width} 
            height = {item.height} 
            color = {item.color}
            handleClick={() => this.handleClick(item.id)}
          />
        ))}
      </div>
    )
  }
}

export default BoxList;
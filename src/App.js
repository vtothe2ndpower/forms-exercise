import React, { Component } from 'react';
import BoxList from './components/BoxList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Box Maker Exercise</h1>
        <h2>Practicing Forms with React.js</h2>
        <BoxList />
      </div>
    );
  }
}

export default App;

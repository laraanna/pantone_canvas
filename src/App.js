import React, { Component } from 'react';
import Circles from './containers/Circles';
import './App.css';

class App extends Component {
  // constructor(props){
  //   super(props)
  // }
  render() {
    return (
      <div className="App">
        <h1> Sketch it </h1>
        <Circles />
      </div>
    );
  }
}

export default App;

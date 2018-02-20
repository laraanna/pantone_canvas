import React, { Component } from 'react';
import DrawBoard from './components/DrawBoard'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="App">
        <h1> Sketch it </h1>
        <DrawBoard />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import DrawBoard from './components/DrawBoard'
import Circle from './containers/Circle';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="App">
        <h1> Sketch it </h1>
        <Circle />
      </div>
    );
  }
}

export default App;

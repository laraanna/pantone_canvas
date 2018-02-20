import React, {Component} from 'react'
import './DrawBoard.css'

class DrawBoard extends Component {
  render(){
    return(
      <div className="DrawBoard">
        <canvas ref="canvas">
        </canvas>
      </div>
    )
  }
}

export default DrawBoard

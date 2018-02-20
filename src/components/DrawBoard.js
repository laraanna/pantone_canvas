import React, {Component} from 'react'
import './DrawBoard.css'
import { connect } from 'react-redux'

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

const mapStateToProps = ({ drawings }) => ({
  drawings
})

export default connect(mapStateToProps)(DrawBoard)

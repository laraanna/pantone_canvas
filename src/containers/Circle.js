import React, {Component} from 'react'
import {connect} from 'react-redux'


let mapStateToProps    = (state)    => state;
let mapDispatchToProps = (dispatch) => ({});

class Circle extends Component {
  componentDidMount(){
    this.refs.canvas.width = 400;
    this.refs.canvas.height = 400;
    this.ctx = this.refs.canvas.getContext('2d');
  }
  render(){
    return(
      <div className="Circle">
        <canvas ref="canvas"/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Circle);

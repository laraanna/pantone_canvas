import React, {Component} from 'react'
import {connect} from 'react-redux'
import './Circle.css'


let mapStateToProps    = (state)    => state;
let mapDispatchToProps = (dispatch) => ({});

class Circle extends Component {
  componentDidMount(){
    this.refs.canvas.width = 400;
    this.refs.canvas.height = 400;
    this.ctx = this.refs.canvas.getContext('2d');

    this.renderCanvas(this.props);
  }

  componentWillReceiveProps(nextProps){
    this.renderCanvas(nextProps)
  }

  renderCanvas(props){
    this.ctx.fillStyle= '#000';
    this.ctx.fillRect(0,0,this.refs.canvas.width, this.refs.canvas.height)
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

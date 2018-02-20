import React, {Component} from 'react'
import {connect} from 'react-redux'
import './Circles.css'


let mapStateToProps    = (state)    => state;
let mapDispatchToProps = (dispatch) => ({});

class Circles extends Component {
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
    this.ctx.fillStyle= 'beige';
    this.ctx.fillRect(0,0,this.refs.canvas.width, this.refs.canvas.height)

    for (let circle in props.circles) {

      this.ctx.beginPath();
      this.ctx.arc(circle.x, circle.y, props.circleRadius, 0, 2 * Math.PI, false);
      this.ctx.fillStyle = circle.color;
      console.log(circle.color)
      this.ctx.fill();

    }
  }
  render(){
    return(
      <div className="Circles">
        <canvas ref="canvas"/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Circles);

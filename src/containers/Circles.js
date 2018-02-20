import React, {Component} from 'react'
import {connect} from 'react-redux'
import './Circles.css'
import ToolbarItem from '../components/ToolbarItem';
import { toggleCircle } from '../actions/circles';


let mapStateToProps    = (state)    => state;
let mapDispatchToProps = (dispatch) => ({
  toggleCircle: index => dispatch(toggleCircle(index))
});

class Circles extends Component {
  componentDidMount(){
    this.refs.canvas.width = 600;
    this.refs.canvas.height = 800;
    this.ctx = this.refs.canvas.getContext('2d');

    this.renderCanvas(this.props);
    console.log(this.props.circles.circles)
  }

  componentWillReceiveProps(nextProps){
    this.renderCanvas(nextProps)
  }

  renderCanvas(props){
    this.ctx.fillStyle= '#fff';
    this.ctx.fillRect(0,0,this.refs.canvas.width, this.refs.canvas.height)
    for (let circle in props.circles.circles) {
      this.ctx.beginPath();
      this.ctx.arc(circle.x, circle.y, props.circleRadius, 0, 2 * Math.PI, false);
      this.ctx.fillStyle = circle.color;
      console.log(circle.color)
      this.ctx.fill();
    }
  }
  render(){
    return(
      <div className="app-wrapper">
        <div className="canvas-wrapper">
          <canvas
            ref="canvas"
            onMouseDown={this._mouseDown.bind(this)}
            onMouseMove={this._mouseMove.bind(this)}
            onMouseUp={this._mouseUp.bind(this)}
          />
        </div>
        <ul className="toolbar">
          {this.props.circles.circles.map((item, key) => (
            <ToolbarItem
              key={key}
              color={item.color}
              enabled={item.enabled}
              onClick={() => this.props.toggleCircle(key)} />
          ))}
        </ul>
      </div>
    )
  }
}

export default connect(({circles}) => ({circles}), mapDispatchToProps)(Circles);

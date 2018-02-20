import React, {Component} from 'react'
import {connect} from 'react-redux'
import './Circles.css'
import ToolbarItem from '../components/ToolbarItem';
import { toggleCircle, moveCircle } from '../actions/circles';


let mapStateToProps    = (state)    => state;
let mapDispatchToProps = (dispatch) => ({
  toggleCircle: index => dispatch(toggleCircle(index)),
  moveCircle: (index, x, y) => dispatch(moveCircle(index, x, y))
});

class Circles extends Component {
  componentDidMount(){
    this.refs.canvas.width = 800;
    this.refs.canvas.height = 800;
    this.ctx = this.refs.canvas.getContext('2d');

    this.helpers = {
      dragging: false,    // true if user is dragging any circle
      circle: null,       // id of dragged circle
      offsetX: 0,         // x distance between click point and center of dragged circle
      offsetY: 0,         // y distance between click point and center of dragged circle
      x: 0,               // updated x
      y: 0                // updated y
    };

    this.renderCanvas(this.props);
    console.log(this.props)
  }

  componentWillReceiveProps(nextProps){
    this.renderCanvas(nextProps)
  }

  renderCanvas(props){
    this.ctx.fillStyle= '#fff';
    this.ctx.fillRect(0,0,this.refs.canvas.width, this.refs.canvas.height)
    for (let circle of props.circles) {
      console.log(props.circles)
      if (circle.enabled){
        this.ctx.beginPath();
        this.ctx.arc(circle.x, circle.y, props.circleRadius, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = circle.color;
        this.ctx.fill();
      }
    }
  }

  _mouseDown(e) {
     // get coordinates
     let x = e.nativeEvent.offsetX;
     let y = e.nativeEvent.offsetY;
     let r = this.props.circleRadius;

     // loop through circles and check if coordinates are in any circle
     for (let i = this.props.circles.length - 1; i >= 0; i--) {
         let cx = this.props.circles[i].x;
         let cy = this.props.circles[i].y;

         // check if user clicked any circle
         if (
             Math.pow((x - cx), 2) + Math.pow((y - cy), 2) <= Math.pow(r, 2)
             && this.props.circles[i].enabled
         ) {
             // save helpers and exit function
             this.helpers.circle = i;
             this.helpers.dragging = true;
             this.helpers.offsetX = cx - x;
             this.helpers.offsetY = cy - y;
             this.helpers.x = cx;
             this.helpers.y = cy;
             return;
         }
     }
 }

 _mouseMove(e) {
     // skip if user didn't click any circle
     if (!this.helpers.dragging) return;

     // get coordinates
     let x = e.nativeEvent.offsetX;
     let y = e.nativeEvent.offsetY;

     // create a copy of circles array
     let circles = [...this.props.circles];
     console.log(circles)

     // update helpers
     this.helpers.x = x + this.helpers.offsetX;
     console.log(x + this.helpers.offsetX)
     this.helpers.y = y + this.helpers.offsetY;
     console.log(this.helpers.offsetY)

     // set new coordinates of circles
     circles[this.helpers.circle].x = this.helpers.x;
     circles[this.helpers.circle].y = this.helpers.y;

     //rerender canvas
     this.renderCanvas(Object.assign({}, this.props, {
       circles
     }));
 }

 _mouseUp(e) {
     this.helpers.dragging = false;
     if (this.helpers.circle !== null) {
         // dispatch action to update redux state
         this.props.moveCircle(this.helpers.circle, this.helpers.x, this.helpers.y);
         this.helpers.circle = null;
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
          {this.props.circles.map((item, key) => (
            <ToolbarItem
              key={key}
              color={item.color}
              enabled={item.enabled}
              name={item.name}
              onClick={() => this.props.toggleCircle(key)} />
          ))}
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Circles);

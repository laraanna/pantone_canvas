import React, {Component} from 'react'
import {connect} from 'react-redux'


let mapStateToProps    = (state)    => state;
let mapDispatchToProps = (dispatch) => ({});

class Circle extends Component {
  render(){
    return(
      <div className="Circle">
        <canvas />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Circle);

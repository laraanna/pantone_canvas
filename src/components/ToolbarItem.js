import React, {Component} from 'react'
import classnames from 'classnames'
import './ToolbarItem.css'

class ToolbarItem extends Component {
  render(){
    return(
      <li
        className={classnames('toolbar_item', {
          'active': this.props.enabled
        })}
        onClick={this.props.onClick}>
        <span style={{backgroundColor: this.props.color}}/>
      </li>
    )
  }
}

export default ToolbarItem;

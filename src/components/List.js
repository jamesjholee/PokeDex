import React, {Component} from 'react';

export default class List extends Component {

  render() {
    return(
      <li
        onClick={() => {this.props.onePoke(this.props.id)}}
        className="case">
        <img className='image' src={`./images/${this.props.id}.png`} role="presentation"/>
        <div className="name">
        {this.props.pkobj.name.toUpperCase()}
        </div>
      </li>
    )
  }
}

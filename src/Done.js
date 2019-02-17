import React, { Component } from 'react';


class Done extends Component {
    
  render() {
    return (
      <div>
          <ul>
              <li onClick={this.props.toRemove}>{this.props.item}</li>
              <button value={this.props.item} onClick={this.props.toRemove}>Remove</button>
              <button value={this.props.item} onClick={this.props.unDoneItem}>Undone</button>
          </ul>
      </div>
    );
  }
}

export default Done;

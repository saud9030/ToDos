import React, { Component } from 'react';


class List extends Component {
    
  render() {
    return (
      <div>
          <ul>
              <li >{this.props.item}</li>
              <button value={this.props.item} onClick={this.props.doneItem}>Done</button>
              <button value={this.props.item} onClick={this.props.toRemove}>Remove</button>
          </ul>
      </div>
    );
  }
}

export default List;

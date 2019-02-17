import React, { Component } from 'react';


class Done extends Component {
    
  render() {
    return (
      <div>
          <ul>
              <li onClick={this.props.toRemove} contenteditable="true">{this.props.item}</li>
              <button value={this.props.item} onClick={this.props.toRemove} className="btn-circle" type="button">X</button>
              <button value={this.props.item} onClick={this.props.unDoneItem} className="btn-circle">↵</button>
          </ul>
      </div>
    );
  }
}

export default Done;

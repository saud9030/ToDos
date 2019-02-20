import React, { Component } from 'react';


class List extends Component {
    state = {
        ableToEdit : false
    }
    //this function clear the default text of <p> that is editable , 
    //and only do it once, so if the user wrote notes and they want to edited some more, it won't clear what they already wrote
    emptyNotes = (event) =>{
        if(this.state.ableToEdit === false){
            event.target.textContent ='';
            this.setState({
                ableToEdit : true,
            })
        }
        
       
    }
  render() {
    return (
      <div>
          <ul>
                <li >{this.props.item}</li>
                {/* <p contentEditable="true" onClick={this.emptyNotes}> click here to write notes</p> */}
                <button value={this.props.item} onClick={this.props.doneItem} className="btn-circle">✓</button>
                <button value={this.props.item} onClick={this.props.toRemove} className="btn-circle">X</button>
          </ul>
         
      </div>
    );
  }
}

export default List;

// to u
// onClick={()=>this.props.doneItem}
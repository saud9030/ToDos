import React, { Component } from 'react';
import './App.css';
import List from './List'
import Done from './Done'
class App extends Component {
  // the item key is to contain what the user write to add into list key(which is the todolist)
  state = {
    item : "",
    list : [],
    done : [],
  }
  //this function to update the item(key) so it can be user later to be added to the list(key) array.
  addItem= (event) => {
    // getting what the user is writing 
    let newItem = event.target.value;
    //updating the value of item(key)
    this.setState({
        item : newItem
    })
  }
  //this function to add the item(key) to the array of list(key)
  addToList = (event) =>{
    //to prevent the page from reloading once the user uses the button
    event.preventDefault();
    //to push the new item to the array of list
    this.state.list.push(this.state.item)
    //to reset the value of item(key), so once the user submit the item it will disapear from the page
    this.setState({
        item: ""
    })
  }
  //this function is used by the List.js component to delete/remove any item on the list from the page and from the list array
  toRemove = (event) => {
    //this var is to select the wanted element by its content and to find its index on on the list(key) array
    let removedItem = this.state.list.indexOf(event.target.textContent);
    //using .splice method to remove the item from the array
    this.state.list.splice(removedItem,1)
    //using this method to force the render methor to render again so the removed item will disapear from the page
    this.forceUpdate();
  }
  doneItem = (event) =>{
    let doneItem = event.target.value;
    console.log(doneItem)
    this.state.done.push(doneItem);
    console.log(this.state.done)
    this.state.list.splice(this.state.list.indexOf(doneItem),1)
    this.forceUpdate();
  }
  unDoneItem = (event) =>{
    let unDoneItem = event.target.value;
    this.state.list.push(unDoneItem);
    this.state.done.splice(this.state.done.indexOf(unDoneItem),1)
    console.log(this.state.done)
    this.forceUpdate();
  }
  render() {
    // the var to pass all the lists' item to the List component and to pass the function toRemove so it can be used.
    let listItems = this.state.list.map((item) => <List item={item} toRemove={this.toRemove} doneItem={this.doneItem}/>)
    let doneItems = this.state.done.map((item) => <Done item={item} unDoneItem={this.unDoneItem}/>)
    return (
      <div>
        <h1>To Do List</h1>
        <form onSubmit={this.addToList}>
          <input type="text" name="item" onChange={this.addItem} value={this.state.item}></input>
          <button type="submit">Add</button>
        </form>
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>To Do</h2>
              {listItems}
            </div>
            <div className="col">
              <h2>Done</h2>
              {doneItems}
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;

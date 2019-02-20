import React, { Component } from 'react';
import './App.css';
import List from './List'
import Done from './Done'
import ReactDOM from 'react-dom'
import twitter from './twitter.svg';
import github from './github.svg';
import linkedin from './linkedin.svg';

var moment = require('moment');

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
    // this if condition is to make sure that the user will not be giving us only a whitespace
    if(this.state.item.trim() === ''){
      alert("you need to write something")
    }else{
       //to push the new item to the array of list
       this.state.list.push(this.state.item)
       //to reset the value of item(key), so once the user submit the item it will disapear from the page
       this.setState({
           item: ""
       })
    }
  }
  
  //this function is used by the List.js component to delete/remove any item on the list from the page and from the list array
  toRemoveList = (event) => {
    console.log(this.state.list)
    //this var is to select the wanted element by its content and to find its index on on the list(key) array
    let removedItem = this.state.list.indexOf(event.target.value);
    console.log(removedItem)
    //using .splice method to remove the item from the array
    this.state.list.splice(removedItem,1)
    //using this method to force the render methor to render again so the removed item will disapear from the page
    this.forceUpdate();
  }
  //this function is used by Done.js component to delete/remove any completed tasks from the done(key) array
  toRemoveDone = (event) => {
    //this var is to select the wanted element by its content and to find its index on on the list(key) array
    let removedItem = this.state.done.indexOf(event.target.value);
    //using .splice method to remove the item from the array
    this.state.done.splice(removedItem,1)
    //using this method to force the render methor to render again so the removed item will disapear from the page
    this.forceUpdate();
  }
  //this function enables the user to be done with a task 
  doneItem = (event) =>{
    // to select the done item
    let doneItem = event.target.value;
    // to add the item to the done(key) array
    this.state.done.push(doneItem);
    // to delete the done item for list(key) array
    this.state.list.splice(this.state.list.indexOf(doneItem),1)
    // to call render() again
    this.forceUpdate();
  }
  // this function enables the user to undone a task, and to have it back on the tasks list
  unDoneItem = (event) =>{
    // to select the item
    let unDoneItem = event.target.value;
    // to update the list(key) array to add the undone item
    this.state.list.push(unDoneItem);
    // to update the done(key) array to remove the undone item
    this.state.done.splice(this.state.done.indexOf(unDoneItem),1)
    // to call render again so the items on the page will appear correctly
    this.forceUpdate();
  }
  //this function enables the user to remove all the tasks
  removeAll = (event) =>{
    //to prevent the button from refreshing the page
    event.preventDefault();
    // to reset all values to empty in order to clear all tasks
    this.setState({
      list: [],
      done:[]
    })
    //to render again so it shows no tasks
    this.forceUpdate();
  }
  //this function enables the user to remove the tasks that was already done with
  removeDone = (event) =>{
    //to prevent the button from refershing again
    event.preventDefault();
    //to reset the doneTasks array to empty in order to remove doneTasks
    this.setState({
      done:[]
    })
    //to render again so the page won't show any doneTasks anymore
    this.forceUpdate();
  }
  // editTasks = (event) =>{
  //   // this.addItem(event);
  //   let itemUpdate = this.state.list.indexOf(event.targe);
  //   console.log(itemUpdate)
  //   // this.state.list[itemUpdate] = this.state.item;
  // }
  // this function is to display the time from moment.js library and to render it everytime is called
   tick= () =>{
    const element = (

        <h3> {moment().format('LTS')} </h3>

    );
    ReactDOM.render(element, document.getElementById('timeTable'));
  }
  
  
  render() {
    //this function is to call the tick(time) function every second (1000 stands for milisecond)
    setInterval(this.tick, 1000)
    // the var to pass all the lists' item to the List component and to pass the function toRemove so it can be used.
    let listItems = this.state.list.map((item) => <List item={item} toRemove={this.toRemoveList} doneItem={this.doneItem} editTasks={this.editTasks}/>)
    let doneItems = this.state.done.map((item) => <Done item={item} toRemove={this.toRemoveDone} unDoneItem={this.unDoneItem}/>)
    return (
      <div>
        <h1 >To Do List </h1>
        <form onSubmit={this.addToList}>
          <input type="text" name="item" onChange={this.addItem} value={this.state.item}></input>
          <button type="submit" className="addPress">Add</button>
        </form>
        <div className="editing">
            <button onClick={this.removeDone} className="editButtons">remove completed tasks</button>
            <button onClick={this.removeAll} className="editButtons">delete All tasks</button>
        </div>
        <div className="container">
          <div className="row">
              <div className="col" id="timeTable">
                 
              </div>
          </div>
          <div className="row" id="space">
            <div className="col tasks">
              <h2>Tasks</h2>
              {listItems}
            </div>
            
            <div className="col done">
              <h2>Completed</h2>
              {doneItems}
            </div>
          </div>
        </div>
        <footer >
            <span> created by Saud Almutairi  </span>
            <div>
                <a href="https://twitter.com/saud95t"><img className="contactMe"src={twitter} alt="myTwitterPage"/></a>
                <a href="https://github.com/saud9030"><img className="contactMe" src={github} alt="myGithubPage"/></a>
                <a href="https://www.linkedin.com/in/saud-almutairi-74a19b152/"><img className="contactMe" src={linkedin} alt="myLinkedinPage" /></a>
            </div>
            
            
        </footer>
      </div>
    );
  }
}

export default App;


//moment().format('LTS')
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from './Todo.js'

class App extends React.Component {
	constructor(props){
		super(props);		
		this.state = {items: [{text:"Learn React", priority:5, dueDate: "20" },
          {text:"Learn about APIs", priority:4, dueDate: "30" },
          {text:"write TODO App", priority:3, dueDate: "40"}], text: "", priority: 0, dueDate:0};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSumbitChange = this.handleSumbitChange.bind(this);
        		
	}
	
	handleInputChange(e){
		this.setState({
			[e.target.name]: e.target.value
		});
		console.log(this.state)
	}
	
	handleSumbitChange(e){
		e.preventDefault();
		const newItem = {
			text: this.state.text,
			priority: this.state.priority,
			dueDate: this.state.dueDate
		};
		this.setState(prevState => ({
		items: prevState.items.concat(newItem),
		text: '',
		priority: this.state.priority,
		dueDate: this.state.dueDate
		}));		
	}
	
	
	
  render() {
	  		  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
		  <TodoList todoList={this.state.items}/>
		  <form onSubmit={this.handleSumbitChange}>		 
			<input id="new-text" name = "text" Value="New Task" onChange={this.handleInputChange}/>
			<p></p>
			<input id="new-priority" name = "priority" Value="Priority" onChange={this.handleInputChange}/>
			<p></p>
			<input id="new-dueDate" name = "dueDate" Value="Due Date" onChange={this.handleInputChange}/>
			<p></p>
			<button> Agregar </button>			
		  </form>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>		
      </div>
	  
    );
  }
}

export default App;

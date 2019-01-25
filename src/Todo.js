import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   
	
    render() {
        return (  
          //Add your code here to represent a TODO
		  <div>
		  <h2>{this.props.text}</h2>
		  <h2>{this.props.priority}</h2>
		  <h2>{this.props.dueDate}</h2>
		  </div>
        );
    }

}

export class TodoList extends React.Component{	
	constructor(props){
		super(props);
	}
	
	render(){
		const listItems = this.props.todoList.map((texto) =>
			<li>{texto.text} Priority:{texto.priority} DueDate: {texto.dueDate}</li>
		);
		return(
			<ul>{listItems}</ul>
		);
	}
}






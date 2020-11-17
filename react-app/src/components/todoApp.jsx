import React from 'react'

import axios from "axios";

import TodoItems from "./todoItems";
import TodoItem from "./todoItem";

class TodoApp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todoItems: []
        };
        this.getTodoItems = this.getTodoItems.bind(this);
    }
    componentDidMount() {
        this.getTodoItems();
    }
    getTodoItems() {
        // axios
        //     .get("/api/v1/todo_items")
        //     .then(response => {
        //       const todoItems = response.data;
        //       this.setState({ todoItems });
        //     })
        //     .catch(error => {
        //       console.log(error);
        //     });
    }
    render() {
        return (
            <TodoItems>
                {this.state.todoItems.map(todoItem => (
                    <TodoItem key={todoItem.id} todoItem={todoItem} />
                ))}
            </TodoItems>
        );
    }
}

export default TodoApp
/**
 * Challenge: 
 * 1. Create an event handler in the App component for when the checkbox is clicked (which is an `onChange` event)
 *    a. This method will be the trickest part. Check the comments in the stubbed-out method below for some pseudocode to help guide you through this part
 * 2. Pass the method down to the TodoItem component
 * 3. In the TodoItem component, make it so when the `onChange` event happens, it calls the `handleChange` method and passes the id of the todo into the function
 */

import React from "react"
import TodoItem from "./components/ToDoItem"
import todosData from "./components/todosData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {

        this.setState((prevState) => {
            const updatedToDos = prevState.todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed; 
                }
                return todo;
            })
            return {
                todos: updatedToDos
            }
        });
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem handleChange={this.handleChange} key={item.id} item={item}/>)
        
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )    
    }
}

export default App

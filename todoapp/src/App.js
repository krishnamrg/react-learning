import React, { Component } from "react";
import Todos from "./Todos"
import AddTodo from "./AddTodo";

class App extends Component {
  
  state = {
    todos: [
      { id: 1, content: "attend meeting at 16:30" },
      { id: 2, content: "need to get the groceries" },
      { id: 3, content: "buy medicines" },
      { id: 4, content: "pick up kids on the way to home" },
      { id: 5, content: "important update eod" }
    ]
  }

  completeTodo = (id) => {
    const todos = this.state.todos.filter(todo => todo.id!==id);
    this.setState({todos});
  }

  addTodo = (todo) => {
    const todos = [...this.state.todos, todo];
    this.setState({todos});
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <div>
          <Todos todos={this.state.todos} completeTodo={this.completeTodo}></Todos>
          <AddTodo addTodo={this.addTodo}></AddTodo>
        </div>
      </div>
    );
  }
}

export default App;

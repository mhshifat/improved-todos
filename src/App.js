import React, { Component } from "react";

import TodoLists from "./components/TodoLists";
import TodoForm from "./components/TodoForm";

class App extends Component {
  state = {
    todos: []
  };

  handleTodoFormSubmit = (e, todo) => {
    e.preventDefault();
    const newTodos = [todo, ...this.state.todos];
    this.setState({ todos: newTodos });
  };

  removeTodo = todo => () => {
    const newTodosList = this.state.todos.filter(t => t !== todo);
    this.setState({ todos: newTodosList });
  };

  updateTodo = (index, todo) => {
    const filteredTodo = this.state.todos.filter((_, i) => i === index)[0];
    const newTodo = this.state.todos.filter(todo => todo !== filteredTodo);
    this.setState({ todos: [todo, ...newTodo] });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="container">
        <h1>Todo List!</h1>
        <p>A Simple React Todo List App.</p>
        <div className="underline" />
        <TodoLists
          todos={todos}
          remove={this.removeTodo}
          update={this.updateTodo}
        />
        <TodoForm submit={this.handleTodoFormSubmit} />
      </div>
    );
  }
}

export default App;

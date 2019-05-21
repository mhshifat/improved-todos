import React, { Component } from "react";

class TodoForm extends Component {
  state = {
    todo: ""
  };

  handleInputChange = e => {
    this.setState({ todo: e.target.value });
  };

  handleFormSubmit = e => {
    this.props.submit(e, this.state.todo);
    this.setState({ todo: "" });
  };

  render() {
    const { todo } = this.state;
    return (
      <div className="todo-container">
        <h3>New Todo</h3>
        <form onSubmit={this.handleFormSubmit} className="todo-form">
          <input
            type="text"
            name="todo"
            value={todo}
            onChange={this.handleInputChange}
            placeholder="New Todo"
          />
          <button>ADD TODO</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;

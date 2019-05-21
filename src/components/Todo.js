import React, { Component } from "react";

class Todo extends Component {
  state = {
    showTodo: true,
    updateTodo: this.props.todo
  };

  handleTodoDoubleClick = () => {
    this.setState({ showTodo: false });
  };

  handleInputBlur = () => {
    this.setState({ showTodo: true });
    this.props.update(this.props.id, this.state.updateTodo);
  };

  renderTodo = () => {
    const { todo, remove } = this.props;
    return (
      <div className="todos-item-show">
        <h4 onDoubleClick={this.handleTodoDoubleClick}>{todo}</h4>
        <i className="fas fa-trash" onClick={remove(todo)} />
      </div>
    );
  };

  handleInputChange = e => {
    this.setState({ updateTodo: e.target.value });
  };

  showTodoForm = () => {
    const { updateTodo } = this.state;
    return (
      <div className="todos-item-form">
        <input
          type="text"
          name="updateTodo"
          value={updateTodo}
          autoFocus
          onBlur={this.handleInputBlur}
          onChange={this.handleInputChange}
        />
      </div>
    );
  };

  render() {
    const { showTodo } = this.state;
    return (
      <li className="todos-item">
        {showTodo ? this.renderTodo() : this.showTodoForm()}
      </li>
    );
  }
}

export default Todo;

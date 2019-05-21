import React, { Component } from "react";

import Todo from "./Todo";

class TodoLists extends Component {
  renderTodos = () => {
    const { todos, remove, update } = this.props;
    if (todos.length > 0) {
      return todos.map((todo, i) => (
        <Todo key={i} id={i} todo={todo} remove={remove} update={update} />
      ));
    } else {
      return (
        <p className="not-found-message">==> No Todos Remain To Complete</p>
      );
    }
  };
  render() {
    return <ul className="todos">{this.renderTodos()}</ul>;
  }
}

export default TodoLists;

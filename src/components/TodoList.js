import React, { Component } from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";

class TodoList extends Component {
  deleteTodo(index) {
    this.props.del(index);
  }

  render() {
    return (
      <div>
        <h5>Todo List</h5>
        <ul>
          {
            this.props.todos.map((todo, index) => {
              return (
                <TodoItem
                  todo={todo}
                  index={index}
                  key={index}
                  del={this.deleteTodo.bind(this)}
                ></TodoItem>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodoList);

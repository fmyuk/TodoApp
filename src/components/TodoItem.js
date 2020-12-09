import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../actions/todoActions";

class TodoItem extends Component {
  clickDeleteTodo(index) {
    this.props.deleteTodo(index);
  }

  render() {
    return (
      <li>
        {this.props.todo}
        <button onClick={this.clickDeleteTodo.bind(this, this.props.index)}>DEL</button>
      </li>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (index) => dispatch(deleteTodo(index))
  }
}

export default connect(null, mapDispatchToProps)(TodoItem);

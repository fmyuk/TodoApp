import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/todoActions";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ""
    }
  }

  handleChange(e) {
    this.setState({ newTodo: e.target.value });
  }

  addTodo() {
    if (this.state.newTodo === "") return;
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: "" });
  }

  render() {
    return (
      <div>
        <h3>My Todo</h3>
        <input value={this.state.newTodo}
          onChange={this.handleChange.bind(this)}
          placeholder="Input here..."
        />
        <button onClick={this.addTodo.bind(this)}>ADD</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => dispatch(addTodo(text))
  }
}

export default connect(null, mapDispatchToProps)(TodoForm);

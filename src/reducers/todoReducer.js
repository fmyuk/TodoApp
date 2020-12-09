const initState = {
  todos: []
}

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, action.text]
      };
    case "DELETE_TODO":
      const todos = [...state.todos];
      todos.splice(action.index, 1);
      return {
        todos: todos
      };
    default:
      return state;
  }
}

export default todoReducer;

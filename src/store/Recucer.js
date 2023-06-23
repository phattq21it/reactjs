import { SET_TODO_INPUT } from "./constants";
import { ADD_TODO_INPUT } from "./constants";
const initState = {
  todos: [],
  todoInput: "",
};
function reducer(state, actions) {
  switch (actions.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: actions.payload,
      };
    case ADD_TODO_INPUT:
      return {
        ...state,
        todos: [...state.todos, actions.payload],
      };
      throw new Error("Invalid Error...");
  }
}
export default reducer;
export { initState };

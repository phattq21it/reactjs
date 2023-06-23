import { useStore, action } from "./store";

function App() {
  const [state, dispath] = useStore();
  const { todos, todoInput } = state;

  const handleADD = () => {
    dispath(action.addTodo(todoInput));
  };

  console.log("todoInput:", state);
  return (
    <div style={{ margin: "20px" }}>
      <input
        value={todoInput}
        placeholder="Enter todo..."
        onChange={(e) => {
          dispath(action.setTodoInput(e.target.value));
        }}
      />
      <button onClick={handleADD}>ADD</button>
      {todos.map((todo, index) => (
        <li>{todo}</li>
      ))}
    </div>
  );
}

export default App;

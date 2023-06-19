import DemoUCallback from "./DemoUCallback";
import UseMemoHook from "./UseMemoHook";
import UseReducerHook from "./UseReducerHook";
import DemoUseReducer from "./DemoUseReducer";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div style={{ margin: "20px" }}>
      <DemoUCallback props={handleCount} />
      <h1>{count}</h1>
      <UseMemoHook />
      <UseReducerHook />
      <DemoUseReducer />
    </div>
  );
}

export default App;

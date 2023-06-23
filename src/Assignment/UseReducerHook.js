import { useReducer, useState } from "react";
//userReducer
// 1.init state
const initState = 0;
// 2.Action
const UP_ACTION = "up";
const DOWN_ACTION = "down";
// 3.Reduce
const reducer = (state, action) => {
  console.log("reducer running");
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("Invalid Action");
  }
};
// 4.Dispath

function UseReducerHook() {
  const [count, dispath] = useReducer(reducer, initState);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispath(DOWN_ACTION)}>Down</button>
      <button onClick={() => dispath(UP_ACTION)}>Up </button>
    </>
  );
}
export default UseReducerHook;

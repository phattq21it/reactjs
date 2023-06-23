import reducer from "./Recucer";

function logger(Recucer) {
  return (prevState, action) => {
    console.group(action.type);
    console.log("prev state:", prevState);
    console.log("Action :", action);
    const nextState = reducer(prevState, action);

    console.groupEnd();
    return nextState;
  };
}
export default logger;

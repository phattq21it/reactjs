import memo from "react";
import { useReducer } from "react";

//init state
const initState = {
  job: "",
  jobs: [],
};
//Action
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";
//Reducer

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};
const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};
const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};
const reducer = (state, action) => {
  //   console.log("prev state:", state);
  let newState;
  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload,
      };
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
      break;
    case DELETE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      newState = {
        ...state,
        jobs: newJobs,
      };
      break;
    default:
      throw new Error("invalid action");
  }
  console.log("new state:", newState);
  return newState;
};
function DemoUseReducer() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;
  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
  };
  return (
    <div>
      <h3>To Do</h3>
      <input
        placeholder="Enter todo..."
        value={job}
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
      ></input>
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job} <span onClick={() => dispatch(deleteJob(job))}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default DemoUseReducer;

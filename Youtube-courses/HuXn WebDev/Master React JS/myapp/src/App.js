import { useReducer } from "react";

// state: It's the state of our application
// dispatch: [value setValue]

// reducer: Custom State Logic
// initialState: {}

const App = () => {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({type: "Increment"})}>+</button>
      <button onClick={() => dispatch({type: "Decrement"})}>_</button>
      <button onClick={() => dispatch({type: "Reset"})}>Reset</button>
    </>
  );
}

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return {
        ...state,
        count: state.count + 1,
      };

    case "Decrement":
      return {
        ...state,
        count: state.count - 1,
      };

    case "Reset":
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};

export default App;
// useReducer() Hook

// useReducer is a hook in React that is similar to useState, but it is designed for more complex state objects or state transitions that involve multiple sub-values. It allows you to manage state in a functional, immutable way.

import { useReducer } from "react";

// state: It's the state of our application
// dispatch: [value setValue]

// reducer: Custom State Logic
// initialState: {}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "Increment" })}>+</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </>
  );
};

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
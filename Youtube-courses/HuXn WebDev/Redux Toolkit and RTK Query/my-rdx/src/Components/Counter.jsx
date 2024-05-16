// useSelector() Hook

// useSelector hook allows us to read data from the redux store.

// useDispatch() Hook

// The dispatch function is used to send actions to the store, triggering updates to the application state.

// In simple terms, it lets you change the state in your Redux store from within your React components.

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../app/features/counter/counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={dispatch(increment())}>Increment</button>
        <button onClick={dispatch(decrement())}>Decrement</button>
      </div>
    </>
  );
}
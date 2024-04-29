// The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.

// Hooks

// Hooks are a new addition in React 16.8 they let you use state and other React features without writing a class.

// useState()

// The React useState Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application.

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementHandler = () => setCount(count + 1);
  const decrementHandler = () => setCount(count - 1);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => incrementHandler()}>+</button>
      <button onClick={() => decrementHandler()}>-</button>
    </>
  );
};

const App = () => {
  return (
    <>
      <Counter />
    </>
  );
};

export default App;
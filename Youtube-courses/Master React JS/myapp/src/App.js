import { useState } from "react";

const Counter = () => {
  const [ username, setUsername ] = useState("Unknown");

  const changeName = () => {
    setUsername("Irineu");
  };

  return (
    <>
      <h1>{username}</h1>
      <button onClick={() => changeName()}>Change Name</button>
    </>
  );
}

const App = () => {
  return (
    <>
      <Counter />
    </>
  )
}

export default App;
import { useState } from "react";

const Counter = () => {
  const [ friends, setFriends ] = useState(["Alex", "John"]);

  const addOne = () => {
    setFriends([...friends, "Irineu"]);
  };

  const removeOne = () => {
    setFriends(friends.filter(f => f !== "John"));
  };

  const updateOne = () => {
    setFriends(friends.map(f => f === "Alex" ? "Alex Smith" : f));
  };

  return (
    <>
      <ul>
        {friends.map(f => {
          return <li key={Math.random()}>{f}</li>;
        })}
      </ul>

      <button onClick={() => addOne()}>Add One</button>
      <button onClick={() => removeOne()}>Remove One</button>
      <button onClick={() => updateOne()}>Update One</button>
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
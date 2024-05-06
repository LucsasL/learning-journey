// The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.

// Hooks

// Hooks are a new addition in React 16.8 they let you use state and other React features without writing a class.

// useState()

// The React useState Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application.

import { useState } from "react";

// Counter Example
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

// Username Example
const Name = () => {
  const [ username, setUsername ] = useState("Unknown");

  const changeName = (name) => {
    setUsername(name);
  }

  return (
    <>
      <h1>{username}</h1>
      <button onClick={() => changeName("Irineu")}>Change Name</button>
    </>
  );
}

// Friends List Example
const Friends = () => {
  const [friends, setFriends] = useState(["Alex", "John"]);

  const addOne = () => {
    setFriends([...friends, "Irineu"]);
  };

  const removeOne = () => {
    setFriends(friends.filter((f) => f !== "John"));
  };

  const updateOne = () => {
    setFriends(friends.map((f) => (f === "Alex" ? "Alex Smith" : f)));
  };

  return (
    <>
      <ul>
        {friends.map((f) => {
          return <li key={Math.random()}>{f}</li>;
        })}
      </ul>

      <button onClick={() => addOne()}>Add One</button>
      <button onClick={() => removeOne()}>Remove One</button>
      <button onClick={() => updateOne()}>Update One</button>
    </>
  );
};

// Movie Example (Changing objects properties)
const Movie = () => {
  const [movie, setMovie] = useState({
    title: "Equalizer 3",
    ratings: 7,
  });

  const handleClick = () => {
    // const copyMovie = {
    //   ...movie,
    //   ratings: 5
    // }

    setMovie({ ...movie, ratings: 5 });
  };

  return (
    <>
      <h1>{movie.title}</h1>
      <p>Ratings: {movie.ratings}</p>

      <button onClick={handleClick}>Update Ratings</button>
    </>
  );
};

const App = () => {
  return (
    <>
      <Counter />
      <Name />
      <Friends />
      <Movie />
    </>
  );
};


export default App;
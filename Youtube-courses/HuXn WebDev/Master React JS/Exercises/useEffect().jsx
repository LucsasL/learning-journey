// useEffect()

// The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM
import { useEffect, useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);

  // 1. Render for the (first time)
  // 2, Anytime we do (side effect)
  // 3. Dependency List
  useEffect(() => {
    console.log("Hello");
    document.title = `Increment (${value})`;
  });

  return (
    <>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Click Me</button>
    </>
  );
};

const App2 = () => {
  const [data, setData] = useState([]);

  // 1. Render for the (first time)
  // 2, Anytime we do (side effect)
  // 3. Dependency List
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();

      if (data && data.length) setData(data);
    }

    getData();
  }, []);

  return (
    <>
      <ul>
        {data.map((di) => {
          return <li key={Math.random()}>{di.title}</li>;
        })}
      </ul>
    </>
  );
};

export default App;
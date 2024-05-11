// Custom Hooks

// You can create your own Hooks using useState() and useEffect() to determine what they will do

// Custom Hook
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((d) => setData(d));
  }, [url]);

  return [data];
};

// Main Component
import useFetch from "./Hooks/useFetch";

const App = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
      <button>Do something</button>
    </>
  );
};

export default App;
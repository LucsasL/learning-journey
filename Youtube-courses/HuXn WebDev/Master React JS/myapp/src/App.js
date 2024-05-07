import { useEffect, useState } from "react"; 

const App = () => {
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
  )
}

export default App;
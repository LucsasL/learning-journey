import useFetch from "./Hooks/useFetch";

const App = () => {
  const [data] = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return (
    <>
      {data && data.map(item => {
        return <p key={item.id}>{item.title}</p>;
      })}
      <button>Do something</button>
    </>
  );
}

export default App;
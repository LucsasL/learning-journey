import User from "./components/User";

function App() {
  return (
    <User
    img="https://avatars.githubusercontent.com/u85052811?v=4"
    name="Irineu Sabo"
    age={18}
    isMarried={false}
    hobbies={["Coding", "Reading", "Sleeping"]}
    />
  );
}

export default App;

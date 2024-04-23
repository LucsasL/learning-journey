import User from "./components/User";

function App() {
  return (
    <User
    img="https://avatars.githubusercontent.com/u85052811?v=4"
    name="Irineu Sabo"
    age={18}
    isMarried={false}
    hobbies={["Coding", "Reading", "Sleeping"]}
    >
      <h1>
        Hello I'm a children
      </h1>

      <p>
        Some random text because the lorem and the emmet isn't working.
      </p>

    </User>
  );
}

export default App;

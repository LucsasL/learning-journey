// In React, you will render lists with some type of loops. The JavaScript map() array method is generally the preferred method.

function App() {
  // Example #1
  const number = [1, 2, 3, 4, 5];

  // Example #2
  const userInfo = [
    {
      username: "Irineu",
      email: "test@example.com",
      location: "UK",
    },
    {
      username: "John",
      email: "js@example.com",
      location: "Arab",
    },

    {
      username: "Alex",
      email: "alek@example.com",
      location: "India",
    },
  ];

  return (
    <>
      {number.map((number) => (
        <ul key={Math.random() * 10}>
          <li>{number}</li>
        </ul>
      ))}

      {userInfo.map((user) => (
        <ul key={Math.random() * 10}>
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>{user.location}</li>
        </ul>
      ))}
    </>
  );
}

export default App;
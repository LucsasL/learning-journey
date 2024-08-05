import React from "react";

function ServerDataFetch() {
  const fetchData = async () => {
    let data = await fetch("https://jsonplaceholder.typicode.com/users");
    data = await data.json();

    console.log(data);
    return data;
  };

  let users = fetchData();

  return (
    <>
      <div>
        <ul>
          {users.map((u) => <li key={u.id}>{u.name}</li>)}
        </ul>
      </div>
    </>
  );
}

export default ServerDataFetch;

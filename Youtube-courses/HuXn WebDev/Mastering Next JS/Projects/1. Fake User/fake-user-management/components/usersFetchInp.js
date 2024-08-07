import React, { useEffect, useState } from "react";

function UsersFetchInp() {
  const [usersFetch, setUsersFetch] = useState("");
  const [userData, setUserData] = useState(null);

  const fetchUser = async (id) => {
    const res = await fetch(`/api/users/${id}`);

    if (res.ok) {
      const user = res.json();
      setUserData(user.data);
    }
  };

  return (
    <>
      <div>
        <label htmlFor="userFetchId">Enter user ID:</label> <br />
        <input
          type="text"
          id="userFetchId"
          placeholder="Search User"
          value={usersFetch}
          onChange={(e) => setUsersFetch(e.target.value)}
          required
        />
        <input type="submit" value="Search" onClick={() => fetchUser(userData)} />
      </div>

      <div>
        {userData ? (
          userData.map((u) => {
            return (
              <>
                <div className="userCard" key={u.id}>
                  <h1>{u.name}</h1>
                  <p>{u.age}</p>
                  <p>{u.email}</p>
                </div>
              </>
            );
          })
        ) : (
          <>
            <p>
              Search for a specific user
            </p>
          </>
        )}
      </div>
    </>
  );
}

export default UsersFetchInp;

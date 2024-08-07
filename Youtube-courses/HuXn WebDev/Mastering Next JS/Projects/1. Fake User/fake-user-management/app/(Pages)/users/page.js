"use client";

import UsersFetchInp from "@/components/usersFetchInp";
import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState();
  const [menuOpen, setMenuOpen] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("/api/users");
      const usersInfo = await response.json();

      setUsers(usersInfo.data);
    }

    fetchUsers();
  }, []);

  return (
    <>
      <div className="usersCont">
        {users &&
          users.map((u) => {
            return (
              <>
                <div className="userCard" key={u.id}>
                  <h1>{u.name}</h1>
                  <p>{u.age}</p>
                  <p>{u.email}</p>
                </div>
              </>
            );
          })}
      </div>

      <div>
        <UsersFetchInp />
      </div>
    </>
  );
}

export default Users;

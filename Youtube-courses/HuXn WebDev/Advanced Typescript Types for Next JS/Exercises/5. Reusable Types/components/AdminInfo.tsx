import React from "react";
import { type Info } from "./UserInfo";

const AdminInfo = ({ name, email, age, location, admin }: Info) => {
  return (
    <>
      <ul>
        <li>{name}</li>
        <li>{email}</li>
        <li>{age}</li>
        <li>{JSON.stringify(location)}</li>
        <li>{admin ? "Yes" : "No"}</li>
      </ul>
    </>
  );
}

export default AdminInfo;
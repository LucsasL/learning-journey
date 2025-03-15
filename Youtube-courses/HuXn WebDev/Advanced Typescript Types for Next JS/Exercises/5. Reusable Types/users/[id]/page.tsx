import React from 'react';

import UserInfo from "@/components/UserInfo";
import AdminInfo from "@/components/AdminInfo";

// Creating a type for params
type UserShape = {
  params: { id: number },
}

const User = ({ params: { id } }: UserShape) => {
  return (
    <>
      <h1>ID: {id}</h1>
      <UserInfo name="Alex" email="example@gmail.com" age={34} location={["Earth", "USA"]} />
      <AdminInfo name="huxn" email="huxn@gmail.com" age={20} location={["Earth", "India"]} admin={true} />
    </>
  );
}

export default User;
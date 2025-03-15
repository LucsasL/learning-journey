import React from "react";

export type Info = {
  name: string;
  email: string;
  age: number;
  location: string[];
  admin?: boolean;
};

const UserInput = ({ name, email, age, location }: Info) => {
  return (
    <>
      <ul>
        <li>{name}</li>
        <li>{email}</li>
        <li>{age}</li>
        <li>{JSON.stringify(location)}</li>
      </ul>
    </>
  );
};

export default UserInput;

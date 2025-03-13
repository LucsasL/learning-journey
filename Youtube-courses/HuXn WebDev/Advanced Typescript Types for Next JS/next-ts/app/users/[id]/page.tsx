import React from 'react';

// Creating a type for params
type UserShape = {
  params: { id: number },
}

const User = ({ params: { id } }: UserShape) => {
  return (
    <div>User {id}</div>
  );
}

export default User;
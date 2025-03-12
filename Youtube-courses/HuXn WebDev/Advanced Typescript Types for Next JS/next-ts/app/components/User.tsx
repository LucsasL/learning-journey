import React, { FC } from "react";

// Functional Component (FC) Type
type Shape = {
  name: string,
  age: number,
}

const User: FC<Shape> = ({ name, age }) => {
  return (
    <>
      <main>
        <h1>
          {name}, {age}
        </h1>
      </main>
    </>
  );
}

export default User;

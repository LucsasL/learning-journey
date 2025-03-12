// There are two ways to attach types to props in TypeScript
import React from "react";

// The first way: Providing Inline

// In the first example, we created a variable which stores all the properties within an object (that in this case, it's called props), then we assigned types to each of the properties inside of it
function User(props: {
  name: string;
  age: number;
  email: string;
  isStudent: boolean;
}) {
  return (
    <>
      <main>
        <h1>{props.name}</h1>
        <h2>{props.age}</h2>
        <h2>{props.email}</h2>
        <h2>{props.isStudent ? "Is student" : "Is not a student"}</h2>
      </main>
    </>
  );
}

// The second way: Destructuring object

// In the second example, we destructured it in single variables with their own names, and assigned a type for each one individually, like a default type declaration in TypeScript:

// type Example = {
//   name: string,
//   randNumber: number
// }

// export default Component({ name, age, email, ... }: { name: string, ... })

export function User2({
  name,
  age,
  email,
  isStudent,
}: {
  name: string;
  age: number;
  email: string;
  isStudent: boolean;
}) {
  return (
    <>
      <main>
        <h1>{name}</h1>
        <h2>{age}</h2>
        <h2>{email}</h2>
        <h2>{isStudent ? "Is student" : "Is not a student"}</h2>
      </main>
    </>
  );
}

// Optmizing the code: Creating type/interface as assignment

// As said above, assigning a type to each propertie in a component is like creating a type in TypeScript, so why not enhance this code just by changing the declaration of place? It's way more readable and efficient

// Declaring type for assignment
type UserShape = {
  name: string,
  age: number,
  email: string,
  isStudent: boolean,
}

// Interfaces can also be used
interface UserShape2 {
  name: string,
  age: number,
  email: string,
  isStudent: boolean,
}

// Component using type to determine props
export function User3({ name, age, email, isStudent }: UserShape | UserShape2) {
  return (
    <>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h2>{email}</h2>
      <h2>{isStudent ? "Is student" : "Is not a student"}</h2>
    </>
  );
}

export default User;

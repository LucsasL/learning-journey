import { useContext } from "react";
import { Data, Data2 } from "../App";

const ComponentC = () => {
  const name = useContext(Data);
  const age = useContext(Data2);
  return (
    <>
      <h1>
        My name is: {name} and i'm {age} years old
      </h1>
    </>
  );
};

export default ComponentC;
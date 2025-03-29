import React, { useContext } from "react";
import { MyContext } from "@/context/MyContext";

const MyComponent = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("MyContext must be used within a MyContextProvider.");
  }

  const { value, setValue } = context;

  return (
    <>
      <p>Value: {value}</p>

      <input
        type="text"
        placeholder="Enter something"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
    </>
  );
};

export default MyComponent;

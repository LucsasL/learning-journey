// useContext()

// React Context is a way to manage state globally. It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

// Main App
export const Data = createContext();
export const Data2 = createContext();

// Context API
// userContext() Hook

const App = () => {
  const name = "Irineu";
  const age = 25;

  return (
    // 3. Wrap the createContext Component into the Provider Component
    <>
    <Data.Provider value={name}>
      <Data2.Provider value={age}>
        <ComponentC />
      </Data2.Provider>
    </Data.Provider>
    </>
  );
}

// Component C
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
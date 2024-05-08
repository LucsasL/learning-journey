// 1. Import (createContext)
import { createContext } from "react";
import ComponentC from "./components/componentC";

// 2. Create an instance of (createContext)
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
        <ComponentC />
      </Data.Provider>
    </>
  );
};

export default App;

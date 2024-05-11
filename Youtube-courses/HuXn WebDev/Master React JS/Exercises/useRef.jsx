// useRef() Hook

// useRef is a hook in React that allows you to access the properties of a DOM element. It is useful when you need to access the value of an element, or the current dimensions of an element.

import { useRef } from "react";

const App = () => {
  const inputElement = useRef(null);

  const focusInput = () => {
    console.log(inputElement);
    inputElement.current.focus();
    inputElement.current.value = "Irineu";
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={() => focusInput()}>Focus and Write Irineu</button>
    </>
  );
};

export default App;
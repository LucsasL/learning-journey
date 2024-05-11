import { useState } from "react";
import "../styles/style.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const clickHandler = (act) => {
    switch (act) {
      case "Increment":
        setCount(count + 1);
        return;

      case "Decrement":
        setCount(count - 1);
        return;

      case "Reset":
        setCount(0);
        return;

      default:
        return;
    }
  }

  document.addEventListener("keypress", (e) => {
    switch (e.key) {
      case "+":
        console.log(e.key);
        clickHandler("Increment");
        return;

      case "-":
        console.log(e.key);
        clickHandler("Decrement");
        return;

      case "Backspace":
        console.log(e.code);
        clickHandler("Reset");
        return;

      default:
        return;
    }
  });

  return (
    <>
      <div className="container">
        <h1 className="number">{count}</h1>
      </div>

      <section>
        <button onClick={() => clickHandler("Increment")}>+</button>
        <button onClick={() => clickHandler("Decrement")}>-</button>
        <button onClick={() => clickHandler("Reset")}>Reset</button>
      </section>
    </>
  )
}

export default Counter;
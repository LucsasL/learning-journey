import { useState } from "react";
import "../styles/style.css";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");

  function display(value, e) {
    e.preventDefault();
    setInputValue(inputValue + value);
  }

  function calculate(e) {
    e.preventDefault();
    let answers = eval(inputValue);
    setInputValue(answers);
  }
  
  function eraseDigit(value, e) {
    e.preventDefault();
    let chars = value.split("");
    chars.pop();
    setInputValue(chars.join(""));
  }

  function clear() {
    setInputValue("");
  }

  return (
    <>
      <section>
        <form name="calc" className="calculator">
          <input
            type="text"
            className="value"
            value={inputValue}
            onChange={inp => display(inp)}
          ></input>
          <div>
            <button onClick={(e) => clear()}>
              C
            </button>
            <button onClick={(e) => clear()}>
              C
            </button>
            <button onClick={(e) => eraseDigit(inputValue, e)}>
              &lt;
            </button>
            <button onClick={(e) => display("*", e)}>
              *
            </button>
            <button onClick={(e) => display("1", e)}>
              1
            </button>
            <button onClick={(e) => display("2", e)}>
              2
            </button>
            <button onClick={(e) => display("3", e)}>
              3
            </button>
            <button onClick={(e) => display("/", e)}>
              /
            </button>
            <button onClick={(e) => display("4", e)}>
              4
            </button>
            <button onClick={(e) => display("5", e)}>
              5
            </button>
            <button onClick={(e) => display("6", e)}>
              6
            </button>
            <button onClick={(e) => display("-", e)}>
              -
            </button>
            <button onClick={(e) => display("7", e)}>
              7
            </button>
            <button onClick={(e) => display("8", e)}>
              8
            </button>
            <button onClick={(e) => display("9", e)}>
              9
            </button>
            <button onClick={(e) => display("+", e)}>
              +
            </button>
            <button onClick={(e) => display(".", e)}>
              .
            </button>
            <button onClick={(e) => display("0", e)}>
              0
            </button>
            <button>
              %
            </button>
            <button onClick={(e) => calculate(e)}>
              =
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Calculator;
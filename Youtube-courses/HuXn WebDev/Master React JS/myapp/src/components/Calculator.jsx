import { useEffect, useState } from "react";
import "../styles/style.css";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");

  useEffect(display, );

  function display(value) {
    setInputValue(inputValue + value);
  }

  function calculate() {
    let answers = eval(inputValue);
    setInputValue(answers);
  }

  function clear() {
    setInputValue("");
  }

  return (
    <>
      <form name="calc" className="calculator">
        <input type="text" className="value" value={inputValue}></input>

        <div>
          <button>
            C
          </button>

          <button onClick={() => clear()}>
            CE
          </button>

          <button>
            &lt;
          </button>

          <button onClick={() => display("*")}>
            *
          </button>

          <button onClick={() => display("1")}>
            1
          </button>

          <button onClick={() => display("2")}>
            2
          </button>

          <button onClick={() => display("3")}>
            3
          </button>

          <button onClick={() => display("/")}>
            /
          </button>

          <button onClick={() => display("4")}>
            4
          </button>

          <button onClick={() => display("5")}>
            5
          </button>

          <button onClick={() => display("6")}>
            6
          </button>

          <button onClick={() => display("-")}>
            -
          </button>

          <button onClick={() => display("7")}>
            7
          </button>

          <button onClick={() => display("8")}>
            8
          </button>

          <button onClick={() => display("9")}>
            9
          </button>

          <button onClick={() => display("+")}>
            +
          </button>

          <button onClick={() => display(".")}>
            .
          </button>

          <button onClick={() => display("0")}>
            0
          </button>

          <button>
            %
          </button>

          <button onClick={() => calculate()}>
            =
          </button>
        </div>
      </form>
    </>
  )
}

export default Calculator;
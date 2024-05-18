import { useState, useRef } from "react";
import "../styles/style.css";

const TodoList = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const inp = useRef();

  function handleSubmit() {
    setList(li => 
      li.concat({
        text: input,
        id: 2,
      })
    );
    setInput("");
    inp.current.focus();
  }

  return (
    <>
      <section className="container">
        <ul>
          {
            list.map(li => {
              return <li key={li.id}>{li.text}</li>;
            })
          }
        </ul>

        <div>
          <input
            type="text"
            value={input}
            placeholder="Enter your new todo"
            onChange={(e) => setInput(e.target.value)}
            ref={inp}
          ></input> <br />

          <button onClick={() => handleSubmit()}>Add a list item</button>
        </div>
      </section>
    </>
  );
};

export default TodoList;

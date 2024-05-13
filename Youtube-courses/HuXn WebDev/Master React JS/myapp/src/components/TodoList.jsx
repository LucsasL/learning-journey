import { useState } from "react";

import "../styles/style.css";

const TodoList = () => {
  const [list, setList] = useState(["t", "e", "s", "t"]);
  const [input, setInput] = useState("");

  function handleSubmit(newLi) {
    setList(li => {
      li.concat({
        text: newLi,
        id: Math.floor(Math.random()),
      });
      setInput("");
    });
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
            placeholder="Enter your input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input> <br />
          <button onClick={() => handleSubmit("tet")}>Add a list item</button>
          {/* <button onClick={() => handleRemove()}>Reset List</button> */}
        </div>
      </section>
    </>
  );
};

export default TodoList;

import { useState, useRef } from "react";
import "../styles/style.css";

const TodoList = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const inp = useRef();
  let numId = 0;

  const generateId = () => {
    numId++;
    return numId;
  }

  const removeTodo = (id) => {
    setList((todos) => todos.filter((item) => item.id !== id));
  }

  function handleSubmit() {
    setList(li => 
      li.concat({
        text: input,
        id: generateId(),
      })
    );
    setInput("");
    inp.current.focus();
  }

  return (
    <>
      <section className="container">
        <div className="inpCont">
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
        </div>

        <ul>
          {
            list.map(li => {
              return (
                <li key={li.id}>
                  <span>{li.text}</span>
                  <button
                    className="remButt"
                    onClick={() => removeTodo(li.id)}
                  >X</button>
                </li>
              );
            })
          }
        </ul>

      </section>
    </>
  );
};

export default TodoList;

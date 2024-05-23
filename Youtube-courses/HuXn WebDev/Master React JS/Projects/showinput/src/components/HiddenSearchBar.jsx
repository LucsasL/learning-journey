import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../styles/style.css";

const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState("");
  const [bgColor, setBgColor] = useState("black");

  function changeHandle(showInput) {
    setShowInput(showInput);
  }

  function handleClick(e) {
    setBgColor("#1a1a1a");

    if (e.target.className === "container") {
      setShowInput(false);
      setBgColor("#fff");
    }
  }

  return (
    <>
      <section
        className="container" 
        onClick={(e) => handleClick(e)}
        style={{ background: bgColor }}
      >
        <form>
          {
            showInput ? (
              <input 
                type="text"
                value={showInput}
                placeholder="Search..."
                onChange={() => changeHandle(showInput)}
              />) : (
              <FaSearch onClick={() => setShowInput(true)}/>
            )
          }
        </form>
      </section>
    </>
  )
}

export default HiddenSearchBar;
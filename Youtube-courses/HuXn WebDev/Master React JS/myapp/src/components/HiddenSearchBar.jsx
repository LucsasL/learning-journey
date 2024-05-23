import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../styles/style.css";

const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("#fafafa");

  const handleClick = e => {
    setBgColor("#060606");

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
                placeholder="Search..."
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
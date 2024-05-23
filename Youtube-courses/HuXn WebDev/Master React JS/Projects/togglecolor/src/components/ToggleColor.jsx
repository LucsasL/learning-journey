import { useState } from "react";
import "../styles/style.css";

const ToggleColor = () => {
  const [bgColor, setBgColor] = useState("#060606");
  const [color, setColor] = useState("blue");

  function changeTheme() {
    setBgColor(bgColor === "#fafafa" ? "#060606" : "#fafafa");
    setColor(color === "blue" ? "red" : "blue");
  }

  return (
    <>
      <section className="section" style={{ background: bgColor }}>
        <div className="toggleDiv">
          <input type="checkbox" id="toggle" onClick={() => changeTheme()} />
          <label
            htmlFor="toggle"
            style={{ background: color }}
          ></label>
        </div>

        <div>
          <h1
            style={{ color: color }}
          >
            Hello, World!
          </h1>
        </div>
      </section>
    </>
  );
}

export default ToggleColor;
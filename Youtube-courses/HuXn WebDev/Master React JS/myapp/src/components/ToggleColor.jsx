import { useState } from "react";
import "../styles/style.css";

const ToggleColor = () => {
  const [bgColor, setBgColor] = useState("#060606");
  const [color, setColor] = useState(
    "linear-gradient(to right ,blue ,#8000ff)"
  );

  function changeTheme(inp) {
    setBgColor("white");
    setColor("linear-gradient(to right, red, rgb(255, 98, 0))");
  }

  return (
    <>
      <section className="section" style={{ background: bgColor }}>
        <div className="toggleDiv">
          <input type="checkbox" id="toggle" onClick={() => changeTheme()} />
          <label
            htmlFor="toggle"
            style={{ background: color, color: "transparent" }}
          ></label>
        </div>

        <div>
          <h1 style={{ background: color, backgroundClip: "text" }}>
            Hello, World!
          </h1>
        </div>
      </section>
    </>
  );
}

export default ToggleColor;
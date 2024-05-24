import { useState } from "react";
import "../styles/style.css";

const Accordion = ({ quote }) => {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
  }

  return (
    <>
      <section className="container">
        {isActive ? (
          <>
            <p onClick={() => handleClick()}>{quote}</p>
          </>
        ) : (
          <>
            
            <p onClick={() => handleClick()}>+</p>
          </>
        )}
      </section>
    </>
  );
}

export default Accordion;
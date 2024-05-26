import { useState } from "react";
import "../styles/style.css";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div 
        className="cardContainer" 
        onClick={() => setIsActive(!isActive)}
      >
        <div className="header">
          <h1>
            {title}
          </h1>
          <button>
            {isActive ? "-" : "+"}
          </button>
        </div>

        <div className="content">
          {isActive && <p className="cardInfo">{content}</p>}
        </div>
        </div>
    </>
  );
}

export default Accordion;
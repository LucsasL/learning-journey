// First Example
const Button = () => {
  const buttonStyle = {
    background: "blue",
    width: "200px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "20px",
    outline: "none",
    boxShadow: "0px 0px 10px black",
    cursor: "pointer",
  };

  const handleClick = (a, b) => {
    console.log(a + b);
    alert(`${a} + ${b} = ${a + b}`);
  };

  return (
    <button style={buttonStyle} onClick={() => handleClick(2, 2)}>
      Click
    </button>
  );
};

// Second Example
const Copy = () => {
  const copyHandler = () => {
    alert("Stop stealing my content!");
    console.log("Yo! Stop stealing my content!");
  };

  return (
    <>
      <p onCopy={() => copyHandler()}>
        Lorem doesn't seem to work in the JSX File, so I'll just add this random
        text to take some space.
      </p>
    </>
  );
};

// Third Example
const Move = () => {
  const moveHandler = () => {
    alert(
      "Hey, why are you moving around my text like that? You aren't thinking of stealing my text, are you?"
    );
  };

  return (
    <>
      <p onMouseMove={() => moveHandler()}>
        Lorem doesn't seem to work in the JSX File, so I'll just add this random
        text to take some space.
      </p>
    </>
  );
};

function App() {
  return (
    <>
      <Button />
      <Copy />
      <Move />
    </>
  );
}

export default App;

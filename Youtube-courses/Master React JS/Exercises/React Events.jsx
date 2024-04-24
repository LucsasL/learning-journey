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

function App() {
  return (
    <>
      <Button />
    </>
  );
}

export default App;

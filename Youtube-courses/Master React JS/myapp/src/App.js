import "./index.css";

const Style = () => {
  const headerStyle = {
    background: "#8000ff",
    color: "black",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <>
      {/* Inline style */}
      <h1
        style={{
          fontFamily: "Arial, sans-serif",
          color: "black",
          backgroundColor: "blue",
          padding: "20px",
        }}
      >
        Inline Style in React
      </h1>

      {/* Variable style */}
      <h2 style={headerStyle}>Something here</h2>

      {/* Exterior Style */}
      <h3>I'm fine with adding Styles</h3>
    </>
  );
};

function App() {
  return (
    <>
      <Style />
    </>
  );
}

export default App;

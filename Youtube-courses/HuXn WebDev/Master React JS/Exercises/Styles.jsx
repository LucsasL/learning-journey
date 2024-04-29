import "../myapp/src/index.css";

function Style() {
    const headerStyle = {
      background: "#8000ff",
      color: "black",
      padding: "20px",
      borderRadius: "20px",
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
            borderRadius: "20px",
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
}

export default Style;
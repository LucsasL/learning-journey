// With JSX you can write expressions inside curl braces. The expressions can be a React variable, or property, or any other valid JavaScript expression JSX will execute the expression and return the result.

const name = "Irineu nusabo";
const multiply = (a, b) => a * b;
const specialClass = "simple-class";

function Component() {
  return (
    <>
      {/* Rendering Variables Values */}
      <h1>{name}</h1>
      <p>2 + 2 = {2 + 2}</p>
      {/* Rendering Arrays */}
      <p>My friend lists: {["Alex ", "John ", "Jordan ", "HuXn"]}</p>
      {/* Rendering Function Value */}
      <p>2 * 2 = {multiply(2, 2)}</p>
      {/* Rendering Classes */}
      <p className={specialClass}>This is a special class</p>
    </>
  );
}
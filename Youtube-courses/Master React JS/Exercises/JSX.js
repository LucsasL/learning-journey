// JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.

function App() {
  return (
    <section>
      <article>
        <h1 className="mainTitle">Hello, world!</h1>
        <p>This is some content :D</p>
        <img src="" alt="Course" />

        <form>
          <label htmlFor="name">Name:</label> <br />
          <input 
            id="name" 
            type="text" 
            placeholder="Enter your name"
          />
        </form>
      </article>
    </section>
  );
}

export default App;

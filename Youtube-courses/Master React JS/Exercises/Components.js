// Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

// There are 2 types of components

// Class base components
import { Component } from "react";

class App extends Component {
  render() {
    return <h1>Hello John Doe</h1>;
  }
}

// Functional components
function FirstComponent() {
  return (
    <div>Component</div>
  )
}

export default App;
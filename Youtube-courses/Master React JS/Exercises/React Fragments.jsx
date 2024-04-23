import Add from "./components/Add";
import Greeting from "./components/Greeting";

import { Fragment } from "react";

function App() {
  return ( // <></> can also be used instead of <Fragment>
    <Fragment>
      <Greeting />
      <Add />
    </Fragment>
  );
}

export default App;

import { Data, Data2 } from "../App";

const ComponentC = () => {
  return (
    <>
      <Data.Consumer>
          
          return (
        {(name) => {
            <Data2.Consumer>
              <h1>My name is: {name}</h1>;

            </Data2.Consumer>
          )
        }}
      </Data.Consumer>
    </>
  );
};

export default ComponentC;
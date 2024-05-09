import { Data, Data2 } from "../App";

const ComponentC = () => {
  return (
    <>
      <Data.Consumer>
        {
          (name) => {
            return (
              <Data2.Consumer>
              {
                (age) => {
                  return <h1>
                    My name is {name} and I'm {age} years old
                  </h1>;
                }
              }
            </Data2.Consumer>
            );
          }
        }
      </Data.Consumer>
    </>
  );
};

export default ComponentC;
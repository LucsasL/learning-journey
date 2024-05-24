import Accordion from "./components/Accordion";
import { accordionData } from "./Utils/content";

const App = () => {
  return (
    <>
      {
        accordionData.map(({ title, quote }) => {
          return (
            <Accordion
              title={title}
              content={quote}
              key={Math.floor(Math.random()) * 100}
            />
          ); 
        })
      }
    </>
  )
}

export default App;
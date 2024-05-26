import Accordion from "./components/Accordion";
import { accordionData } from "./Utils/content";

const App = () => {
  return (
    <>
      <section className="container">
        {accordionData.map(({ title, content }) => {
          return (
            <Accordion
              title={title}
              content={content}
              key={Math.floor(Math.random() * 100)}
            />
          );
        })}
      </section>
    </>
  );
};

export default App;

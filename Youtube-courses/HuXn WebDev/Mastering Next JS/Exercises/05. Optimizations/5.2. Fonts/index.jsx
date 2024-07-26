// You can take fons from "Google Fonts" and import it to your project with Next JS

// Fonts Import
import { Roboto } from "next/font/google";
const roboto = new Roboto({ subsets: ["latin"], weight: "500" });

function Home() {
  return (
    <>
      <section>
        <h1 className={roboto}>Google Fonts</h1>

        <h2 className={roboto}>Hello, this is roboto font</h2>
      </section>
    </>
  );
}

export default Home;

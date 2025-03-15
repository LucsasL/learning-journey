import React from "react";
import "./globals.css";

import User from './components/User';

function Home() {
  return (
    <>
      <section>
        <User name="Huxn" age={20} />
      </section>
    </>
  );
}

export default Home;

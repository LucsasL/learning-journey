"use client";

import React, { FC } from "react";
import "./globals.css";

// Button Component Imports
import MyContextProvider from "@/context/MyContext";
import MyComponent from "@/components/MyComponent";

const Home: FC = () => {
  return (
    <>
      <main>
        <MyContextProvider>
          <MyComponent />
        </MyContextProvider>
      </main>
    </>
  );
}

export default Home;
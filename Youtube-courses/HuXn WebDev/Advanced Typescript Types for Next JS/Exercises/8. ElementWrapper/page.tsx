"use client";

import React from "react";
import "./globals.css";

import ElementWrapper from "@/components/ElementWrapper";

function Home() {
  return (
    <>
      <main>
        <section>
          <ElementWrapper elementType="div" className="box">
            <p>This is a div element with a className of &quot;box&quot;</p>
          </ElementWrapper>

          <ElementWrapper
            elementType="h1"
            className="title"
            onClick={() => alert("h1 was clicked! :D")}
          >
            This is a <span style={{ color: "blue" }}>title</span>
          </ElementWrapper>

          <ElementWrapper elementType="button" onClick={() => alert("Button clicked")}>
            Click Me
          </ElementWrapper>
        </section>
      </main>
    </>
  );
}

export default Home;

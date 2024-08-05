"use client";

import React from "react";
import Page2 from "../page2/page";
import Home from "../page";
import { useRouter } from "next/navigation";

function Page1() {
  const router = useRouter();

  const clickHandler = (page) => {
    router.push(page);
  };

  return (
    <>
      <h1>This is the 1 page</h1>

      <button onClick={() => clickHandler("/")}>Go to home page</button> <br />
      <button onClick={() => clickHandler("/page2")}>Go to page 2</button>
    </>
  );
}

export default Page1;

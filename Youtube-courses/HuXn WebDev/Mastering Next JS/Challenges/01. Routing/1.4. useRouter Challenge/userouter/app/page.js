// The goal of this exercise is to practice using the useRouter hook in a Next.js application for programmatic navigation and accessing route information.

// 1. Create two routes: "page1" and "page2".

// 2. In the "page1" route, create a simple landing page with a message and a button.

// 3. In the "page2" route, create a second page with information or content.

// 4.Implement a programmatic navigation from "page1" to "page2" using the useRouter hook from Next. When the user clicks a button on "page1," they should be navigated to "page2."

// 5. Verify that programmatic navigation from "page1" to "page2" works as expected, and that the route information is displayed on "page2."

"use client";

import { useRouter } from "next/navigation";
import React from "react";

function Home() {
  const router = useRouter();

  const clickHandler = (page) => {
    router.push(page);
  };

  return (
    <>
      <h1>This is the home page</h1>
      <button onClick={() => clickHandler("/page1")}>Go to page 1</button> <br />
      <button onClick={() => clickHandler("/page2")}>Go to page 2</button> <br />
    </>
  );
}

export default Home;

// useRouter()

// useRouter is a hook provided by Next.js that allows you to access the router object and its properties within your component.

// It provides programmatic control over the router and allows you to navigate to different pages or perform other routing-related actions in response to user interactions or events within you component.

// It's useful when you need to handle navigation or access route-specific information directly in your component logic.

"use client";

import React from "react";
import { useRouter } from "next/navigation";

function Home() {
  const router = useRouter();

  const navigate = (page) => {
    router.push(page);
  };

  return (
    <>
      <section>
        <h1>useRouter()</h1>
        <button className="border p-2 m-2" onClick={() => navigate("about")}>
          Go to about page
        </button>{" "}
        <br />
        <button className="border p-2 m-2" onClick={() => navigate("login")}>
          Go to login page
        </button>{" "}
        <br />
        <button className="border p-2 m-2" onClick={() => navigate("projects")}>
          Go to the projects page
        </button>{" "}
        <br />
      </section>
    </>
  );
}

export default Home;

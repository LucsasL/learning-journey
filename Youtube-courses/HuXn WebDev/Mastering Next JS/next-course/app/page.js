"use client";

import React from "react";
import { useRouter } from "next/navigation";

function Home() {
  const router = useRouter();

  const navigate = (page) => {
    router.push(page);
  }

  return (
    <>
      <section>
        <h1>useRouter()</h1>

        <button
          className="border p-2 m-2"
          onClick={() => navigate("about")}
        >
          Go to about page
        </button> <br />

        <button
          className="border p-2 m-2"
          onClick={() => navigate("login")}
        >
          Go to login page
        </button> <br />

        <button
          className="border p-2 m-2"
          onClick={() => navigate("projects")}
        >
          Go to the projects page
        </button> <br />
      </section>
    </>
  );
}

export default Home;

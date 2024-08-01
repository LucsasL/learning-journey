"use client";

// Hooks Import
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Fonts Import
import { Roboto } from "next/font/google";
const roboto = Roboto({ subsets: ["latin"], weight: "500" });

async function Home() {
  const router = useRouter();
  
  async function fetchData() {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts");
    data = await data.json();

    console.log(data);
    return data;
  }

  let products = await fetchData();

  const navigate = (page) => {
    router.push(page);
  };

  return (
    <>
      <section>
        <h1 className={roboto}>Google Fonts</h1>

        <h2 className={roboto}>Hello, this is roboto font</h2>

        <ul>
          {
            products.map(p => {
              return <li key={p.id}>{p.title}</li>
            })
          }
        </ul>
      </section>
    </>
  );
}

export default Home;

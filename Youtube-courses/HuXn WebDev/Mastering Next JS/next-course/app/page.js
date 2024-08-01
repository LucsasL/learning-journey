"use client";

// Hooks Import
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Fonts Import
import { Roboto } from "next/font/google";
const roboto = Roboto({ subsets: ["latin"], weight: "500" });

function Home() {
  const router = useRouter();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let data = await fetch("https://jsonplaceholder.typicode.com/posts");
      data = await data.json();
      setProduct(data);
      console.log(data);
    }

    fetchData();
  }, []);

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
            product.map(p => {
              return <li key={p.id}>{p.title}</li>
            })
          }
        </ul>
      </section>
    </>
  );
}

export default Home;

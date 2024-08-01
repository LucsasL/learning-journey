// Fetching data from the client

"use client";

import React from 'react'
import { useState, useEffect } from "react";

function FetchingDataClient() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let data = await fetch("https://jsonplaceholder.typicode.com/posts");
      data = await data.json();

      console.log(data);
      setProduct(data);
    }

    fetchData();

  }, []);

  return (
    <>
      <section>
        <h1>
          This data is from an external API.
        </h1>

        <ul>
          {product.map((p) => {
            return <li key={p.id}>{p.title}</li>;
          })}
        </ul>
      </section>
    </>
  );
}

export default FetchingDataClient;
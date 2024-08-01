// Fetching data from the server

// Create an aynchronous function to fetch data from the server

import React from 'react'

function FetchDataServer() {
  async function fetchData() {
  let data = await fetch("https://jsonplaceholder.typicode.com/posts");
  data = await data.json();

  console.log(data);
  return data;
}

  let products = fetchData();

  return (
    <>
      <section>
        <h1>
          Products:
        </h1>

        {
          products.map(prod => {
            return <li key={prod.id}>{prod.title}</li>
          })
        }
      </section>
    </>
  );
}

export default FetchDataServer;
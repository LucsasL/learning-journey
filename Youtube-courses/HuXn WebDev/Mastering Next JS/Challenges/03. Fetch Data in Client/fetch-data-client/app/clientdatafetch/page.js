"use client";

import React, { useEffect, useState } from 'react';

function ClientDataFetch() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      let data = await fetch("https://jsonplaceholder.typicode.com/posts");
      data = await data.json();

      console.log(data);
      setPosts(data);
    }

    fetchData();
  }, []);

  return (
    <>
      <div>
        <ul>
          {
            posts.map((p) => {
              return <li key={p.id}>{p.title}</li>;
            })
          }
        </ul>
      </div>
    </>
  )
}

export default ClientDataFetch;
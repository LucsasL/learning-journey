"use client"

import { useRouter } from 'next/navigation';
import React from 'react'

function Home() {
  const router = useRouter();

  const clickHandler = (page) => {
    router.push(page);
  }

  return (
    <>
      <h1>Access different routes in the users page</h1>

      <button onClick={() => clickHandler("/users")}>Go to users page</button>
    </>
  )
}

export default Home;
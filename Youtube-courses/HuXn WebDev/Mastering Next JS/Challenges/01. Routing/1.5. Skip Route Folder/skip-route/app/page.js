// The goal of this exercise is to practice organizing routes using folders and excluding certain folders from being treated as routes in a Next.js application.

// Create the "users" folder (but it shouldn't be a route).

// Inside the "users" folder create a "userinfo" route.

// Inside the "app" directory create another folder name "auth" but it (shouldn't be a route).

// Inside the "auth" folder create a login route which will only print (Please Login To See The Content)

"use client";

import React from 'react'
import { useRouter } from 'next/navigation';

function Home() {
  const router = useRouter();
  
  const clickHandler = (page) => {
    router.push(page);
  }

  return (
    <>
      <h1>
        This is the home page
      </h1>

      <button onClick={() => clickHandler("/login")}>Login</button>
      <button onClick={() => clickHandler("/userinfo")}>User info</button>
    </>
  )
}

export default Home;
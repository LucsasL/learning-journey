// The goal of this exercise is to practice using environment variables to manage configuration settings and sensitive data in a Next.js application.

// 1. In your Next.js project, create a .env.local file to store your environment variables. This file will be used for local development and should not be committed to version control.

// 2. Define environment variables in the .env.local file for NODE_ENV, If it's in the development mode show this message: "App running in the development mode".

// 3. Access the environment variables in your Next.js application. For example, you can use process.env.NODE_ENV to access the API key.

import React from 'react';

function Home() {
  console.log(process.env.NODE_ENV);

  return (
    <>
      <h1>{process.env.NODE_ENV}</h1>
    </>
  )
}

export default Home;
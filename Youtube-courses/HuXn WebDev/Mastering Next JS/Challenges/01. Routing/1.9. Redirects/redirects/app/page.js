// The goal of this exercise is to practice setting up and managing redirects in a Next.js application to enhance user experience and ensure proper page navigation.

// 1. In your Next.js project, create a custom error page named "404.js" in the "app" directory. This page will serve as the custom 404 error page for your application.

// 2. Implement redirects for the following scenarios:

// 3. Create a redirection rule that redirects users from the route "/old-page" to the new page "/new-page."

// 4. Create a rule that redirects users from a non-existing route "/non-existing" to the custom 404 error page "404.js."

// 5. Verify that the redirection from "/old-page" to "/new-page" works as expected, and that accessing a non-existing route redirects users to the custom 404 error page.

"use client";

import Link from 'next/link';
import React from 'react'

function Home() {
  return (
    <>
      <h1>
        This is the home page
      </h1>

      <Link href={"/old-page"} className='links'>
        Go to new page
      </Link>
    </>
  )
}

export default Home;
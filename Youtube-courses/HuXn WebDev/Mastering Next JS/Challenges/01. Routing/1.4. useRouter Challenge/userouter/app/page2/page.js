"use client"

import { useRouter } from 'next/navigation';
import React from 'react';

function Page2() {
  const router = useRouter();
  
  const clickHandler = (page) => {

    router.push(page);
  };

  return (
    <>
      <h1>This is the 2 page</h1>
      <p>
        lorem ipsulum dolor
      </p>
      <button onClick={() => clickHandler("/page1")}>Go to page 1</button> <br />
      <button onClick={() => clickHandler("/")}>Go to home page</button>
    </>
  );
}

export default Page2;
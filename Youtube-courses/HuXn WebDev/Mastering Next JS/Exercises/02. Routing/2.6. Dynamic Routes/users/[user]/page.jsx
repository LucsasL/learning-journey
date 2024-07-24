"use client"

import React from 'react'

function User({ params }) {
  console.log(params);

  return (
    <div>{params.user}</div>
  );
}

export default User;
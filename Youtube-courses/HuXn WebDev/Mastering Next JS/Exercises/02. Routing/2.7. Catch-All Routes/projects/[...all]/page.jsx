"use client"

import React from 'react';

function Project({ params }) {
  console.log(params);

  return (
    <>
      <h1>
        Project's type: {params.all[0]}
      </h1>

      <h3>
        Project's name: {params.all[2]}
      </h3>

      {params.all.map((r, i) => <p key={i}>{`${r}/`}</p>)}
    </>
  );
}

export default Project;
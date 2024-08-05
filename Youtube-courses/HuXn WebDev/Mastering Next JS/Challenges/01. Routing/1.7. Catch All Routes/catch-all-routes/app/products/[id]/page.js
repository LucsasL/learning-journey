import React from 'react'

function ProdID({ params }) {
  return (
    <>
      <h1>
        This product has an ID of {params.id}
      </h1>

      <p>
        Nothing more to see in this page
      </p>
    </>
  );
}

export default ProdID;
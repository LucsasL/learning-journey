import React from 'react'

function User({ params }) {
  console.log(params);
  
  return (
    <>
      <h1>This is the {params.user} page</h1>

      <p>
        It takes the route as a parameter an redirect the user to a page with the same layout, changing only the users content.
      </p>
    </>
  )
}

export default User;
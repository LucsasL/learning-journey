// You can create a page for when the user access a route that doesn't have content, creating a .js file with the name of "not-found", you can prevent the user from accessing the default 404 page of Next.JS

import React from 'react';

function NotFound() {
  return (
    <div>404 Page Not Found</div>
  )
}

export default NotFound;
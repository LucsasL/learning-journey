// You can return more metadata than the default and optimize the SEO of your website

// It works as the meta tags of HTML, but in this case you're creating it in a virtual DOM

import React from 'react';

function Users() {
  return (
    <div>Users</div>
  )
}

export default Users;

export const generateMetaData = () => {
  return {
    title: "This is a user page",
    description: "All about the users"
  }
}
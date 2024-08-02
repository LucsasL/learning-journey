// Environment Variables

// Next.js comes with built-in support dor environment variables, which allows you to do the following:

// Use .env.local to load environment variables

// Bundle environment variables for the browser by prefixing with NEXT_PUBLIC_

// DB_HOST=localhost
// DB_USER=myuser
// DB_PASS=mypassword

import React from "react";

function Page() {
  console.log(process.env.DATABASE_URI);
  console.log(process.env.JWT_SECRET);
  console.log(process.env.NODE_ENV);
  console.log(process.env.PORT);

  return (
    <div>
      {process.env.DATABASE_URI ? (
        <h1>Database Successfully Connected</h1>
      ) : (
        <h1>404 Not Found</h1>
      )}
    </div>
  );
}

export default Page;
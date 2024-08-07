// The goal of this exercise is to practice creating conditional layouts in a Next.js application, allowing different pages to have distinct layouts based on specific conditions.

// 1. Create two distinct layout components: "StandardLayout.js" and "AlternateLayout.js." Each layout component should have a different structure, styling, or content.

// 2. Create a new page or modifiy the exisiting one in the "app" directory named "page.js." This page will serve as the landing page for your application.

// 3. Implement conditional layout selection for the root "page.js". If a specific condition is met (e.g., a user is logged in), use the "AlternateLayout" component; otherwise, use the "StandardLayout" component.

// 4. Design the "StandardLayout" and "AlternateLayout" components to make them visually distinct.

// 5. Test the application.

import React from 'react'

function Home() {
  return (
    <>
      <main>
        <div>
          Home
        </div>
      </main>
    </>
  )
}

export default Home;
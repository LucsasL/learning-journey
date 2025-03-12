import React from 'react';

import User from './components/User';

function Home() {
  return (
    <>
      <section>
        <User>
          <p>This is a children</p>
        </User>
      </section>
    </>
  )
}

export default Home;
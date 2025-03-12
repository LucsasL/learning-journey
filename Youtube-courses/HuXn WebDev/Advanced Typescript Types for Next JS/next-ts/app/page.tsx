import React from 'react';

import User from './components/User';

function Home() {
  return (
    // Attaching Types to Props
    <>
      <section>

        {/* Using user component and passing props */}
        <User name="Lucas" age={25} email="example@gmail.com" isStudent={true} />
      </section>
    </>
  )
}

export default Home;
import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <>
      <header>
        <div>
          <h1>
            This is the header
          </h1>
        </div>

        <div>
          <Link className='links' href={"/"}>HOME</Link>
          <Link className='links' href={"/contact"}>CONTACT</Link>
        </div>
      </header> 
    </>
  )
}

export default Header;
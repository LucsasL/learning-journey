import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <>
      <header>
        <div>Logo</div>

        <div className="headerNav">
          <nav>
            <ul>
              <Link className="links" href="/">HOME</Link>
              <Link className="links" href="/sign-up">SIGN UP</Link>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
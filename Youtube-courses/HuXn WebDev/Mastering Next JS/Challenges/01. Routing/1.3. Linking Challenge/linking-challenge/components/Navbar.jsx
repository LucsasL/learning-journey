import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <header>
      <div>
        <div className="logo">
          Logo
        </div>

        <nav>
          <ul>
            <Link href="/" className="link">HOME</Link>
            <Link href="/dashboard" className="link">DASHBOARD</Link>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar;
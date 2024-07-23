import Link from "next/link";

function Navbar() {
  return (
    <header>
      <div className="logo">Logo</div>
      <nav>
        <div className="linksContainer">
          <ul>
            <Link href="/" className="link">
              HOME
            </Link>
            <Link href="/about" className="link">
              ABOUT
            </Link>
            <Link href="/portfolio" className="link">
              PORTFOLIO
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <Link href="/">
            <h2>Sample</h2>
          </Link>

          <nav>
            <Link href="/about">About</Link>
            <Link href="/staff">Staff Members</Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;

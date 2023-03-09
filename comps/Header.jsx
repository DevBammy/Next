import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="header">
        <section>
          <Link href="/">
            <h2>Sample</h2>
          </Link>

          <nav>
            <Link href="/about">About</Link>
            <Link href="/staff">Staff Members</Link>
          </nav>
        </section>
      </div>
    </>
  );
};

export default Header;

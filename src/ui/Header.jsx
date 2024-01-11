import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase">
        <Link to="/" className="tracking-widest">
          Fast React Pizza Co.
        </Link>
        <p>React</p>
      </header>
    </>
  );
};

export default Header;

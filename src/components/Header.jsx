import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>NC News</h1>
      <nav className="navbar">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/articles" className="nav-item">
          Articles
        </Link>
      </nav>
    </header>
  );
};

export default Header;

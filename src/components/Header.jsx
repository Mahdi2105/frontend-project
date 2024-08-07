import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

const Header = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogOut = () => {
    setUser({});
  };

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
        {!user.username ? (
          <Link to="/users" className="nav-item">
            Login
          </Link>
        ) : (
          <Link
            to="/"
            onClick={() => handleLogOut()}
            className="nav-item-logout"
          >
            Logout
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;

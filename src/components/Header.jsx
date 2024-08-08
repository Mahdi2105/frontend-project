import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useContext, useEffect } from "react";

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

  const handleLogOut = () => {
    setUser({});
    localStorage.removeItem("user");
  };

  useEffect(() => {
    if (storedUser.username) {
      setUser(storedUser);
    }
  }, [setUser]);

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
          <Link to="/" onClick={handleLogOut} className="nav-item-logout">
            Logout
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;

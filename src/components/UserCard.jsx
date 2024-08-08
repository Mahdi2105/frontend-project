import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

const UserCard = ({ user }) => {
  const { setUser } = useContext(UserContext);

  const handleLogin = () => {
    setUser(user);
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user));
  };
  return (
    <div key={user.username} className="user-card">
      <div className="user-card-content">
        <h3>{user.username}</h3>
        <h3>Name: {user.name}</h3>
        <img src={user.avatar_url} />
      </div>
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default UserCard;

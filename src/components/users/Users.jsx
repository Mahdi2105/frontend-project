import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import { getUsers } from "../../../api";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((userData) => {
      setUsers(userData);
    });
  }, []);

  return (
    <div className="main-content">
      <h2>Users</h2>
      <div className="articles-area">
        {users.map((user) => {
          return <UserCard key={user.username} user={user} />;
        })}
      </div>
    </div>
  );
};

export default Users;

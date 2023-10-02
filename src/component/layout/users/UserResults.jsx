import React from "react";
import { useState, useEffect } from "react";
import Loading from "../Loading";
import UserItems from "./UserItems";

function UserResults() {
  const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: { Authorization: `token ${GITHUB_TOKEN}` },
    }); // Not using headers authorization cause sometimes the token is missing quicly after generate it

    const data = await response.json();

    console.log(data);
    setLoading(false);
    setUsers(data);
  };

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {users.map((user) => (
          <>
            <UserItems key={user.id} user={user} />
          </>
        ))}
      </div>
    );
  } else {
    return <Loading />;
  }
}

export default UserResults;

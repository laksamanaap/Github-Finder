import React, { useContext } from "react";
import { useEffect } from "react";
import Loading from "../Loading";
import UserItems from "./UserItems";
import GithubContext from "../../../context/github/GithubContext";

function UserResults() {

  const { users, loading, fetchUsers } = useContext(GithubContext);

  useEffect(() => {
    fetchUsers();
  }, []);

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

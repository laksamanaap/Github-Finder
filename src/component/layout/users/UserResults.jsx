import React, { useContext } from "react";
import { useEffect } from "react";
import Loading from "../Loading";
import UserItems from "./UserItems";
import GithubContext from "../../../context/github/GithubContext";
import UserNotFound from "../../pages/UserNotfound";

function UserResults() {
  const { users, loading, searchUsers } = useContext(GithubContext);

  useEffect(() => {
    searchUsers();
  }, []);

  if (!loading) {
    return (
      <div className="grid place-content-center grid-cols-1 gap-8 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {users.length > 0 ? (
          users.map((user) => (
            <>
              <UserItems key={user.id} user={user} />
            </>
          ))
        ) : (
          <>
            <div className="opacity-0"></div>
            <UserNotFound />
          </>
        )}
      </div>
    );
  } else {
    return <Loading />;
  }
}

export default UserResults;

import React from "react";
import UserResults from "../layout/users/UserResults";
import UserSearch from "../layout/users/UserSearch";

function Home() {
  return (
    <>
      <UserSearch />
      <UserResults />
    </>
  );
}

export default Home;

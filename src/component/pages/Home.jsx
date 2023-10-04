import React from "react";
import UserResults from "../layout/users/UserResults";
import UserSearch from "../layout/users/UserSearch";
import Alert from "../layout/Alert";

function Home() {
  return (
    <>
      <Alert />
      <UserSearch />
      <UserResults />
    </>
  );
}

export default Home;

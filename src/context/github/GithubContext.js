import { createContext, useState, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();
const GithubURL = process.env.REACT_APP_GITHUB_URL;
const GithubToken = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialValue = {
    users: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(githubReducer, initialValue);

  const fetchUsers = async () => {
    const response = await fetch(`${GithubURL}/users`, {
      headers: { Authorization: `token ${GithubToken}` },
    }); // Headers authorization (sometimes the token is missing quicly after generate it)

    const data = await response.json();

    console.log(data);

    dispatch({
      type: "GET_USERS",
      payload: data,
    });

    // setLoading(false);
    // setUsers(data);
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;

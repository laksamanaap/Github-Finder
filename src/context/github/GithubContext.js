import { createContext, useState, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();
const GithubURL = process.env.REACT_APP_GITHUB_URL;
const GithubToken = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialValue = {
    users: [],
    user: {},
    loading: true,
  };

  const [state, dispatch] = useReducer(githubReducer, initialValue);

  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };

  const searchUsers = async (text) => {
    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(`${GithubURL}/search/users?${params}`, {
      headers: { Authorization: `token ${GithubToken}` },
    });

    // const response = await fetch(`${GithubURL}/search/users?${params}`);
    // Headers authorization (sometimes the token is missing quickly after generate it)

    const { items } = await response.json();

    console.log(items);

    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  console.log("Users Data :", state.users);
  // console.log("Dispatch :", dispatch);

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        searchUsers,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;

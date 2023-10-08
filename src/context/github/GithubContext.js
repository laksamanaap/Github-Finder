import { createContext, useState, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();
const GithubURL = process.env.REACT_APP_GITHUB_URL;
const GithubToken = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialValue = {
    users: [],
    user: {},
    repos: [],
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

  // Get Single User
  const getUser = async (login) => {
    // const response = await fetch(`${GithubURL}/search/users/${login}`, {
    //   // Try to change with another endpoint (422 Unproccessable content). Solved!
    //   headers: { Authorization: `token ${GithubToken}` },
    // });

    const response = await fetch(`${GithubURL}/users/${login}`, {
      // (Getting Single User)
      // Try to change with another endpoint (422 Unproccessable content). Solved!
      headers: { Authorization: `token ${GithubToken}` },
    });

    if (response.status === 404) {
      window.location = "/notfound";
    } else if (response.status === 422) {
      console.error("Check your endpoint!, Unprocessable content!");
    } else {
      const data = await response.json();

      console.log(data);

      dispatch({
        type: "GET_USER",
        payload: data,
      });
      // items.map((item, index) => {
      //   console.log(item);
      //   return null;
      // });

      // dispatch({
      //   type: "GET_USER",
      //   payload: items,
      // });
    }
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;

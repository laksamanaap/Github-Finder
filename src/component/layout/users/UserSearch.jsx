import React, { useState } from "react";
import GithubContext from "../../../context/github/GithubContext";
import { useContext } from "react";

function UserSearch() {
  const { users } = useContext(GithubContext);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      alert("Please fill the search form!");
    } else {
      setText("");
    }
  };

  return (
    <div className="grid grid-cols-1 mx-auto xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg lg text-black"
                placeholder="Search..."
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn bg-gray-900 btn-lg text-white"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            onClick={() => dispatch({ type: "CLEAR_USERS" })}
            className="btn btn-primary btn-lg"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;

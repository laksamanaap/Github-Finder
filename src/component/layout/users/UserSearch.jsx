import React, { useState } from "react";
import { useContext } from "react";
import GithubContext from "../../../context/github/GithubContext";
import AlertContext from "../../../context/alert/AlertContext";

function UserSearch() {
  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please fill the search form", "error");
      // alert("Please fill the search form!");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <>
      <div className="flex justify-center mx-auto mb-8 gap-8">
        <div className="max-w-2xl">
          <form onSubmit={handleSubmit} className="">
            <div className="form-control ">
              <div className="relative ">
                <input
                  type="text"
                  className="w-full rounded-3xl pr-40 bg-gray-200 input input-lg lg text-black"
                  placeholder="Search..."
                  value={text}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 rounded-3xl w-36 btn bg-gray-900 btn-lg text-white"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
        {users.length > 0 && (
          <div>
            <button onClick={clearUsers} className="btn btn-primary btn-lg">
              Clear
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default UserSearch;

import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

function UserItems({ user: { login, avatar_url, type } }) {
  return (
    <Link
      to={`user/${login}`}
      className="card shadow-lg compact side bg-base-100 cursor-pointer"
    >
      <div className="flex-row items-center space-x-4 card-body">
        <div className="avatar">
          <div className="rounded-full shadow w-14 h-14">
            <img src={avatar_url} alt={`${login} ${avatar_url}`} />
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-between">
            <h2 className="card-title">{login}</h2>
            {type === "User" ? (
              <div className="bg-cyan-800 rounded-lg py-1 px-3 text-white font-semibold opacity-70">
                {type}
              </div>
            ) : type === "Organization" ? (
              <div className="bg-sky-600 rounded-lg py-1 px-3 text-white font-semibold opacity-70">
                {type}
              </div>
            ) : (
              <div className="bg-violet-700 rounded-lg py-1 px-3 text-white font-semibold opacity-70">
                {type}
              </div>
            )}
          </div>
          <Link
            to={`/user/${login}`}
            className="text-base-content text-opacity-50 "
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </Link>
  );
}

UserItems.propTypes = {
  user: propTypes.object.isRequired,
};

export default UserItems;

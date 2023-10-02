import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserItems({ user: { login, avatar_url } }) {
  return (
    <Link
      to={`users/${login}`}
      className="card shadow-lg compact side bg-base-100 cursor-pointer"
    >
      <div className="flex-row items-center space-x-4 card-body">
        <div className="avatar">
          <div className="rounded-full shadow w-14 h-14">
            <img src={avatar_url} alt={`${login} ${avatar_url}`} />
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
          <Link
            to={`/users/${login}`}
            className="text-base-content text-opacity-40 "
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </Link>
  );
}

UserItems.PropTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItems;

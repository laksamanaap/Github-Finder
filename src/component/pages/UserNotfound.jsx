import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function UserNotfound() {
  return (
    <div className="hero">
      <div className="text-center hero-content ">
        <div className="max-w-lg flex flex-col gap-8">
          <h1 className="text-8xl font-bold">Oops!</h1>
          <p className="text-5xl">404 - User Not Found</p>
        </div>
      </div>
    </div>
  );
}

export default UserNotfound;

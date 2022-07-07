import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar shadow-lg bg-base-content min-h-0 h-18 mb-2 lg:mb-8">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-3xl text-accent">
          SeeMoviee
        </Link>
      </div>
    </div>
  );
};

export default Header;

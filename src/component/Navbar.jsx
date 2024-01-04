import React, { useState } from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <ul className="nav__list">
          <CustomLink to="/WatchNow">Watch Now</CustomLink>
          <CustomLink to="/Movies">Movies</CustomLink>
          <CustomLink to="/TVShows">TV Shows</CustomLink>
          <CustomLink to="/Sports">Sports</CustomLink>
          <CustomLink to="/Kids">Kids</CustomLink>
          <CustomLink to="/Library">Library</CustomLink>
        </ul>
      </nav>
    </>
  );
};

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <>
      <li>
        <Link
          className={isActive ? "  items active" : " items"}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </li>
    </>
  );
};

export default Navbar;

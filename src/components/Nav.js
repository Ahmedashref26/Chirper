import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => (
  <nav className="nav">
    <ul>
      <li>
        <img
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/282/baby-chick_1f424.png"
          alt="logo"
          className="logo"
        />
      </li>
      <li>
        <NavLink to="/" exact activeClassName="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/new" activeClassName="active">
          New Tweet
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;

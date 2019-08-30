import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.styles.scss';

const Nav = props => {
  return (
    <nav>
      <ul className="navigation">
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

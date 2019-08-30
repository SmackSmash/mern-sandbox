import React from 'react';
import { NavLink } from 'react-router-dom';
import './user.styles.scss';

const User = props => {
  return (
    <section>
      <ul className="user">
        <li>
          <NavLink exact to="/signup">
            Sign Up
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default User;

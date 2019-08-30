import React from 'react';
import Nav from './nav/nav.component';
import Container from '../layout/container/container.component';
import User from './user/user.component';
import './header.styles.scss';

const Header = props => {
  return (
    <header className="header">
      <Container>
        <Nav />
        <User />
      </Container>
    </header>
  );
};

export default Header;

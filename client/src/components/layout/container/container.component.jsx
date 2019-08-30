import React from 'react';
import './container.component.scss';

const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;

import React from 'react';

import logo from '../../assets/logo.svg';

import classes from './header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="logo" />
    </header>
  );
};

export default Header;

import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import styles from './header.module.css';

const Header = () => (
  <div className={styles.header}>
    <Logo />
  </div>
);

export default Header;

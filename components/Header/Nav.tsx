import React from 'react';
import className from 'classnames';

import { menus } from './constans';

import styles from '../../styles/Header.module.css';

const Nav = () => {
  return (
    <div className={styles.nav}>
      <ul className={styles.navList}>
        {menus.map(({ label }) => (
          <li
            className={className([
              'flex',
              'items-center',
              'cursor-pointer',
              'relative',
              styles.tail,
            ])}
            key={label}
          >
            {label}
          </li>
        ))}
      </ul>
      <span className={className(['max-lg:block'], styles.menu)} />
    </div>
  );
};

export default Nav;

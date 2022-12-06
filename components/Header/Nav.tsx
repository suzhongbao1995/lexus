import React from 'react';
import className from 'classnames';
import Image from 'next/image';
import menuImg from '../../public/menu.png';

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
      <div className={className(['max-lg:block'], styles.menu)}>
        <Image alt="" src={menuImg} />
      </div>
    </div>
  );
};

export default Nav;

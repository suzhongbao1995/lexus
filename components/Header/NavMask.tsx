import React, { PropsWithChildren } from 'react';
import styles from '../../styles/Header.module.css';
const NavMask = ({ children }: PropsWithChildren) => {
  return <div className={styles.navMask}>{children}</div>;
};

export default NavMask;

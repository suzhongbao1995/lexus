import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import styles from '../../styles/Header.module.css';

import NavMask from './NavMask';

const Header = () => {
  return (
    <div className={styles.swiper}>
      <NavMask>
        <div className={styles.navContainer}>
          <Logo />
          <Nav />
        </div>
      </NavMask>
      <section className={styles.navDescription}>
        <div>
          <p className={styles.navTitle}>2022 雷克萨斯全球设计大奖</p>
          <p className={styles.navTips}>新闻资讯</p>
        </div>
        <div className={styles.navTailContainer}>
          <p className={styles.navTail}>2022LEXUS雷克萨斯全球设计大奖</p>
          <p className={styles.navTail}>最高奖得主正式公布</p>
          <p className={styles.navTail}>PohYunRu创作的</p>
          <p className={styles.navTail}>“记忆倒带”斩获最高奖殊荣</p>
        </div>
      </section>
    </div>
  );
};

export default Header;

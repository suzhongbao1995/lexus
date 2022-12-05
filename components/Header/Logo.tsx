import React from 'react';
import Image from 'next/image';
import logoLeft from '../../public/logo-right1.png';
import logoRight from '../../public/logo-left.png';

import styles from '../../styles/Header.module.css';

// svg图片
const Logo = () => {
  return (
    <div className="w-1/4 flex items-center cursor-pointer">
      <Image alt="lexus" src={logoLeft} />
      <div className={styles.logoLine}></div>
      <Image alt="lexus" src={logoRight} />
    </div>
  );
};

export default Logo;

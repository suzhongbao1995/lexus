import React from 'react';

import styles from '../../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footerLink}>
      <ul>
        <li>网站地图</li>
        <li>二手车</li>
        <li>联系我们</li>
        <li>官网微博</li>
        <li>官网微信</li>
      </ul>
      <div className={styles.coryright}>
        <p>
          <span>© 2005-2022 雷克萨斯中国</span>
          <span className={styles.line} />
          <span>丰田汽车（中国）投资有限公司</span>
        </p>
        <p>
          <span>京ICP备11010962号</span>
          <span className={styles.line} />
          <span>京公网安备11010502030819</span>
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;

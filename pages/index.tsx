import React from 'react';

import Layout from '../components/Layout';
import Image from 'next/image';
import areaLeft from '../public/area1-left.png';
import areaRight from '../public/area1-right.png';
import area2 from '../public/area2.png';
import area3 from '../public/area3.png';

import styles from '../styles/Home.module.css';
import className from 'classnames';

function Home() {
  return (
    <Layout>
      <section className={styles.areaOne}>
        <div className={styles.areaOneDescription}>
          <div className={styles.areaLeftImg}>
            <Image alt="" className="max-sm:mx-auto" src={areaLeft} />
          </div>
          <div className="max-lg:flex-1">
            <p className={styles.introduceParagraph}>
              近日，LEXUS雷克萨斯正式宣布2022全球设计大奖最高奖得主，Poh Yun
              Ru所创作的“记忆倒带（Rewind）”从57个国家和地区的选手提交的1,726项参赛作品中脱颖而出，摘得2022第十届
              LEXUS雷克萨斯全球设计大奖最高奖桂冠。“记忆倒带（Rewind）”旨在通过先进科技，为失智老人等受记忆力障碍困扰的人群提供帮助，帮助他们唤醒记忆，构建更美好的未来。
            </p>
            <p className={styles.introduceParagraph}>
              LEXUS雷克萨斯全球设计大奖最高奖得主Poh Yun
              Ru表示：“我希望‘记忆倒带（Rewind）’能帮助更多人改善他们的生活，我非常感激LEXUS雷克萨斯全球设计大奖让我离这个目标又近了一步。能够获此殊荣，离不开大家给予的巨大支持，包括我的导师、团队内的工程师、程序员、医疗保健专家以及参与这一项目的广大用户。LEXUS雷克萨斯全球设计大奖让我们有机会将创意过程转化为实际的产品，这非常了不起。能与世界各地充满激情的设计师相聚于此，相互交流学习，令我备受鼓舞。这是一场意义深远、充满启迪的创意之旅，我很高兴能够通过创意与设计和大家一起构建更美好的未来。”
            </p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image alt="" className="flex-1" src={areaRight}></Image>
        </div>
      </section>
      <section className={styles.contentCenter}>
        LEXUS雷克萨斯全球设计大奖不同于其他设计赛事，6位决赛入围选手将接受4位蜚声国际的专业导师亲自指导。备受尊敬的精英导师们来自不同行业背景和专业领域，与决赛入围选手进行一对一的沟通交流，选手们将基于导师们的个性化设计指导，充分激发各自的创意潜能，精心打造并持续完善各自的原型设计作品。LEXUS雷克萨斯全球设计大奖已连续举办九届，共呈现90件独具创意的作品，为139名独立设计师和设计团队提供了展示各自才华和天赋的广阔平台。参赛者均致力于借助设计的力量，构建更美好未来。
      </section>
      <section>
        <div className={styles.timeLine}>
          <div className={styles.timeDot}>
            <div className={styles.time}>2021年11月</div>
            <div className={styles.timeDescription}>
              入围者筛选环节 评审以线上会议的形式筛选作品 和选出优秀参赛者。
            </div>
          </div>
          <div className={styles.timeDot}>
            <div className={styles.time}>2021年12月</div>
            <div className={styles.timeDescription}>确定入围者 最终筛选确定6名入围者。</div>
          </div>
          <div className={className(styles.timeDot, styles.currentTimeDot)}>
            <div className={styles.currentTime}>2022年1月</div>
            <div className={className(styles.timeDescription, styles.currentTimeDescription)}>
              导师计划 6名入围者接受导师指导。
            </div>
          </div>
          <div className={styles.timeDot}>
            <div className={styles.time}>2022年1月底</div>
            <div className={styles.timeDescription}>
              公布入围者名单 在雷克萨斯设计奖网站、新闻稿和 社交媒体上公布6名入围者名单。
            </div>
          </div>
          <div className={styles.timeDot}>
            <div className={styles.time}>2022年1月</div>
            <div className={styles.timeDescription}>导师计划 6名入围者接受导师指导。</div>
          </div>
        </div>
      </section>
      <section className={styles.area}>
        <div className={className(styles.mr49, styles.areaIntroduce)}>
          <h3 className={styles.areaTitle}>G路径检索服务</h3>
          <p className={styles.areaDescription}>
            实时把握路况，避开拥堵路段，寻找最佳路径，减少堵车烦恼，并接通中心话务员，语音设定目的地；点击车载器界面G路径按钮，即可得到最优路径。
          </p>
          <p className={styles.areaDescription}>
            截至2013年5月，此项服务已在北京、上海、广州、深圳、天津、沈阳、南京、成都、重庆、宁波、长沙、苏州、福州、珠海、东莞、长春、武汉、杭州、无锡、厦门、中山、青岛、太原、石家庄、泉州、台州、昆明、佛山28个城市开通。全国其他各大城市也将陆续开通此项服务。
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image alt="" src={area2} />
        </div>
      </section>
      <section className={styles.area}>
        <div className={styles.imageContainer}>
          <Image alt="" className="max-lg:hidden lg:block" src={area3} />
        </div>
        <div className={className(styles.areaIntroduce, styles.ml49)}>
          <h3 className={styles.areaTitle}>预定服务</h3>
          <p className={styles.areaDescription}>
            预订服务中，除了随时预订酒店、机票、餐厅等服务之外，又增加了高尔夫球场预订服务，精选全国覆盖面广的知名高尔夫球场，全方位为您提供至尊服务。
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image alt="" className="hidden max-lg:block" src={area3} />
        </div>
      </section>
    </Layout>
  );
}

export default Home;
